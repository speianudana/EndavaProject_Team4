package com.webapp.sportmeetingpoint.application.rest.auth;


import com.webapp.sportmeetingpoint.application.security.jwt.JwtAuthenticationException;
import com.webapp.sportmeetingpoint.application.security.jwt.JwtTokenProvider;
import com.webapp.sportmeetingpoint.application.security.jwt.JwtUser;
import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/token")
@CrossOrigin
public class TokenValidationController {

  private final JwtTokenProvider jwtTokenProvider;
  private final UserSystemService userSystemService;

  @Autowired
  public TokenValidationController( JwtTokenProvider jwtTokenProvider, UserSystemService userService) {
    this.jwtTokenProvider = jwtTokenProvider;
    this.userSystemService = userService;
  }

  @GetMapping("/is_valid")
  boolean tokenIsValid(){
    String token = null;
    JwtUser user = null;

    try{
      Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
      user = (JwtUser)authentication.getPrincipal();
    }catch(ClassCastException | JwtAuthenticationException  e){
      return false;
    }

    return jwtTokenProvider.validateToken(user.getToken());
  }

}
