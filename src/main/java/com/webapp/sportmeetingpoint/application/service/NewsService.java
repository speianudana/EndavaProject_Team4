package com.webapp.sportmeetingpoint.application.service;

import com.webapp.sportmeetingpoint.domain.entities.News;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;

public interface NewsService {

    News saveNews(News news, UserSystem author);

}
