package com.webapp.sportmeetingpoint.application.service;

import com.webapp.sportmeetingpoint.domain.entities.*;
import com.webapp.sportmeetingpoint.persistance.UserActivityRepository;
import com.webapp.sportmeetingpoint.persistance.UserPersonalDataRepository;
import com.webapp.sportmeetingpoint.persistance.UserRoleRepository;
import com.webapp.sportmeetingpoint.persistance.UserSystemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserSystemServiceImpl implements UserSystemService {


  private final UserSystemRepository userSystemRepository;
  private final UserRoleRepository userRoleRepository;
  private final UserPersonalDataRepository userPersonalDataRepository;
  private final UserActivityRepository userActivityRepository;

  @Autowired
  public UserSystemServiceImpl(UserSystemRepository userSystemRepository, UserRoleRepository userRoleRepository,
                               UserActivityRepository userActivityRepository,
                               UserPersonalDataRepository userPersonalDataRepository) {
    this.userSystemRepository = userSystemRepository;
    this.userRoleRepository = userRoleRepository;
    this.userPersonalDataRepository = userPersonalDataRepository;
    this.userActivityRepository = userActivityRepository;
  }



  @Override
  public UserSystem register(UserSystem userSystem, UserPersonalData userPersonalData, UserActivity activity, String userRole) {

    if(activity==null ) activity = new UserActivity();
    if(userPersonalData == null) userPersonalData = new UserPersonalData();

    UserRole role = userRoleRepository.findByName(userRole).get();
    UserActivity defaultUserActivity = userActivityRepository.save(activity);
    UserPersonalData defaultPersonalData =  userPersonalDataRepository.save(userPersonalData);

    userSystem.setUserActivity(activity);
    userSystem.setUserRole(role);
    userSystem.setUserPersonalData(userPersonalData);

    return userSystemRepository.save(userSystem);
  }


  @Override
  public List<UserSystem> findAll() {
    return userSystemRepository.findAll();
  }

  @Override
  public UserSystem findByEmail(String email) {
    return userSystemRepository.findByEmail(email).orElse(null);
  }

  @Override
  public UserSystem findById(Long id) {
    return userSystemRepository.findById(id).orElse(null);

  }
}
