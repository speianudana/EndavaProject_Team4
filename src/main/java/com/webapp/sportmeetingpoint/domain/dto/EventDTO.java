package com.webapp.sportmeetingpoint.domain.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class EventDTO {

  private String title;
  private String previewMessage;
  private String description;
  private byte[] image;
  private String address;



}
