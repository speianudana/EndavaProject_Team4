package com.webapp.sportmeetingpoint.persistance;

import com.webapp.sportmeetingpoint.domain.entities.Event;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.validation.constraints.Max;
import java.util.List;
import java.util.Optional;

public interface EventRepository extends CrudRepository<Event, Long> {


    Event save(Event event);
    @Modifying
    @Query(value = "SELECT * FROM Event u",nativeQuery = true)
    List<Event> findAll();

  

}
