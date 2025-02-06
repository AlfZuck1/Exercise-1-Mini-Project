package com.alfzuck1.miniProject.service;
import com.alfzuck1.miniProject.entity.User;

import java.util.List;


public interface IUserService {
    List<User> getUsers();
    User getUserByUsername(String username);
    User saveUser(User user);
    void deleteUserById(Integer id);
    User getUserById(Integer id);
}
