package com.webapp.sportmeetingpoint.application.service;


import com.webapp.sportmeetingpoint.domain.entities.Event;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import com.webapp.sportmeetingpoint.persistance.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;
import java.util.List;

@Service
public class EventServiceImpl implements EventService {

  private final EventRepository eventRepository;

  @Autowired
  public EventServiceImpl( EventRepository eventRepository) {
    this.eventRepository = eventRepository;
  }

  @Override
  public Event saveEvent(Event event, @NotNull UserSystem author) {
    event.setUserActivity(author.getUserActivity());
    return eventRepository.save(event);
  }

  @Override
  public List<Event> allEvents() {
    return eventRepository.findAll();
  }


}
