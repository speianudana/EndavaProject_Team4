package com.webapp.sportmeetingpoint.app.service;

import com.webapp.sportmeetingpoint.app.repository.ArticleRepository;
import com.webapp.sportmeetingpoint.app.dto.Article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class ArticleServiceImpl implements ArticleService {

  @Autowired
  private ArticleRepository articleRepository;


  @Override
  public Article createArticle(Article article) {
    return articleRepository.save(article);
  }

  @Override
  public List<Article> allArticles() {
    Iterable<Article> dbObjs = articleRepository.findAll();
    List<Article> result = new ArrayList<Article>();

    dbObjs.forEach(result::add);

    return result;
  }
}
