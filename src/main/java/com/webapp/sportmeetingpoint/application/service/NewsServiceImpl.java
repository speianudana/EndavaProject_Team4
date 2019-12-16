package com.webapp.sportmeetingpoint.application.service;


import com.webapp.sportmeetingpoint.domain.entities.News;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import com.webapp.sportmeetingpoint.persistance.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;

@Service
public class NewsServiceImpl implements NewsService {

    private final NewsRepository newsRepository;

    @Autowired
    public NewsServiceImpl( NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    @Override
    public News saveNews(News news, @NotNull UserSystem author) {
        news.setUserActivity(author.getUserActivity());
        return newsRepository.save(news);
    }


}
