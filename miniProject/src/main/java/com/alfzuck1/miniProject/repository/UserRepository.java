package com.alfzuck1.miniProject.repository;

import com.alfzuck1.miniProject.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    void deleteByUsername(String username);
    Optional<User> findByUsername(String username);
}
