package com.webapp.sportmeetingpoint.persistance;

import com.webapp.sportmeetingpoint.domain.entities.Event;
import org.springframework.data.repository.CrudRepository;

public interface EventRepository extends CrudRepository<Event, Long> {


  Event save(Event event);

  

}
