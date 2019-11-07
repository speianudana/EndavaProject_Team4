package com.webapp.sportmeetingpoint.service;

import com.webapp.sportmeetingpoint.dto.Article;
import com.webapp.sportmeetingpoint.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
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
