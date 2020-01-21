package com.webapp.sportmeetingpoint.domain.dto.Event;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class EventDTO {

  private Integer id;
  private String title;
  private String previewMessage;
  private String description;
  private Byte[] image;
  private String address;
  private String authorEmail;
  private String authorFullName;
  /*format: dd-mm-yyyy*/
  private String eventDate;

  private String category;

}
