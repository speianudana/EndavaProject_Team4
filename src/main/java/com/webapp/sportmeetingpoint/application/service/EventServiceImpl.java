package com.webapp.sportmeetingpoint.application.service;


import com.webapp.sportmeetingpoint.domain.entities.Event;
import com.webapp.sportmeetingpoint.domain.entities.EventImage;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import com.webapp.sportmeetingpoint.persistance.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImpl implements EventService {

  private final EventRepository eventRepository;
  private final EventImageRepository eventImageRepository;

  @Autowired
  public EventServiceImpl( EventRepository eventRepository,
                           EventImageRepository eventImageRepository) {
    this.eventRepository = eventRepository;
    this.eventImageRepository = eventImageRepository;
  }

  @Override
  public Event saveEvent(final Event event, final UserSystem author, final EventImage eventImage) {
    if(eventImage.getImage()!=null){
      EventImage eventImage1 = eventImageRepository.save(eventImage);
      event.setEventImageId(eventImage1.getId());
    }

    event.setUserAuthorActivity(author.getUserAuthorActivity());
    return eventRepository.save(event);
  }
  
  @Override
  public Event findEventById(Integer id) {
    return eventRepository.findById(id).orElse(null);
  }
  
  @Override
  public List<Event> allEvents() {
    return eventRepository.findAll();
  }

  @Override
  public List<Event> find(List<Integer> excludedIds, Integer limit) {
    return eventRepository.findAllAndExcludeValueByListUseLimit(excludedIds, limit);
  }

  @Override
  public List<Event> find(Integer limit) {
    return eventRepository.findAllUseLimit(limit);
  }


}
