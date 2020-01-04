package com.webapp.sportmeetingpoint.application.rest.event;


import com.webapp.sportmeetingpoint.application.security.jwt.JwtUser;
import com.webapp.sportmeetingpoint.application.service.EventParticipantActivityService;
import com.webapp.sportmeetingpoint.application.service.EventService;
import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.dto.Event.UserDataDTO;
import com.webapp.sportmeetingpoint.domain.entities.Event;
import com.webapp.sportmeetingpoint.domain.entities.EventParticipantActivity;
import com.webapp.sportmeetingpoint.domain.entities.UserPersonalData;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import com.webapp.sportmeetingpoint.persistance.UserSystemRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Log4j2
@RestController
@RequestMapping(value = "/api")
public class EventParticipantsController {

  private final EventService eventService;
  private final EventParticipantActivityService eventParticipantActivityService;
  private final UserSystemService userSystemService;

  @Autowired
  public EventParticipantsController(EventService eventService,
                                     EventParticipantActivityService eventParticipantActivityService,
                                     UserSystemService userSystemService) {

    this.eventService = eventService;
    this.eventParticipantActivityService = eventParticipantActivityService;
    this.userSystemService = userSystemService;
  }


  @RequestMapping(value="/for_all/event/get_event_participants", method = RequestMethod.GET)
  public ResponseEntity getEventParticipantsById(@RequestParam(value = "id") final Integer eventId){

    try{
      List<UserDataDTO> result = new ArrayList<>();

      final Event getEvent = eventService.findEventById(eventId);
      List<EventParticipantActivity> allActivities = getEvent.getParticipantActivity();

      allActivities.forEach(item->{
        UserSystem user = item.getUserSystem();
        UserPersonalData userPersonalData = user.getUserPersonalData();

        result.add(new UserDataDTO(user.getId(), user.getEmail(),
          userPersonalData.getFirstName(), userPersonalData.getLastName()));

      });

      return ResponseEntity.ok().body(result);
    }
    catch(Exception e){
      log.debug("exception on getEventParticipantsById ",e);

      return ResponseEntity.badRequest().body(null);

    }
  }

  @RequestMapping(value="/for_authenticated_user/subscribe", method = RequestMethod.GET)
  public ResponseEntity subscribeUserToEvent(@RequestParam(value="event_id") final Integer eventId){

    try{
      Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
      JwtUser jwtUser = (JwtUser)authentication.getPrincipal();
      final Integer userId = jwtUser.getId();

      UserSystem u = userSystemService.findById(userId);
      Event e = eventService.findEventById(eventId);

      eventParticipantActivityService.subscribeUserToTheCurrentEvent(u, e);

      return ResponseEntity.ok().body(null);

    }catch(Exception e){
      log.debug("exception on subscribeUserToEvent ",e);
      return ResponseEntity.badRequest().body(null);
    }

  }

  @RequestMapping(value="/for_authenticated_user/unsubscribe", method = RequestMethod.GET)
  public ResponseEntity unsubscribeUserToEvent(@RequestParam(value="event_id") final Integer eventId){

    try{
      Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
      JwtUser jwtUser = (JwtUser)authentication.getPrincipal();
      final Integer userId = jwtUser.getId();

      UserSystem u = userSystemService.findById(userId);
      Event e = eventService.findEventById(eventId);

      eventParticipantActivityService.unsubscribeUserToTheCurrentEvent(u, e);

      return ResponseEntity.ok().body(null);

    }catch(Exception e){
      log.debug("exception on subscribeUserToEvent ",e);
      return ResponseEntity.badRequest().body(null);
    }

  }

}

