package com.webapp.sportmeetingpoint.application.service;

import com.webapp.sportmeetingpoint.domain.entities.News;
import com.webapp.sportmeetingpoint.domain.entities.NewsImage;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;

import java.util.List;

public interface NewsService {
    News saveNews(News news, UserSystem author, NewsImage newsImage);

    News findNewsById(Integer id);

    List<News> allNews();

    List<News> find(final List<Integer> excludedIds, final Integer limit);

    List<News> find(final Integer limit);
}
