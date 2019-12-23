package com.webapp.sportmeetingpoint.domain.dto;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class UserRegistrationDTO {

  private Long id;

  private String firstName;

  private String lastName;

  @Email(message = "Please, enter valid email")
  @NotNull(message = "Email must not be empty")
  private String email;


  @Size(min=6, max=30, message = "Min. password length 6, maximum: 30 characters")
  @NotNull(message = "Password must not be empty")
  private String password;

}
