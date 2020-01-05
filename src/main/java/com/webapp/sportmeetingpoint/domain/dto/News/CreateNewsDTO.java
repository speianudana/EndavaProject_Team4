package com.webapp.sportmeetingpoint.domain.dto.News;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


  @Data
  @NoArgsConstructor
  public class CreateNewsDTO {

    private Integer id;

    @Size(min=1, max=64, message = "Maximum title length 64 characters")
    @NotNull(message = "Title is required")
    private String title;

    @Size(min=1, max=100, message = "Maximum context length 1000 characters")
    @NotNull(message = "Context is required")
    private String context;

    private Byte[] image;


  }

