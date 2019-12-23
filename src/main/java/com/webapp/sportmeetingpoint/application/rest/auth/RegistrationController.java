package com.webapp.sportmeetingpoint.application.rest.auth;


import com.webapp.sportmeetingpoint.domain.dto.UserRegistrationDTO;
import com.webapp.sportmeetingpoint.application.security.jwt.JwtTokenProvider;
import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.entities.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/auth")
@CrossOrigin
public class RegistrationController {

  private final JwtTokenProvider jwtTokenProvider;
  private final UserSystemService userSystemService;
  private final Validator validator;

  @Autowired
  public RegistrationController(JwtTokenProvider jwtTokenProvider, UserSystemService userService) {
    this.jwtTokenProvider = jwtTokenProvider;
    this.userSystemService = userService;
    this.validator = Validation.buildDefaultValidatorFactory().usingContext().getValidator();
  }


  @PostMapping("/registration")
  public ResponseEntity registration(@RequestBody UserRegistrationDTO data) {


    Set<ConstraintViolation<UserRegistrationDTO>> validates = validator.validate(data);
    List<String> errorMessages = validates.stream().map(ConstraintViolation::getMessageTemplate)
      .collect(Collectors.toList());

    if (userSystemService.findByEmail(data.getEmail()) != null) {
      errorMessages.add("A user with the same email already exists");
    }

    if (errorMessages.size() > 0) {
      HashMap<Object, Object> result = new HashMap<>();
      result.put("validationMessage", errorMessages);
      return new ResponseEntity<>(result, HttpStatus.OK);
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
