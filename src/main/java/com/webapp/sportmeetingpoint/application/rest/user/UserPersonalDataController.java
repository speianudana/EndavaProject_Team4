package com.webapp.sportmeetingpoint.application.rest.user;

import com.webapp.sportmeetingpoint.application.security.jwt.JwtTokenProvider;
import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.dto.UserPersonalDataDTO;
import com.webapp.sportmeetingpoint.domain.entities.UserPersonalData;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;


@RestController
@RequestMapping(value = "/api/user_personal_data")
public class UserPersonalDataController {

  private final JwtTokenProvider jwtTokenProvider;
  private final UserSystemService userSystemService;

  @Autowired
  public UserPersonalDataController( JwtTokenProvider jwtTokenProvider, UserSystemService userService) {
    this.jwtTokenProvider = jwtTokenProvider;
    this.userSystemService = userService;
  }

  @PostMapping("/get_data")
  @CrossOrigin
  public ResponseEntity tokenToPersonalData( ){
//    String username = jwtTokenProvider.getUsername(token);
//    UserSystem userSystem = userSystemService.findByEmail(username);
//    UserPersonalData personalData = userSystem.getUserPersonalData();
//
//    UserPersonalDataDTO personalDataDTO = new UserPersonalDataDTO();
//    personalDataDTO.setDOB(personalData.getBirthDate()!=null?personalData.getBirthDate().toString():null);
//    personalDataDTO.setFirstName(personalData.getFirstName());
//    personalDataDTO.setLastName(personalData.getLastName());
//    personalDataDTO.setTelNumber(personalData.getTelephoneNumber());
//
//    HashMap response = new HashMap();
//    response.put("personalData", personalDataDTO);
    HashMap response = new HashMap();
    response.put("q1","msg1");
    response.put("q2","msgmsafhuadgf2");

    return ResponseEntity.ok("response");
  }

}
