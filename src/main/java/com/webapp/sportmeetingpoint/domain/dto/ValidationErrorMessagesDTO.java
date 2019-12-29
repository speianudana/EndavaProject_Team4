package com.webapp.sportmeetingpoint.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ValidationErrorMessagesDTO {

  private List<String> validationErrorMessages;

}
