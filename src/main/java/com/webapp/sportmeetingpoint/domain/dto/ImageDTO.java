package com.webapp.sportmeetingpoint.domain.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ImageDTO {
  
  private Integer id;
  private Byte[] image;
  
}
