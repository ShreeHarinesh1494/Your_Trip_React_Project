package com.trip.yourtrip.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trip.yourtrip.model.User;
import com.trip.yourtrip.repository.UserRepository;
import com.trip.yourtrip.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController 
{
    // // register
    // @Autowired
    // private UserRepository userRepository;

    // //register
    // @PostMapping("/register")
    // public ResponseEntity<String> registerUser(@RequestBody User user) {
    //     if (userRepository.existsByUsername(user.getUsername())) {
    //         return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists!");
    //     }

    //     userRepository.save(user);
    //     return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully!");
    // }


    // @PostMapping("/login")
    // public ResponseEntity<String> loginUser(@RequestBody User user) {
    //     Optional<User> optionalUser = userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
    //     if (optionalUser.isPresent()) {
    //         return ResponseEntity.status(HttpStatus.OK).body("Login successful!");
    //     } else {
    //         return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password!");
    //     }
    // }


    // @GetMapping("/profile/{username}")
    // public ResponseEntity<User> getUserProfile(@PathVariable String username) {
    // Optional<User> user = userRepository.findByUsername(username);
    // return user.map(ResponseEntity::ok)
    //         .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());      
    // }

    // @PutMapping("/profile/{username}")
    // public ResponseEntity<User> updateUserProfile(@PathVariable String username, @RequestBody User updatedUser) {
    //     Optional<User> existingUserOptional = userRepository.findByUsername(username);
    //     return existingUserOptional.map(existingUser -> {
    //         Optional.ofNullable(updatedUser.getUsername()).ifPresent(existingUser::setUsername);
    //         Optional.ofNullable(updatedUser.getPassword()).ifPresent(existingUser::setPassword);
    //         Optional.ofNullable(updatedUser.getPhoneNumber()).ifPresent(existingUser::setPhoneNumber);
    //         Optional.ofNullable(updatedUser.getCity()).ifPresent(existingUser::setCity);
    //         Optional.ofNullable(updatedUser.getGender()).ifPresent(existingUser::setGender);
            
    //         User savedUser = userRepository.save(existingUser);
    //         return ResponseEntity.ok(savedUser);
    //     }).orElseGet(() -> ResponseEntity.notFound().build());
    // }

    //     @DeleteMapping("/delete/{username}")
    //     @Transactional
    //     public ResponseEntity<String> deleteUser(@PathVariable String username) {
    //         boolean userExists = userRepository.existsByUsername(username);
    //         if (userExists) {
    //             userRepository.deleteByUsername(username);
    //             return ResponseEntity.ok("User deleted successfully!");
    //         } else {
    //             return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Record not found with username: " + username);
    //         }
    //     }



    // //register
    // @GetMapping("/all")
    // public List<User> getAllUsers() {
    //     return userRepository.findAll();
    // }


    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        try {
            userService.registerUser(user);
            return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        if (userService.loginUser(user)) {
            return ResponseEntity.ok("Login successful!");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password!");
    }

    @GetMapping("/profile/{username}")
    public ResponseEntity<?> getUserProfile(@PathVariable String username) {
        User user = userService.findByUsername(username);
        if (user != null) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
    }

    @PutMapping("/profile/{username}")
    public ResponseEntity<?> updateUserProfile(@PathVariable String username, @RequestBody User updatedUser) {
        try {
            User user = userService.updateUserProfile(username, updatedUser);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @DeleteMapping("/delete/{username}")
    public ResponseEntity<String> deleteUser(@PathVariable String username) {
        if (userService.deleteByUsername(username)) {
            return ResponseEntity.ok("User deleted successfully.");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAllUsers();
        return ResponseEntity.ok(users);
    }
}
