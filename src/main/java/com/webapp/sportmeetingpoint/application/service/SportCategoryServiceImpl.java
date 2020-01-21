package com.webapp.sportmeetingpoint.application.service;

import com.webapp.sportmeetingpoint.domain.entities.SportCategory;
import com.webapp.sportmeetingpoint.persistance.SportCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SportCategoryServiceImpl implements SportCategoryService {

  private final SportCategoryRepository sportCategoryRepository;

  @Autowired
  public SportCategoryServiceImpl(SportCategoryRepository sportCategoryRepository) {
    this.sportCategoryRepository = sportCategoryRepository;
  }

  @Override
  public SportCategory save(SportCategory sportCategory) {
    return sportCategoryRepository.save(sportCategory);
  }

  @Override
  public Optional<SportCategory> findById(Integer id) {
    return sportCategoryRepository.findById(id);
  }

  @Override
  public Optional<SportCategory> findByName(String name) {
    return sportCategoryRepository.findByName(name);
  }
}
