package com.trip.yourtrip.controller;

import java.util.List;
import java.util.Map;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trip.yourtrip.model.TravelProfile;
import com.trip.yourtrip.model.User;
import com.trip.yourtrip.repository.UserRepository;
import com.trip.yourtrip.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController 
{

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
    try {
        boolean isRegistered = userService.registerUser(user);
        if (!isRegistered) {

            return ResponseEntity.status(HttpStatus.CONFLICT).body("Username already exists!");
        }
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
    public ResponseEntity<List<Map<String, Object>>> getAllUsers() {
        List<Map<String, Object>> users = userService.findAllUsers();
        return ResponseEntity.ok(users);
    }
    

    @PostMapping("/registerWithTravelProfile")
    public ResponseEntity<?> registerUserWithTravelProfile(@RequestBody Map<String, Object> userMap) {
    // Extract user details from the userMap
    String username = (String) userMap.get("username");
    String password = (String) userMap.get("password");
    String phoneNumber = (String) userMap.get("phoneNumber");
    String city = (String) userMap.get("city");
    String gender = (String) userMap.get("gender");

    // Create a new user object
    User user = new User(username, password, phoneNumber, city, gender);

    // Extract travel profile details from the userMap
    String favoriteDestination = (String) userMap.get("favoriteDestination");
    String travelStyle = (String) userMap.get("travelStyle");
    String bucketList = (String) userMap.get("bucketList");

    // Create a new travel profile object
    TravelProfile travelProfile = new TravelProfile(favoriteDestination, travelStyle, bucketList);

    // Register the user with the travel profile
    User registeredUser = userService.registerUserWithTravelProfile(user, travelProfile);

    if (registeredUser == null) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body("Username already exists!");
    }

    return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
}


@PutMapping("/profile/{username}/updateTravelProfile")
public ResponseEntity<?> updateUserTravelProfile(@PathVariable String username, @RequestBody TravelProfile updatedTravelProfile) {
    User user = userService.updateUserTravelProfile(username, updatedTravelProfile);
    if (user == null) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found or update failed");
    }

    // Initialize Hibernate proxies manually
    if (!Hibernate.isInitialized(user.getTravelProfile())) {
        Hibernate.initialize(user.getTravelProfile());
    }

    return ResponseEntity.ok(user);
}

@GetMapping("/sorted/{field}")
    public ResponseEntity<?> getUsersSortedByField(@PathVariable String field) {
        try {
            List<User> users = userService.getUsersSortedByField(field);
            return ResponseEntity.ok(users);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving users sorted by " + field);
        }
    }

    // Get users with pagination
    @GetMapping("/paged/{page}/{size}")
    public ResponseEntity<?> getUsersWithPagination(@PathVariable int page, @PathVariable int size) {
        try {
            List<User> users = userService.getUsersWithPagination(page, size);
            return ResponseEntity.ok(users);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving users with pagination");
        }
    }

    // Get users with pagination and sorting
    @GetMapping("/pagedAndSorted/{page}/{size}/{field}")
    public ResponseEntity<?> getUsersWithPaginationAndSorting(@PathVariable int page, @PathVariable int size, @PathVariable String field) {
        try {
            List<User> users = userService.getUsersWithPaginationAndSorting(page, size, field);
            return ResponseEntity.ok(users);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving users with pagination and sorting by " + field);
        }
    }

    @GetMapping("/users/city/{city}")
    public ResponseEntity<List<User>> getUsersByCity(@PathVariable String city) {
    List<User> users = userRepository.findByCity(city);
    return ResponseEntity.ok(users);
    }
}
