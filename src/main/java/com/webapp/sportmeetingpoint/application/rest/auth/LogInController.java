package com.webapp.sportmeetingpoint.application.rest.auth;


import com.webapp.sportmeetingpoint.application.dto.AuthenticationRequestDTO;
import com.webapp.sportmeetingpoint.application.security.jwt.JwtTokenProvider;
import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.entities.UserRole;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping(value = "/api/auth")
public class LogInController {

  private final AuthenticationManager authenticationManager;
  private final JwtTokenProvider jwtTokenProvider;
  private final UserSystemService userService;

  @Autowired
  public LogInController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider,
                         UserSystemService userService) {
    this.authenticationManager = authenticationManager;
    this.jwtTokenProvider = jwtTokenProvider;
    this.userService = userService;
  }

  @PostMapping("/login")
  @CrossOrigin
  public ResponseEntity login(@RequestBody AuthenticationRequestDTO requestDTO){
    try{
      String username = requestDTO.getUsername();
      String password = requestDTO.getPassword();

      authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
      UserSystem user = userService.findByEmail(username);

      if (user == null) {
        throw new UsernameNotFoundException("User not found!");
      }

      List<UserRole> userRoles = new ArrayList<>(Collections.singletonList(user.getUserRole()));

      String token = jwtTokenProvider.createToken(username, userRoles);

      Map<Object, Object> response = new HashMap<>();
      response.put("username", username);
      response.put("token", token);

      return ResponseEntity.ok(token);

    }catch(AuthenticationException e){
      throw new BadCredentialsException("Invalid username or password...");
    }

  }

}
