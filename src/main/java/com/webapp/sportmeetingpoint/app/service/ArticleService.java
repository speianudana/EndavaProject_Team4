package com.webapp.sportmeetingpoint.app.service;

import com.webapp.sportmeetingpoint.app.dto.Article;

import java.util.List;

public interface ArticleService {

  Article createArticle(Article article);
  List<Article> allArticles();

}
