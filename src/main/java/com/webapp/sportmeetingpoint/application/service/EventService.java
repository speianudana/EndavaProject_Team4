package com.webapp.sportmeetingpoint.application.service;

import com.webapp.sportmeetingpoint.domain.entities.Event;
import com.webapp.sportmeetingpoint.domain.entities.EventImage;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface EventService {

  Event saveEvent(Event event, UserSystem author, EventImage eventImage);

  Event findEventById(Integer id);
  
  List<Event> allEvents();

  List<Event> find(final List<Integer> excludedIds, final Integer limit);

  List<Event> find(final Integer limit);

  List<Event> eventsForTheSubscriberByUserSystemId(final Integer userId);

}
