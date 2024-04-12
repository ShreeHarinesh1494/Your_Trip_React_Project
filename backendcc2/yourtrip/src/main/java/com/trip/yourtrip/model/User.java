package com.trip.yourtrip.model;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
@Entity
@Table(name = "users")
public class User 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    private String phoneNumber;
    private String city;
    private String gender;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private TravelProfile travelProfile;

    // Constructors, Getters, and Setters
    public User() {}

    public User(String username, String password, String phoneNumber, String city, String gender) {
        this.username = username;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.city = city;
        this.gender = gender;
        
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public TravelProfile getTravelProfile() {
        return travelProfile;
    }

    public void setTravelProfile(TravelProfile travelProfile) {
        this.travelProfile = travelProfile;
        if (travelProfile != null) {
            travelProfile.setUser(this);
        }
    }
    
}
