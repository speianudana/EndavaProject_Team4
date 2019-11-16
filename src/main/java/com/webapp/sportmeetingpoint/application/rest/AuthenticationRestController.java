package com.webapp.sportmeetingpoint.application.rest;


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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/v1/auth/")
public class AuthenticationRestController {

  private final AuthenticationManager authenticationManager;
  private final JwtTokenProvider jwtTokenProvider;
  private final UserSystemService userService;

  @Autowired
  public AuthenticationRestController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, UserSystemService userService) {
    this.authenticationManager = authenticationManager;
    this.jwtTokenProvider = jwtTokenProvider;
    this.userService = userService;
  }

  @PostMapping("login")
  public ResponseEntity login(@RequestBody AuthenticationRequestDTO requestDTO){
    try{
      String username = requestDTO.getUsername();
      authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, requestDTO.getPassword()));
      UserSystem user = userService.findByEmail(username);

      if (user == null) {
        throw new UsernameNotFoundException("User not found!");
      }

      List<UserRole> userRoles = new ArrayList<>();
      userRoles.add(user.getUserRole());

      String token = jwtTokenProvider.createToken(username, userRoles);

      Map<Object, Object> response = new HashMap<>();
      response.put("username", username);
      response.put("token", token);

      return ResponseEntity.ok(response);

    }catch(AuthenticationException e){
      throw new BadCredentialsException("Invalid username or password...");
    }

  }



}
