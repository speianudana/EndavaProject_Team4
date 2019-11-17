package com.webapp.sportmeetingpoint.application.rest.auth;


import com.webapp.sportmeetingpoint.application.dto.UserSystemDTO;
import com.webapp.sportmeetingpoint.application.security.jwt.JwtTokenProvider;
import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.entities.AppUserRoles;
import com.webapp.sportmeetingpoint.domain.entities.UserPersonalData;
import com.webapp.sportmeetingpoint.domain.entities.UserRole;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping(value = "/api/auth")
@CrossOrigin
public class RegistrationController {

  private final AuthenticationManager authenticationManager;
  private final JwtTokenProvider jwtTokenProvider;
  private final UserSystemService userSystemService;

  @Autowired
  public RegistrationController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, UserSystemService userService) {
    this.authenticationManager = authenticationManager;
    this.jwtTokenProvider = jwtTokenProvider;
    this.userSystemService = userService;
  }

  @PostMapping("/registration")
  public ResponseEntity registration(@RequestBody UserSystemDTO data){

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
    userSystem.setUserPersonalData(personalData);

    UserSystem result = userSystemService.register(userSystem, AppUserRoles.USER.toString());

    List<UserRole> userRoles = new ArrayList<>();
    userRoles.add(result.getUserRole());

    String token = jwtTokenProvider.createToken(result.getEmail(), userRoles);

    Map<Object, Object> response = new HashMap<>();
    response.put("username", result.getEmail());
    response.put("token", token);

    return ResponseEntity.ok(response);
  }


}
