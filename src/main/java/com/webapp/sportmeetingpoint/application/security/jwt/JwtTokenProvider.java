package com.webapp.sportmeetingpoint.application.security.jwt;


import com.webapp.sportmeetingpoint.domain.entities.UserRole;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class JwtTokenProvider {

  @Value("${jwt.token.secret}")
  private String secret;

  @Value("${jwt.token.expired}")
  private Long validityInMilliseconds;

  public String createToken(String userName, List<UserRole> userRoles){
    return null;
  }

  public Authentication getAuthentication (String token){
    return null;
  }

  public String getUserName(String token){
    return null;
  }

  public boolean validateToken(String token){
    return true;
  }

  private List<String> getRolenames(List<UserRole> userRoles){
    List<String> result = new ArrayList<>();

    userRoles.forEach( role -> result.add(role.getName()));
    return result;
  }


}
