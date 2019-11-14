package com.webapp.sportmeetingpoint.application.security.jwt;

import com.webapp.sportmeetingpoint.domain.entities.UserPersonalData;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;

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
            null
    );

  }

//    this.id = id;
//    this.userName = userName;
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.password = password;
//    this.email = email;
//    this.enabled = enabled;
//    this.lastPasswordResetDate = lastPasswordResetDate;
//    this.authorities = authorities;

}
