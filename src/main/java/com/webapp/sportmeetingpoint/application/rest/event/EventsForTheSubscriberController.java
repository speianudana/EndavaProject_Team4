package com.webapp.sportmeetingpoint.application.rest.event;

import com.webapp.sportmeetingpoint.application.security.jwt.JwtUser;
import com.webapp.sportmeetingpoint.application.service.EventService;
import com.webapp.sportmeetingpoint.domain.dto.Event.EventDTO;
import com.webapp.sportmeetingpoint.domain.entities.Event;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping(value = "/api/for_authenticated_user")
public class EventsForTheSubscriberController {

  private final EventService eventService;

  @Autowired
  public EventsForTheSubscriberController(EventService eventService) {
    this.eventService = eventService;
  }

  @RequestMapping(value = "/get_events_for_subscriber", method = RequestMethod.GET)
  public ResponseEntity getEventsForSubscriber() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    JwtUser jwtUser = (JwtUser) authentication.getPrincipal();

    final Integer getUserId = jwtUser.getId();

    List<Event> eventsForSubscriber = eventService.eventsForTheSubscriberByUserSystemId(getUserId);

    List<EventDTO> eventsForSubscriberResult = eventsForSubscriber.stream().map(a -> {
      EventDTO item = new EventDTO();
      item.setId(a.getId());
      item.setTitle(a.getTitle());
      item.setPreviewMessage(a.getPreviewMessage());


      return item;
    }).collect(Collectors.toList());

    return ResponseEntity.ok().body(eventsForSubscriberResult);
  }


}
