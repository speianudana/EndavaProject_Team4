package com.webapp.sportmeetingpoint.controller;


import com.webapp.sportmeetingpoint.dto.Article;
import com.webapp.sportmeetingpoint.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/articles")
public class ArticleController {

  @Autowired
  private ArticleService articleService;

  @GetMapping("/all")
  public List<Article> allArticles(){
    return articleService.allArticles();
  }

}
