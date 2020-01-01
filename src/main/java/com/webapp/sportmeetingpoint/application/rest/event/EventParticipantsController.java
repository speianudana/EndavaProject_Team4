package com.webapp.sportmeetingpoint.application.rest.event;


import com.webapp.sportmeetingpoint.application.service.EventParticipantActivityService;
import com.webapp.sportmeetingpoint.application.service.EventService;
import com.webapp.sportmeetingpoint.domain.dto.Event.UserDataDTO;
import com.webapp.sportmeetingpoint.domain.entities.Event;
import com.webapp.sportmeetingpoint.domain.entities.EventParticipantActivity;
import com.webapp.sportmeetingpoint.domain.entities.UserPersonalData;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Log4j2
@RestController
@RequestMapping(value = "/api/for_all")
public class EventParticipantsController {

  private final EventService eventService;
  private final EventParticipantActivityService eventParticipantActivityService;

  @Autowired
  public EventParticipantsController(EventService eventService,
                                     EventParticipantActivityService eventParticipantActivityService) {
    this.eventService = eventService;
    this.eventParticipantActivityService = eventParticipantActivityService;
  }

  @RequestMapping(value="/event/get_event_participants", method = RequestMethod.GET)
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
      log.debug(e);
    }



    return ResponseEntity.badRequest().body(null);
  }


}

