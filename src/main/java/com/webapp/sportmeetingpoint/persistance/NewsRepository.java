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

    News save(News news);


    @Transactional
    Optional<News> findById(Integer id);


    @Transactional
    @Modifying
    @Query(value = "SELECT \"image\" FROM News u WHERE u.id=:id1", nativeQuery = true)
    Optional<Byte[]> findByIdEventImage(@Param("id1")Integer id);


    @Modifying
    @Query(value = "SELECT * FROM Event u", nativeQuery = true)
    @Transactional
    List<News> findAll();

}
