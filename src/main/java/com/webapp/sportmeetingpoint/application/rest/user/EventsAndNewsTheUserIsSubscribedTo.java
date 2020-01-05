package com.webapp.sportmeetingpoint.application.rest.user;

import com.webapp.sportmeetingpoint.application.security.jwt.JwtUser;
import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.dto.Event.EventDTO;
import com.webapp.sportmeetingpoint.domain.dto.User.EventsAndNewsTheUserIsSubscribedToDTO;
import com.webapp.sportmeetingpoint.domain.entities.Event;
import com.webapp.sportmeetingpoint.domain.entities.EventParticipantActivity;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import com.webapp.sportmeetingpoint.persistance.EventRepository;
import com.webapp.sportmeetingpoint.persistance.UserSystemRepository;
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
public class EventsAndNewsTheUserIsSubscribedTo {

  private final UserSystemService userSystemService;
  private final UserSystemRepository userSystemRepository;
  private final EventRepository eventRepository;

  @Autowired
  public EventsAndNewsTheUserIsSubscribedTo(UserSystemService userSystemService,
                                            UserSystemRepository userSystemRepository,
                                            EventRepository eventRepository) {
    this.userSystemService = userSystemService;
    this.userSystemRepository = userSystemRepository;
    this.eventRepository = eventRepository;
  }

  @RequestMapping(value = "/get_events_and_news", method= RequestMethod.GET)
  public ResponseEntity getEventsAndNews(){

    final EventsAndNewsTheUserIsSubscribedToDTO result = new EventsAndNewsTheUserIsSubscribedToDTO();
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    JwtUser jwtUser = (JwtUser) authentication.getPrincipal();
    UserSystem userSystem = userSystemService.findById(jwtUser.getId());

    List<Event> events = eventRepository.findAllForSubscriberUser(userSystem.getId());

    List<EventDTO> eventsDTO = events.stream().map(a->{
      EventDTO item = new EventDTO();
      item.setTitle(a.getTitle());
      item.setPreviewMessage(a.getPreviewMessage());


      return item;
    }).collect(Collectors.toList());

    result.setEvents(eventsDTO);

    return ResponseEntity.ok().body(result);
  }


}
