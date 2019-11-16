package com.webapp.sportmeetingpoint.application.service;

import com.webapp.sportmeetingpoint.domain.entities.UserPersonalData;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;

import java.util.List;

public interface UserSystemService {

  UserSystem register(UserSystem userSystem);

  UserSystem register(UserSystem userSystem, String userRole);

  List<UserSystem> findAll();

  UserSystem findByEmail(final String email);

  UserSystem findById(Long id);




}
