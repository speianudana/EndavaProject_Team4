package com.webapp.sportmeetingpoint.application.rest.user;

import com.webapp.sportmeetingpoint.application.security.jwt.JwtTokenProvider;
import com.webapp.sportmeetingpoint.application.security.jwt.JwtUser;
import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.dto.UserPersonalDataDTO;
import com.webapp.sportmeetingpoint.domain.entities.UserPersonalData;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
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
  public ResponseEntity tokenToPersonalData( ){

    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();




    JwtUser jwtUser = (JwtUser)authentication.getPrincipal();
    UserSystem userSystem = userSystemService.findById(jwtUser.getId());
    UserPersonalData personalData = userSystem.getUserPersonalData();

    UserPersonalDataDTO personalDataDTO = new UserPersonalDataDTO();
    personalDataDTO.setDOB(personalData.getBirthDate()!=null?personalData.getBirthDate().toString():null);
    personalDataDTO.setFirstName(personalData.getFirstName());
    personalDataDTO.setLastName(personalData.getLastName());
    personalDataDTO.setTelNumber(personalData.getTelephoneNumber());
    personalDataDTO.setEmail(userSystem.getEmail());
    personalDataDTO.setRole(userSystem.getUserRole().getName());

    HashMap response = new HashMap();
    response.put("personalData", personalDataDTO);

    return ResponseEntity.ok(response);
  }



}
