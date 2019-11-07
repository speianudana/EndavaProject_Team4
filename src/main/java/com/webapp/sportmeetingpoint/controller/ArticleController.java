package com.webapp.sportmeetingpoint.controller;


import com.webapp.sportmeetingpoint.dto.Account;
import com.webapp.sportmeetingpoint.dto.Article;
import com.webapp.sportmeetingpoint.model.ArticleRequestModel;
import com.webapp.sportmeetingpoint.service.AccountService;
import com.webapp.sportmeetingpoint.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/articles")
public class ArticleController {

  @Autowired
  private ArticleService articleService;
  @Autowired
  private AccountService accountService;

  @GetMapping("/all")
  public List<Article> allArticles(){
    return articleService.allArticles();
  }

  @PostMapping(consumes = "application/json", produces = "application/json")
  public Article addArticle(@RequestBody ArticleRequestModel a){
    Article article = new Article();
    article.setText(a.getText());
    article.setTitle(a.getTitle());

    if(a.getAuthorId()!=null) {
      Account author = accountService.findById(a.getAuthorId());
      article.setAuthorAccount(author);
    }

    return articleService.createArticle(article);
  }

}
