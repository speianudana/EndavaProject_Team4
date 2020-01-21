package com.webapp.sportmeetingpoint.domain.dto.Event;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
public class CreateEventDTO {
  
  private Integer id;
  
  @Size(min=1, max=64, message = "Maximum title length 64 characters")
  @NotNull(message = "Title is required")
  private String title;
  
  @Size(min=1, max=200, message = "Maximum preview message length 200 characters")
  @NotNull(message = "Preview message is required")
  private String previewMessage;
  
  @NotNull(message = "Description is required")
  private String description;
  
  @NotNull(message = "Address is required")
  private String address;

  @NotNull(message = "Category is required")
  private String sportCategory;

  /*format YYYY-MM-DD*/
  private String eventDate;

  private Byte[] image;
  
  
}
