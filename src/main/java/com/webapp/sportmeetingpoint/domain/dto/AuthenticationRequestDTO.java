package com.webapp.sportmeetingpoint.domain.dto;

import lombok.Data;

@Data
public class AuthenticationRequestDTO {

  private String username;
  private String password;

}
