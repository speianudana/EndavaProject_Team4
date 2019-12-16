package com.webapp.sportmeetingpoint.application.rest.event;


import com.webapp.sportmeetingpoint.application.security.jwt.JwtUser;
import com.webapp.sportmeetingpoint.application.service.EventService;
import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.dto.EventDTO;
import com.webapp.sportmeetingpoint.domain.entities.Event;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;


@RestController
@CrossOrigin
@RequestMapping(value = "/api/event")
public class EventController {

  private final UserSystemService userSystemService;
  private final EventService eventService;

  @Autowired
  public EventController(UserSystemService userSystemService, EventService eventService) {
    this.userSystemService = userSystemService;
    this.eventService = eventService;
  }

  @PostMapping("/add")
  @CrossOrigin
  public ResponseEntity<?> addNewEvent(@RequestBody EventDTO eventDTO) {

    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    JwtUser jwtUser = (JwtUser)authentication.getPrincipal();
    UserSystem userSystem = userSystemService.findById(jwtUser.getId());

    Event e = new Event();
    e.setTitle(eventDTO.getTitle());
    e.setDate(new Date());
    e.setDescription(eventDTO.getDescription());
    e.setPreviewMessage(eventDTO.getPreviewMessage());
    e.setIsExpired(false);
    e.setAddress(eventDTO.getAddress());

    Event result = eventService.saveEvent(e, userSystem);

    return ResponseEntity.ok(HttpStatus.CREATED);
  }

  @GetMapping("/all_events")
  @CrossOrigin
  public ResponseEntity<HashMap<Integer, Event>> getAllEvents() {

    List<Event> allEvents=eventService.allEvents();
    HashMap<Integer, Event> result = new HashMap<>();



    allEvents.forEach(a -> {
      result.put(a.getId(), a);
    });

  char c ='a';

    return ResponseEntity.ok(result);
  }



}
