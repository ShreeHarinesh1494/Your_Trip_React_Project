package com.trip.yourtrip.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.trip.yourtrip.model.TravelProfile;

public interface TravelProfileRepository extends JpaRepository<TravelProfile, Long> {
    
}
