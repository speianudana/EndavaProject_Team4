package com.webapp.sportmeetingpoint.application.service;


import com.webapp.sportmeetingpoint.domain.entities.News;
import com.webapp.sportmeetingpoint.domain.entities.NewsImage;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import com.webapp.sportmeetingpoint.persistance.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;
import java.util.List;

@Service
public class NewsServiceImpl implements NewsService {

    private final NewsRepository newsRepository;
    private final NewsImageRepository newsImageRepository;

    @Autowired
    public NewsServiceImpl( NewsRepository newsRepository, NewsImageRepository newsImageRepository) {
        this.newsRepository = newsRepository;
        this.newsImageRepository = newsImageRepository;

    }

    @Override
    public News saveNews(final News news, final UserSystem author, final NewsImage newsImage) {
        if(newsImage.getImage()!=null){
            NewsImage newsImage1 = newsImageRepository.save(newsImage);
            news.setNewsImageId(newsImage1.getId());
        }

        news.setUserAuthorActivity(author.getUserAuthorActivity());
        return newsRepository.save(news);
    }

    @Override
    public News findNewsById(Integer id) {
        return newsRepository.findById(id).orElse(null);
    }

    @Override
    public List<News> allNews() {
        return newsRepository.findAll();
    }


    @Override
    public List<News> find(List<Integer> excludedIds, Integer limit) {
        return newsRepository.findAllAndExcludeValueByListUseLimit(excludedIds, limit);
    }

    @Override
    public List<News> find(Integer limit) {
        return newsRepository.findAllUseLimit(limit);
    }


}
