package com.webapp.sportmeetingpoint.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserPersonalDataDTO {
  private String firstName;
  private String lastName;
  private String telNumber;
  private String DOB;

}
