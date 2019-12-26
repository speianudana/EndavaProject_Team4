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

  @Size(max=64, message = "Max. first name length 64 characters")
  @NotNull(message = "First name must not be empty")
  private String firstName;

  @Size(max=64, message = "Max. last name length 64 characters")
  @NotNull(message = "Last name must not be empty")
  private String lastName;

  @Email(message = "Please, enter valid email")
  @NotNull(message = "Email must not be empty")
  private String email;


  @Size(min=6, max=30, message = "Min. password length 6, maximum: 30 characters")
  @NotNull(message = "Password must not be empty")
  private String password;

}
