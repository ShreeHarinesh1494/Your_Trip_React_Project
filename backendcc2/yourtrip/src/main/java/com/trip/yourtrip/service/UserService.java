package com.trip.yourtrip.service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trip.yourtrip.model.TravelProfile;
import com.trip.yourtrip.model.User;
import com.trip.yourtrip.repository.UserRepository;

@Service
public class UserService 
{
    @Autowired
    private UserRepository userRepository;

    public boolean registerUser(User user) {
        if (findByUsername(user.getUsername()) != null) {
            // Username already exists
            return false; // Indicates that registration failed due to existing username
        }
        userRepository.save(user);
        return true; // Indicates successful registration
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

    @Transactional(readOnly = true)
    public List<Map<String, Object>> findAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(this::mapUserToJson)
                .collect(Collectors.toList());
    }

    private Map<String, Object> mapUserToJson(User user) {
        Map<String, Object> userMap = new HashMap<>();
        userMap.put("id", user.getId());
        userMap.put("username", user.getUsername());
        userMap.put("password", user.getPassword());
        userMap.put("phoneNumber", user.getPhoneNumber());
        userMap.put("city", user.getCity());
        userMap.put("gender", user.getGender());

        if (user.getTravelProfile() != null) {
            Map<String, Object> travelProfileMap = new HashMap<>();
            TravelProfile travelProfile = user.getTravelProfile();
            travelProfileMap.put("id", travelProfile.getId());
            travelProfileMap.put("user_id", user.getId()); // Assuming you want to include the user_id
            travelProfileMap.put("favorite_destination", travelProfile.getFavoriteDestination());
            travelProfileMap.put("travel_style", travelProfile.getTravelStyle());
            travelProfileMap.put("bucket_list", Arrays.asList(travelProfile.getBucketList().split(", ")));
            userMap.put("travelProfile", travelProfileMap);
        }

        return userMap;
    }

    public User registerUserWithTravelProfile(User user, TravelProfile travelProfile) {
        if (findByUsername(user.getUsername()) != null) {
            return null; // Username already exists
        }
        user.setTravelProfile(travelProfile); // Associate the travel profile with the user
        return userRepository.save(user); // Save the user along with the travel profile
    }

    public User updateUserTravelProfile(String username, TravelProfile updatedTravelProfile) {
        Optional<User> userOptional = userRepository.findByUsername(username);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            TravelProfile currentProfile = user.getTravelProfile();
            if (currentProfile == null) {
                currentProfile = updatedTravelProfile;
            } else {
                // Update fields of the current travel profile
                currentProfile.setFavoriteDestination(updatedTravelProfile.getFavoriteDestination());
                currentProfile.setTravelStyle(updatedTravelProfile.getTravelStyle());
                currentProfile.setBucketList(updatedTravelProfile.getBucketList());
            }
            user.setTravelProfile(currentProfile);
            User updatedUser = userRepository.save(user);
            return updatedUser; // Save the updated user

        }
        return null; // User not found
    }

    public List<User> getUsersSortedByField(String field) {
        Sort sort = Sort.by(field);
        return userRepository.findAll(sort);
    }

    public List<User> getUsersWithPagination(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return userRepository.findAll(pageable).getContent();
    }

    public List<User> getUsersWithPaginationAndSorting(int page, int size, String field) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(field));
        return userRepository.findAll(pageable).getContent();
    }
    

    
}
