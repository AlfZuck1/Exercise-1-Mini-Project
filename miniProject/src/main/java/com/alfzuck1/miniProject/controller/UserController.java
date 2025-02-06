package com.alfzuck1.miniProject.controller;

import com.alfzuck1.miniProject.entity.User;
import com.alfzuck1.miniProject.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "http://localhost:4200")
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private IUserService userService;

    @GetMapping
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("/{username}")
    public User getUserByUsername(@PathVariable String username){
        return userService.getUserByUsername(username);
    }

    @PostMapping
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @PutMapping("/{id}")
    public User modifyUser(@PathVariable Integer id, @RequestBody User userModified){
        User user = userService.getUserById(id);
        if(user != null){
            user.setUsername(userModified.getUsername());
            user.setEmail(userModified.getEmail());
            user.setAge(userModified.getAge());
            return userService.saveUser(user);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Integer id){
        userService.deleteUserById(id);
    }
}
