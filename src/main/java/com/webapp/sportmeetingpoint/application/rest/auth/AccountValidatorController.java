package com.webapp.sportmeetingpoint.application.rest.auth;


import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import com.webapp.sportmeetingpoint.persistance.UserSystemRepository;
import com.webapp.sportmeetingpoint.util.RandomString;
import com.webapp.sportmeetingpoint.util.UtilMethods;
import com.webapp.sportmeetingpoint.util.mail.MailUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.security.SecureRandom;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/auth")
public class AccountValidatorController {

  private final UserSystemService userSystemService;
  private final UserSystemRepository userSystemRepository;



  @Autowired
  public AccountValidatorController(UserSystemService userSystemService, UserSystemRepository userSystemRepository){
    this.userSystemService = userSystemService;
    this.userSystemRepository = userSystemRepository;
  }

  @RequestMapping(value = "/validate", method = RequestMethod.GET)
  public ResponseEntity<?> getAllEventsWithoutImage(@RequestParam(name = "data") final String data)
    throws MessagingException {
    Boolean result = false;

    String[] hashAndUserId = data.split("_");

    try{
      UserSystem user = userSystemService.findById(UtilMethods.alphabetCharactersToNumber(hashAndUserId[1]));
      if(user.getIsActivated()) throw new Exception();

//      user.setIsActivated(true);

      userSystemRepository.updateSetSystemUserActivatedValue(true, user.getId());

    }
    catch(Exception e){
      return new ResponseEntity<>( HttpStatus.BAD_REQUEST);
    }



    return new ResponseEntity<>( HttpStatus.OK);
  }


}
