package com.webapp.sportmeetingpoint.domain.dto;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Data
public class LoginRequestDTO {

  @Email(message = "Please, enter valid email")
  @NotNull(message = "Email must not be empty")
  private String username;

  @NotNull(message = "Password must not be empty")
  private String password;

}
