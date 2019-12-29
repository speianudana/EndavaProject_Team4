package com.webapp.sportmeetingpoint.application.rest.auth;


import com.webapp.sportmeetingpoint.domain.dto.LoginRequestDTO;
import com.webapp.sportmeetingpoint.application.security.jwt.JwtTokenProvider;
import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.dto.UserRegistrationDTO;
import com.webapp.sportmeetingpoint.domain.dto.ValidationErrorMessagesDTO;
import com.webapp.sportmeetingpoint.domain.entities.UserRole;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import java.util.*;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api")
public class LogInController {

  private final AuthenticationManager authenticationManager;
  private final JwtTokenProvider jwtTokenProvider;
  private final UserSystemService userService;
  private final Validator validator;

  @Autowired
  public LogInController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider,
                         UserSystemService userService) {
    this.authenticationManager = authenticationManager;
    this.jwtTokenProvider = jwtTokenProvider;
    this.userService = userService;
    this.validator = Validation.buildDefaultValidatorFactory().usingContext().getValidator();
  }


  @PostMapping("/for_all/login")
  public ResponseEntity<?> login(@RequestBody LoginRequestDTO requestDTO) {

    Set<ConstraintViolation<LoginRequestDTO>> validates = validator.validate(requestDTO);
    List<String> errorMessages = validates.stream().map(ConstraintViolation::getMessageTemplate)
      .collect(Collectors.toList());

    if(errorMessages.size()>0){
      return ResponseEntity.ok().body(new ValidationErrorMessagesDTO(errorMessages));
    }

    try {
      String username = requestDTO.getUsername();
      String password = requestDTO.getPassword();
      UserSystem user = userService.findByEmail(username);

      if (user == null) {
        return ResponseEntity.ok().body(new ValidationErrorMessagesDTO(
            Collections.singletonList("Invalid username or password..."))
        );

      }

      List<UserRole> userRoles = new ArrayList<>(Collections.singletonList(user.getUserRole()));

      try {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
      } catch (DisabledException e) {

        return ResponseEntity.ok().body(new ValidationErrorMessagesDTO(
            Collections.singletonList("This account is disabled or not activated, " +
              "please go through the registration process again or check email. "))
        );


      } catch (Exception e) {

        return ResponseEntity.ok().body(new ValidationErrorMessagesDTO(
            Collections.singletonList("Invalid username or password.."))
        );
      }


      String token = jwtTokenProvider.createToken(username, userRoles);


      return ResponseEntity.ok(
        new HashMap<Object, Object>() {{
          put("token", token);
        }}
      );

    } catch (AuthenticationException e) {
      return ResponseEntity.ok().body(new ValidationErrorMessagesDTO(
        Collections.singletonList("Invalid username or password."))
      );
    }


  }

}
