package com.webapp.sportmeetingpoint.persistance;

import com.webapp.sportmeetingpoint.domain.entities.SportCategory;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface SportCategoryRepository extends CrudRepository<SportCategory, Integer> {

  @Modifying
  @Transactional
  @Query(value = "SELECT * FROM \"sport_category\" ", nativeQuery = true)
  List<SportCategory> findAll();

  Optional<SportCategory> findByName(String name);

}
