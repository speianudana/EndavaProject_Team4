package com.webapp.sportmeetingpoint.application.rest.news;

import com.webapp.sportmeetingpoint.application.security.jwt.JwtUser;
import com.webapp.sportmeetingpoint.application.service.NewsService;
import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.dto.NewsDTO;
import com.webapp.sportmeetingpoint.domain.entities.News;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Date;


@RestController
@CrossOrigin
@RequestMapping(value = "/api/news")
public class NewsController {

    private final UserSystemService userSystemService;
    private final NewsService newsService;

    @Autowired
    public NewsController(UserSystemService userSystemService, NewsService newsService) {
        this.userSystemService = userSystemService;
        this.newsService = newsService;
    }

    @PostMapping("/add")
    @CrossOrigin
    public ResponseEntity<?> addNewNews(@RequestBody NewsDTO newsDTO) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        JwtUser jwtUser = (JwtUser) authentication.getPrincipal();
        UserSystem userSystem = userSystemService.findById(jwtUser.getId());
        News n = new News();
        n.setTitle(newsDTO.getTitle());
//        n.setDate(newsDTO.getDate());
        n.setContext(newsDTO.getContext());

        News result = newsService.saveNews(n, userSystem);

        return ResponseEntity.ok("");
    }
}