package com.webapp.sportmeetingpoint.persistance;

import com.webapp.sportmeetingpoint.domain.entities.News;
import org.springframework.data.repository.CrudRepository;

public interface NewsRepository extends CrudRepository<News, Long> {
    News save(News news);
}
