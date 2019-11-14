package com.webapp.sportmeetingpoint.application.service;

import com.webapp.sportmeetingpoint.domain.entities.UserPersonalData;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;

import java.util.List;

public interface AccountService {

  UserSystem register(UserSystem userSystem);

  List<UserSystem> findAll();

  UserSystem findByEmail(final String email);

  UserSystem findById(Long id);




}
