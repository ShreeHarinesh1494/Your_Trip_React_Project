package com.trip.yourtrip.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "travel_profiles")
public class TravelProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String favoriteDestination;
    private String travelStyle; // e.g., Budget, Luxury, Adventure
    private String bucketList; // A list of places the user wants to visit, could be a JSON string or comma-separated values

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "travelProfile")
    private User user;

    // Constructors, getters, and setters
    public TravelProfile() {
    }

    public TravelProfile(String favoriteDestination, String travelStyle, String bucketList) {
        this.favoriteDestination = favoriteDestination;
        this.travelStyle = travelStyle;
        this.bucketList = bucketList;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFavoriteDestination() {
        return favoriteDestination;
    }

    public void setFavoriteDestination(String favoriteDestination) {
        this.favoriteDestination = favoriteDestination;
    }

    public String getTravelStyle() {
        return travelStyle;
    }

    public void setTravelStyle(String travelStyle) {
        this.travelStyle = travelStyle;
    }

    public String getBucketList() {
        return bucketList;
    }

    public void setBucketList(String bucketList) {
        this.bucketList = bucketList;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
