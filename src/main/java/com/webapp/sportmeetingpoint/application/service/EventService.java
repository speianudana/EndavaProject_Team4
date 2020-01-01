package com.webapp.sportmeetingpoint.application.service;

import com.webapp.sportmeetingpoint.domain.entities.Event;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;

import java.util.List;

public interface EventService {

  Event saveEvent(Event event, UserSystem author);

  Event findEventById(Integer id);
  
  List<Event> allEvents();

  List<Event> find(final List<Integer> excludedIds, final Integer limit);

  List<Event> find(final Integer limit);

}
