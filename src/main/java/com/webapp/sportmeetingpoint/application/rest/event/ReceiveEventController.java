package com.webapp.sportmeetingpoint.application.rest.event;


import com.webapp.sportmeetingpoint.application.service.EventService;
import com.webapp.sportmeetingpoint.domain.dto.Event.EventDTO;
import com.webapp.sportmeetingpoint.domain.dto.Event.TheNumberOfNecessaryEventsDTO;
import com.webapp.sportmeetingpoint.domain.dto.ImageDTO;
import com.webapp.sportmeetingpoint.domain.entities.Event;
import com.webapp.sportmeetingpoint.domain.entities.UserPersonalData;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import com.webapp.sportmeetingpoint.persistance.EventRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Log4j2
@RestController
@RequestMapping(value = "/api/for_all")
public class ReceiveEventController {

  private final EventRepository eventRepository;
  private final EventService eventService;

  @Autowired
  public ReceiveEventController(EventRepository eventRepository, EventService eventService) {
    this.eventRepository = eventRepository;
    this.eventService = eventService;
  }

  @RequestMapping(value = "/event/get_events", method = RequestMethod.POST)
  public ResponseEntity getAllEventsWithoutImage(@RequestBody final TheNumberOfNecessaryEventsDTO reqData)
    throws MessagingException {

    List<Integer> excludedIds = reqData.getGetUIEventsId();
    final Integer limit = reqData.getTheNumberOfNecessaryEvents();

    List<Event> eventsFromDb = new ArrayList<>();

    if(excludedIds==null || excludedIds.size()==0)
      eventsFromDb = eventRepository.findAllUseLimit(limit);
    else
      eventsFromDb = eventRepository.findAllAndExcludeValueByListUseLimit(excludedIds, limit);

    List<EventDTO> result = eventsFromDb.stream().map(a -> {
        final EventDTO e = new EventDTO();

        UserSystem author = a.getUserAuthorActivity().getUserSystem();
        final String authorEmail = author.getEmail();
        UserPersonalData authorPersonalData = a.getUserAuthorActivity().getUserSystem().getUserPersonalData();
        final String authorFullName = authorPersonalData.getFirstName()+" " + authorPersonalData.getLastName();

        e.setId(a.getId());
        e.setTitle(a.getTitle());
        e.setPreviewMessage(a.getPreviewMessage());
        e.setDescription(a.getDescription());
        e.setImage(null);
        e.setAddress(a.getAddress());
        e.setAuthorEmail(authorEmail);
        e.setAuthorFullName(authorFullName);

        return e;
      }

    ).collect(Collectors.toList());


    return ResponseEntity.ok().body(result);
  }


  @RequestMapping(value = "/event/image_by_id", method = RequestMethod.GET)
  public ResponseEntity<?> getEventImageById(@RequestParam("id") final Integer eventId){

    Event event = eventService.findEventById(eventId);


    if(event == null || event.getImage()==null){
      return ResponseEntity.ok(HttpStatus.NOT_FOUND);
    }

    return new ResponseEntity<>(new ImageDTO(event.getId(), event.getImage()), HttpStatus.OK);
  }

}
