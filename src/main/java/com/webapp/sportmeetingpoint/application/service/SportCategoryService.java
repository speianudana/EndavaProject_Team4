package com.webapp.sportmeetingpoint.application.service;

import com.webapp.sportmeetingpoint.domain.entities.SportCategory;

import java.util.Optional;

public interface SportCategoryService {

  SportCategory save(SportCategory sportCategory);
  Optional<SportCategory> findById(final Integer id);
  Optional <SportCategory> findByName(String name);
}
