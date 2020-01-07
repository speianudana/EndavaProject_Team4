package com.webapp.sportmeetingpoint.application.rest.news;


import com.webapp.sportmeetingpoint.application.security.jwt.JwtUser;
import com.webapp.sportmeetingpoint.application.service.NewsService;
import com.webapp.sportmeetingpoint.application.service.NewsSubscribeActivityService;
import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.entities.News;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@Slf4j
@RestController
@RequestMapping(value="/api")
public class NewsSubscribeController {

  @Autowired
  private UserSystemService userSystemService;

  @Autowired
  private NewsSubscribeActivityService newsSubscribeActivityService;

  @Autowired
  private NewsService newsService;

  @RequestMapping(value="/for_authenticated_user/subscribe_to_news", method = RequestMethod.GET)
  public ResponseEntity subscribeUserToNews(@RequestParam("newsId") final Integer newsId){


    try{
      Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
      JwtUser jwtUser = (JwtUser)authentication.getPrincipal();
      final Integer userId = jwtUser.getId();

      UserSystem u = userSystemService.findById(userId);
      News news = newsService.findNewsById(newsId);

      newsSubscribeActivityService.subscribeUserToTheCurrentNews(u, news);

    }catch(Exception e){
      log.debug("Message: ", e);
      return ResponseEntity.badRequest().body(e);
    }


    return ResponseEntity.ok(null);
  }

  @RequestMapping(value="/for_authenticated_user/unsubscribe_to_news", method = RequestMethod.GET)
  public ResponseEntity unsubscribeUserToNews(@RequestParam("newsId") final Integer newsId){


    try{
      Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
      JwtUser jwtUser = (JwtUser)authentication.getPrincipal();
      final Integer userId = jwtUser.getId();

      UserSystem u = userSystemService.findById(userId);
      News news = newsService.findNewsById(newsId);

      newsSubscribeActivityService.unsubscribeUserToTheCurrentNews(u, news);

    }catch(Exception e){
      log.debug("Message: ", e);
      return ResponseEntity.badRequest().body(e);
    }


    return ResponseEntity.ok(null);
  }

}
