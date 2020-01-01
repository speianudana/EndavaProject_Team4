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
  
    if(data != null && !data.isEmpty()){
       eventDTO = new ObjectMapper().readValue(data, CreateEventDTO.class);
    }
    
    if(eventDTO!=null && !file.isEmpty() ){
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
    SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");

    try{
      
      e.setTitle(eventDTO.getTitle());
      e.setDate(simpleDateFormat.parse(eventDTO.getEventDate()));
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


}
