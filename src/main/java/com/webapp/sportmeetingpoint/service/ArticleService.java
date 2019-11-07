package com.webapp.sportmeetingpoint.service;

import com.webapp.sportmeetingpoint.dto.Article;

import java.util.List;

public interface ArticleService {

  Article createArticle(Article article);
  List<Article> allArticles();

}
