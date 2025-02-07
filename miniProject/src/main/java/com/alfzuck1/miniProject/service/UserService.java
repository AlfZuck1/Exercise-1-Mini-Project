package com.alfzuck1.miniProject.service;

import com.alfzuck1.miniProject.entity.User;
import com.alfzuck1.miniProject.exceptions.UserNotFoundException;
import com.alfzuck1.miniProject.exceptions.UsernameAlreadyExistsException;
import com.alfzuck1.miniProject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService{
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getUsers() {
        List<User> users = userRepository.findAll();
        if(users.isEmpty()){
            throw new UserNotFoundException("No users found.");
        }
        return users;
    }

    @Override
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username).orElseThrow(
                ()-> new UserNotFoundException("User with username " + username + "not found."));
    }

    @Override
    public User saveUser(User user) {
        if(userRepository.existsByUsername(user.getUsername())){
            throw new UsernameAlreadyExistsException("Username is already taken.");
        }
        return userRepository.save(user);
    }

    @Override
    public User modifyUser(User user){
        User existingUser = userRepository.findById(user.getId()).orElseThrow(
                ()-> new UserNotFoundException("User not found"));

        if(!existingUser.getUsername().equals(user.getUsername()) &&
                userRepository.existsByUsername(user.getUsername())){
            throw new UsernameAlreadyExistsException("Username is already taken.");
        }

        existingUser.setUsername(user.getUsername());
        existingUser.setEmail(user.getEmail());
        existingUser.setAge(user.getAge());
        return userRepository.save(existingUser);
    }

    @Override
    public void deleteUserById(Integer id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isEmpty()) {
            throw new UserNotFoundException("User with id " + id +" not found.");
        }
        userRepository.deleteById(id);
    }

    @Override
    public User getUserById(Integer id) {
        return userRepository.findById(id).orElseThrow(
                () -> new UserNotFoundException("User with id " + id +" not found."));
    }
}
