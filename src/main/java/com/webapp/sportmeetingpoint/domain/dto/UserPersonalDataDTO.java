package com.webapp.sportmeetingpoint.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserPersonalDataDTO {
  private String email;
  private String firstName;
  private String lastName;
  private String telNumber;
  private String DOB;
  private String role;

}
