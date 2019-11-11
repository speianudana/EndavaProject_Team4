package com.webapp.sportmeetingpoint.app.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArticleRequestModel {

  private String title;
  private String text;
  private Long authorId;


}
