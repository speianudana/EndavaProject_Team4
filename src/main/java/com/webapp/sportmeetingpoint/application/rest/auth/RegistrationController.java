package com.webapp.sportmeetingpoint.application.rest.auth;


import com.webapp.sportmeetingpoint.domain.dto.UserRegistrationDTO;
import com.webapp.sportmeetingpoint.application.security.jwt.JwtTokenProvider;
import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.entities.*;
import com.webapp.sportmeetingpoint.util.UtilMethods;
import com.webapp.sportmeetingpoint.util.mail.MailUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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
public class RegistrationController {

  private final JwtTokenProvider jwtTokenProvider;
  private final UserSystemService userSystemService;
  private final Validator validator;

  @Value("${frontend.url.dev}")
  private String frontendUrlDev;

  @Value("${frontend.url.prod}")
  private String frontendUrlProd;


  @Autowired
  public RegistrationController(JwtTokenProvider jwtTokenProvider, UserSystemService userService) {
    this.jwtTokenProvider = jwtTokenProvider;
    this.userSystemService = userService;
    this.validator = Validation.buildDefaultValidatorFactory().usingContext().getValidator();
  }


  @PostMapping("/registration")
  public ResponseEntity<?> registration(@RequestBody UserRegistrationDTO data) {


    Set<ConstraintViolation<UserRegistrationDTO>> validates = validator.validate(data);
    List<String> errorMessages = validates.stream().map(ConstraintViolation::getMessageTemplate)
      .collect(Collectors.toList());

    UserSystem dbUser = userSystemService.findByEmail(data.getEmail());

    if (dbUser != null ) {
      if(dbUser.getIsActivated()){
        errorMessages.add("A user with the same email already exists");
      }else{
        userSystemService.deleteById(dbUser.getId());
        char a = 'a';
      }
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
    userSystem.setIsActivated(false);

    UserSystem result = userSystemService.register(userSystem, personalData );

    String readyHash = result.getUserSystemValidationHash().getHash()+"_"+
      UtilMethods.numberToAlphabetCharacters(userSystem.getId());

    new MailUtil().sendMailAsync(result.getEmail(),
      "Account activation - Sport Meeting Point",

      "<h1>Dev. mode:</h1>" +
        "<h2>" +
        "<a href="+frontendUrlDev+"/auth/activation?"+ readyHash
        +">To activate your account, click here.</a>" +
        "</h2>" +
        "<br/>" +
        "<h1>Prod. mode:</h1>"+
        "<h2>" +
        "<a href="+frontendUrlProd+"/auth/activation?"+ readyHash
        +">To activate your account, click here.</a>" +
        "</h2>" +
        "<br/>"
    );


    return new ResponseEntity<>(HttpStatus.OK);
  }


}
