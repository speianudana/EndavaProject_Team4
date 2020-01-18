package com.webapp.sportmeetingpoint.application.rest.news;


import com.webapp.sportmeetingpoint.application.security.jwt.JwtUser;
import com.webapp.sportmeetingpoint.application.service.NewsService;
import com.webapp.sportmeetingpoint.domain.dto.News.NewsDTO;
import com.webapp.sportmeetingpoint.domain.entities.News;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/for_authenticated_user")
public class NewsForSubscriberController {

  private final NewsService newsService;

  @Autowired
  public NewsForSubscriberController(NewsService newsService) {
    this.newsService = newsService;
  }

  @RequestMapping(value="/get_news_for_subscriber", method = RequestMethod.GET)
  public ResponseEntity getNewsForSubscriber(){
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    JwtUser jwtUser = (JwtUser) authentication.getPrincipal();
    final Integer getUserId = jwtUser.getId();

    List<News> dbNews = newsService.newsForTheSubscriberByUserSystemId(getUserId);
    List<NewsDTO> newsForSubscriberResult = dbNews.stream().map(a->{
      NewsDTO current = new NewsDTO();
      current.setId(a.getId());
      current.setTitle(a.getTitle());
      current.setContext(a.getContext());

      return current;
    }).collect(Collectors.toList());



    return ResponseEntity.ok().body(newsForSubscriberResult);
  }


}
