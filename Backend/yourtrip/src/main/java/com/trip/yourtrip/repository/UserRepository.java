package com.trip.yourtrip.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trip.yourtrip.model.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long>
{
    boolean existsByUsername(String username);
    Optional<User> findByUsernameAndPassword(String username, String password);
    Optional<User> findByUsername(String username);
    void deleteByUsername(String username);

}
