package com.trip.yourtrip.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.trip.yourtrip.model.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long>
{
    boolean existsByUsername(String username);
    Optional<User> findByUsernameAndPassword(String username, String password);
    Optional<User> findByUsername(String username);
    void deleteByUsername(String username);

    @Query("SELECT u FROM User u WHERE u.city = ?1")
    List<User> findByCity(String city);
}
