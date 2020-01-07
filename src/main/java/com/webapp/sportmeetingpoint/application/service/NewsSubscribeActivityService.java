package com.webapp.sportmeetingpoint.application.service;

import com.webapp.sportmeetingpoint.domain.entities.News;
import com.webapp.sportmeetingpoint.domain.entities.NewsSubscribeActivity;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;

public interface NewsSubscribeActivityService {

  NewsSubscribeActivity subscribeUserToTheCurrentNews(final UserSystem user, final News news) throws Exception;

  void unsubscribeUserToTheCurrentNews(final UserSystem user, final News news) throws Exception;

}
