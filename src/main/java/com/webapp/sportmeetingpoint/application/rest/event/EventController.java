package com.webapp.sportmeetingpoint.application.rest.event;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.webapp.sportmeetingpoint.application.security.jwt.JwtUser;
import com.webapp.sportmeetingpoint.application.service.EventService;
import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.dto.CreateEventDTO;
import com.webapp.sportmeetingpoint.domain.dto.Event.EventDTO;
import com.webapp.sportmeetingpoint.domain.dto.EventInfoResponseDTO;
import com.webapp.sportmeetingpoint.domain.dto.ImageDTO;
import com.webapp.sportmeetingpoint.domain.entities.Event;
import com.webapp.sportmeetingpoint.domain.entities.UserPersonalData;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.MessagingException;
import javax.validation.*;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

@Log4j2
@RestController
@RequestMapping(value = "/api")
public class EventController {

  private final UserSystemService userSystemService;
  private final EventService eventService;
  private final Validator validator;
  
  @Autowired
  public EventController(UserSystemService userSystemService, EventService eventService,
    Validator validator) {
    this.userSystemService = userSystemService;
    this.eventService = eventService;
    this.validator = Validation.buildDefaultValidatorFactory().usingContext().getValidator();
  }

  
  
  @RequestMapping(value = "/for_authenticated_user/event/add", method = RequestMethod.POST,
          consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity<?> addNewEvent(
          @RequestParam("file")  MultipartFile file,
          @RequestParam("data")  String data
  ) throws IOException {
  
//    Validator validator;
//    ValidatorFactory validatorFactory = Validation.buildDefaultValidatorFactory();
//    validator = validatorFactory.usingContext().getValidator();
    
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    JwtUser jwtUser = (JwtUser)authentication.getPrincipal();
    UserSystem userSystem = userSystemService.findById(jwtUser.getId());
  
    CreateEventDTO eventDTO = null;
  
    if(!data.isEmpty() && data != null){
       eventDTO = new ObjectMapper().readValue(data, CreateEventDTO.class);
    }
    
    if(!file.isEmpty() && eventDTO!=null){
      try {
    
        Byte[] byteImage = new Byte[file.getBytes().length];
    
        int i = 0;
    
        for (byte b : file.getBytes()){
          byteImage[i++] = b;
        }
  
        eventDTO.setImage(byteImage);
        
      } catch (IOException e) {
        log.error("Error ", e);
        e.printStackTrace();
      }
    }
    
    Event e = new Event();
    
    try{
      
      e.setTitle(eventDTO.getTitle());
      e.setDate(new Date());
      e.setDescription(eventDTO.getDescription());
      e.setPreviewMessage(eventDTO.getPreviewMessage());
      e.setAddress(eventDTO.getAddress());
      e.setImage(eventDTO.getImage());
      
    }catch(Exception ex){
      log.debug(ex.getMessage());
      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
  
    Set<ConstraintViolation<CreateEventDTO>> validates = validator.validate(eventDTO);
  
    if(validates.size()>0){
      List<String> errorMessages = validates.stream().map(ConstraintViolation::getMessageTemplate)
        .collect(Collectors.toList());
      
      HashMap result = new HashMap();
      result.put("validationMessage", errorMessages);
      
      return new ResponseEntity<>(result, HttpStatus.OK);
    }
    
    Event result = eventService.saveEvent(e, userSystem);
    
    return new ResponseEntity<>(result.getId(), HttpStatus.OK);
  }

  @RequestMapping(value = "/for_all/event/all_events", method = RequestMethod.GET)
  public ResponseEntity<List<EventDTO>> getAllEventsWithoutImage() throws MessagingException {

    List<Event> allEvents=eventService.allEvents();
  
//    MailUtil.getMailUtilObject().sendMailAsync("ipostu20000127@gmail.com",
//      "<h2>Hello world</h2>");

    
    List<EventDTO> result = allEvents.stream().map( a -> {
        final EventDTO e = new EventDTO();
        
        e.setId(a.getId());
        e.setTitle(a.getTitle());
        e.setPreviewMessage(a.getPreviewMessage());
        e.setDescription(a.getDescription());
        e.setImage(null);
        e.setAddress(a.getAddress());
        
        return e;
      }

    ).collect(Collectors.toList());
  
  
    return new ResponseEntity<>(result, HttpStatus.OK);
  }

  
  @RequestMapping(value = "/for_all/event/image_by_id", method = RequestMethod.POST)
  public ResponseEntity<?> getEventImageById(@RequestBody final Integer eventId){
    
    Event event = eventService.findEventById(eventId);


    if(event == null || event.getImage()==null){
      return ResponseEntity.ok(HttpStatus.NOT_FOUND);
    }
    
    ImageDTO result = new ImageDTO();
    
    result.setId(eventId);
    result.setImage(event.getImage());
    
    return new ResponseEntity<>(result, HttpStatus.OK);
  }


//  @RequestMapping(value="/for_all/event/event_by_id", method=RequestMethod.GET)
//  public ResponseEntity<EventInfoResponseDTO> getEventInfo(@RequestParam(name="id") final Integer paramId){
//
//    EventInfoResponseDTO result;
//
//    try{
//
//      final Event dbEvent = eventService.findEventById(paramId);
//      final UserSystem getAuthor = dbEvent.getUserAuthorActivity().getUserSystem();
//      final UserPersonalData getAuthorPersonalData = getAuthor.getUserPersonalData();
//      final String authorFullName = getAuthorPersonalData.getFirstName()+" "+getAuthorPersonalData.getLastName();
//
//
//      result = EventInfoResponseDTO.eventInfoBuilder()
//        .id(paramId)
//        .title(dbEvent.getTitle())
//        .authorName(authorFullName)
//        .eventDate(new SimpleDateFormat("MM.dd.yyyy HH:mm:ss").format(dbEvent.getDate()))
//        .address(dbEvent.getAddress())
//        .previewMessage(dbEvent.getPreviewMessage())
//        .description(dbEvent.getDescription())
//        .build();
//
//
//
//    }catch(Exception e){
//      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//    }
//
//
//    return new ResponseEntity<>(result, HttpStatus.OK);
//  }


}
