package com.webapp.sportmeetingpoint.domain.dto.Event;


import lombok.Builder;
import lombok.Data;

@Data
@Builder(builderMethodName = "eventInfoBuilder")
public class EventInfoResponseDTO {

  Integer id;

  String title;

  String authorName;
  String address;
  String eventDate;

  String previewMessage;
  String description;


  String[] participantsName;


}
