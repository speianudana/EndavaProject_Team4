package com.webapp.sportmeetingpoint.application.service;

import com.webapp.sportmeetingpoint.domain.entities.News;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;

import java.util.List;

public interface NewsService {

    News saveNews(News news, UserSystem author);

    News findEventById(Integer id);

    List<News> allEvents();
}
