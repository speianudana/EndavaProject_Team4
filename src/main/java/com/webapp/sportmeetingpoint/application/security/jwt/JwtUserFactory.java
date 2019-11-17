package com.webapp.sportmeetingpoint.application.security.jwt;

import com.webapp.sportmeetingpoint.domain.entities.AppUserRoles;
import com.webapp.sportmeetingpoint.domain.entities.UserPersonalData;
import com.webapp.sportmeetingpoint.domain.entities.UserRole;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public final class JwtUserFactory {

  public JwtUserFactory() {
  }

  public static JwtUser create (UserSystem u){

    UserPersonalData d = u.getUserPersonalData();

    return new JwtUser(
            u.getId(),
            u.getEmail(),
            d.getFirstName(),
            d.getLastName(),
            u.getPassword(),
            u.getEmail(),
            u.getIsActivated(),
            u.getUpdatedData(),
            mapToGrantedAuthoritiesOne(u.getUserRole())
    );

  }


  private static List<GrantedAuthority> mapToGrantedAuthoritiesOne(UserRole userRole){
    List<GrantedAuthority> result = new ArrayList<>();
    result.add(new SimpleGrantedAuthority("ROLE_"+userRole.getName()));

    return result;
  }

}
