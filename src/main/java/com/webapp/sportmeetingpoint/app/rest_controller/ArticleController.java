package com.webapp.sportmeetingpoint.app.rest_controller;


import com.webapp.sportmeetingpoint.app.model.ArticleRequestModel;
import com.webapp.sportmeetingpoint.app.service.AccountService;
import com.webapp.sportmeetingpoint.app.service.ArticleService;
import com.webapp.sportmeetingpoint.app.dto.Account;
import com.webapp.sportmeetingpoint.app.dto.Article;
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
