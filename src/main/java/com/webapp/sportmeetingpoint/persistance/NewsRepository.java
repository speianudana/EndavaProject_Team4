package com.webapp.sportmeetingpoint.persistance;

import com.webapp.sportmeetingpoint.domain.entities.News;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface NewsRepository extends CrudRepository<News, Integer> {


    @Transactional
    Optional<News> findById(Integer id);


    @Transactional
    @Modifying
    @Query(value = "SELECT \"image\" FROM News u WHERE u.id=:id1", nativeQuery = true)
    Optional<Byte[]> findByIdNewsImage(@Param("id1")Integer id);


    @Modifying
    @Query(value = "SELECT * FROM News u", nativeQuery = true)
    @Transactional
    List<News> findAll();

    @Modifying
    @Query(value = "SELECT * FROM News u WHERE u.id NOT IN ?1 LIMIT ?2",nativeQuery = true)
    @Transactional
    List<News> findAllAndExcludeValueByListUseLimit(List<Integer> ids, Integer limit);

    @Modifying
    @Query(value = "SELECT * FROM News u LIMIT ?1",nativeQuery = true)
    @Transactional
    List<News> findAllUseLimit(Integer limit);


    @Modifying
    @Transactional
    @Query(value = "SELECT * FROM \"news\" as n " +
      " INNER JOIN \"news_subscribe_activity\" as na " +
      " ON na.\"news_fk_id\"=n.\"id\" AND na.\"user_system_fk_id\"=?1 ", nativeQuery = true)
    List<News> newsForTheSubscriberByUserSystemId(final Integer userId);

}
