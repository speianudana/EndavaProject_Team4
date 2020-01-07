package com.webapp.sportmeetingpoint.persistance;

import com.webapp.sportmeetingpoint.domain.entities.NewsSubscribeActivity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsSubscribeActivityRepository extends CrudRepository<NewsSubscribeActivity, Integer> {


}
