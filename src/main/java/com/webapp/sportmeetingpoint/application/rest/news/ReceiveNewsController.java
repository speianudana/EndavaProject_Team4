package com.webapp.sportmeetingpoint.application.rest.news;


import com.webapp.sportmeetingpoint.application.service.NewsService;
import com.webapp.sportmeetingpoint.domain.dto.News.NewsDTO;
import com.webapp.sportmeetingpoint.domain.dto.News.TheNumberOfNecessaryNewsDTO;
import com.webapp.sportmeetingpoint.domain.dto.ImageDTO;
import com.webapp.sportmeetingpoint.domain.entities.News;
import com.webapp.sportmeetingpoint.domain.entities.NewsImage;
import com.webapp.sportmeetingpoint.domain.entities.UserPersonalData;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import com.webapp.sportmeetingpoint.persistance.NewsImageRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Log4j2
@RestController
@RequestMapping(value = "/api/for_all")
public class ReceiveNewsController {

    private final NewsService newsService;

    @Autowired
    public ReceiveNewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @Autowired
    NewsImageRepository newsImageRepository;

    @RequestMapping(value = "/news/get_news", method = RequestMethod.POST)
    public ResponseEntity getAllNewsWithoutImage(@RequestBody final TheNumberOfNecessaryNewsDTO reqData)
      throws MessagingException {

        List<Integer> excludedIds = reqData.getGetUINewsId();
        final Integer limit = reqData.getTheNumberOfNecessaryNews();

        List<News> newsFromDb = new ArrayList<>();

        if (excludedIds == null || excludedIds.size() == 0)
            newsFromDb = newsService.find(limit);
        else
            newsFromDb = newsService.find(excludedIds, limit);

        List<NewsDTO> result = newsFromDb.stream().map(a -> {
              final NewsDTO e = new NewsDTO();

              UserSystem author = a.getUserAuthorActivity().getUserSystem();

              if (author != null) {
                  final String authorEmail = author.getEmail();
                  UserPersonalData authorPersonalData = a.getUserAuthorActivity().getUserSystem().getUserPersonalData();
                  final String authorFullName = authorPersonalData.getFirstName() + " " + authorPersonalData.getLastName();
                  e.setAuthorEmail(authorEmail);
                  e.setAuthorFullName(authorFullName);
              } else {
                  e.setAuthorEmail("-deleted-");
                  e.setAuthorFullName("-deleted-");
              }


              e.setId(a.getId());
              e.setTitle(a.getTitle());
              e.setContext(a.getContext());
              e.setImage(null);
              e.setSportCategory(a.getSportCategory().getName());

//
//                    DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
//                    e.setNewsDate(df.format(a.getDate()));


              return e;
          }

        ).collect(Collectors.toList());


        return ResponseEntity.ok().body(result);
    }

    @RequestMapping(value = "/news/news_by_id", method = RequestMethod.GET)
    public ResponseEntity getNewsInfo(@RequestParam(name = "id") final Integer paramId) {

        NewsDTO result = new NewsDTO();

        try {

            final News dbNews = newsService.findNewsById(paramId);
            final UserSystem getAuthor = dbNews.getUserAuthorActivity().getUserSystem();
            final UserPersonalData getAuthorPersonalData = getAuthor.getUserPersonalData();
            final String authorFullName = getAuthorPersonalData.getFirstName() + " " + getAuthorPersonalData.getLastName();


            result.setAuthorFullName(authorFullName);
            result.setAuthorEmail(getAuthor.getEmail());
            result.setId(paramId);
            result.setContext(dbNews.getContext());
            result.setTitle(dbNews.getTitle());
            result.setImage(null);
            result.setSportCategory(dbNews.getSportCategory().getName());

//
//            DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
//            result.setNewsDate(df.format(dbNews.getDate()));

            return ResponseEntity.ok().body(result);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


    @RequestMapping(value = "/news/image_by_id", method = RequestMethod.GET)
    public ResponseEntity<?> getNewsImageById(@RequestParam("id") final Integer newsId) {
        try {
            News news = newsService.findNewsById(newsId);

            if (news.getNewsImageId() == null)
                return ResponseEntity.ok(HttpStatus.NOT_FOUND);

            NewsImage newsImage = newsImageRepository.findById(news.getNewsImageId()).orElse(null);

            if (newsImage == null || newsImage.getImage() == null) {
                return ResponseEntity.ok(HttpStatus.NOT_FOUND);
            }

            return new ResponseEntity<>(new ImageDTO(news.getId(), newsImage.getImage()), HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.ok(HttpStatus.NOT_FOUND);
        }
    }
}
