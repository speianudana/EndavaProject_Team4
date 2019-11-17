package com.webapp.sportmeetingpoint.application.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.webapp.sportmeetingpoint.domain.entities.UserPersonalData;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import lombok.Data;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class UserSystemDTO {
  private Long id;
  private String username;//equal email
  private String firstName;
  private String lastName;
  private String email;
  private String password;

  public UserSystem toUserSystem(){
    UserSystem u = new UserSystem();
    UserPersonalData p = new UserPersonalData();

    p.setLastName( lastName);
    p.setFirstName(firstName);
    p.setUserSystem(u);
    u.setUserPersonalData(p);
    u.setEmail(email);
    u.setPassword(password);

    return u;
  }

  public static UserSystemDTO fromUserSystem(UserSystem userSystem){
    UserSystemDTO u = new UserSystemDTO();
    u.setId(userSystem.getId());
    u.setEmail(userSystem.getEmail());
    u.setUsername(userSystem.getEmail());
    u.setFirstName(userSystem.getUserPersonalData().getFirstName());
    u.setLastName(userSystem.getUserPersonalData().getLastName());

    return u;
  }




}
