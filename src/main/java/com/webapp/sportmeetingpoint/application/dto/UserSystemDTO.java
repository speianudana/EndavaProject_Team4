package com.webapp.sportmeetingpoint.application.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
  private String passwordRepeat;

}
