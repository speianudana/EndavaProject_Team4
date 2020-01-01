package com.webapp.sportmeetingpoint.domain.dto.Event;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDataDTO {

  private Integer id;
  private String email;
  private String firstName;
  private String lastName;

}
