package com.webapp.sportmeetingpoint.application.rest.auth;


import com.webapp.sportmeetingpoint.application.dto.UserSystemDTO;
import com.webapp.sportmeetingpoint.application.security.jwt.JwtTokenProvider;
import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.entities.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping(value = "/api/auth")
@CrossOrigin
public class RegistrationController {

  private final JwtTokenProvider jwtTokenProvider;
  private final UserSystemService userSystemService;

  @Autowired
  public RegistrationController( JwtTokenProvider jwtTokenProvider, UserSystemService userService) {
    this.jwtTokenProvider = jwtTokenProvider;
    this.userSystemService = userService;
  }

  private Map<Object, Object> registrationDataValidation(UserSystemDTO data){
    List<String>  errorList = new ArrayList<>();
    if(userSystemService.findByEmail(data.getEmail())!=null){
      errorList.add("A user with the same name already exists");
    }

    if(!data.getPasswordRepeat().equals(data.getPassword())){
      errorList.add("Password and password repeat is not equal");
    }

    if(data.getPassword().length()<5){
      errorList.add("Use at least 5 characters");
    }

    Map<Object, Object> errorListResult = new HashMap<>();
    if(!errorList.isEmpty()) errorListResult.put("error", errorList);

    return errorListResult;
  }

  @PostMapping("/registration")
  public ResponseEntity registration(@RequestBody UserSystemDTO data){


    Map<Object, Object> errors = registrationDataValidation(data);
    boolean haveErrors = !errors.isEmpty();
    if(haveErrors){
      return ResponseEntity.ok(errors);
    }

    Date now = new Date();
    String password = data.getPassword();
    UserSystem userSystem = new UserSystem();
    UserPersonalData personalData = new UserPersonalData();

    personalData.setFirstName(data.getFirstName());
    personalData.setLastName(data.getLastName());
    personalData.setTelephoneNumber(null);
    personalData.setBirthDate(null);

    userSystem.setPassword(jwtTokenProvider.passwordEncoder().encode(password));
    userSystem.setEmail(data.getEmail());
    userSystem.setUpdatedDate(now);
    userSystem.setIsActivated(true);

    UserSystem result = userSystemService.register(userSystem, personalData, null, AppUserRoles.USER.toString());

    List<UserRole> userRoles = new ArrayList<>(Collections.singletonList(result.getUserRole()));

    String token = jwtTokenProvider.createToken(result.getEmail(), userRoles);
    Map<Object, Object> response = new HashMap<>();
    response.put("token", token);

    return ResponseEntity.ok(response);
  }


}
