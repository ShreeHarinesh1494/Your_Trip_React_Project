package com.trip.yourtrip.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trip.yourtrip.model.User;
import com.trip.yourtrip.repository.UserRepository;

@Service
public class UserService 
{
    @Autowired
    private UserRepository userRepository;

    public void registerUser(User user) {
        userRepository.save(user);
    }

    public boolean loginUser(User user) {
        Optional<User> optionalUser = userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
        return optionalUser.isPresent();
    }

    public User findByUsername(String username) {
        Optional<User> optionalUser = userRepository.findByUsername(username);
        return optionalUser.orElse(null);
    }

    public User updateUserProfile(String username, User updatedUser) {
        Optional<User> user = userRepository.findByUsername(username);
        return user.map(existingUser->{
            Optional.ofNullable(updatedUser.getPassword()).ifPresent(existingUser::setPassword);
            Optional.ofNullable(updatedUser.getCity()).ifPresent(existingUser::setCity);
            Optional.ofNullable(updatedUser.getPhoneNumber()).ifPresent(existingUser::setPhoneNumber);
            Optional.ofNullable(updatedUser.getGender()).ifPresent(existingUser::setGender);
            return userRepository.save(existingUser);

        }).orElse(new User());
        
        
    }

    @Transactional
    public boolean deleteByUsername(String username) {
        Optional<User> optionalUser = userRepository.findByUsername(username);
        if (optionalUser.isPresent()) {
            userRepository.delete(optionalUser.get());
            return true;
        }
        return false;
    }

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }
}
