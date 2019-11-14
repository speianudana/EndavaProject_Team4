package com.webapp.sportmeetingpoint.application.repository;

import com.webapp.sportmeetingpoint.domain.entities.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event,Integer>{
}
