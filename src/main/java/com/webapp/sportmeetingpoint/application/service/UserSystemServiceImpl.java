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


//  @Override
//  public UserSystem register(UserSystem userSystem) {
//    UserRole defaultRole = userRoleRepository.findByName(AppUserRoles.USER.toString()).get();
//    UserPersonalData defaultPersonalData =  userPersonalDataRepository.save(new UserPersonalData());
//    UserActivity defaultUserActivity = userActivityRepository.save(new UserActivity());
//    userSystem.setUserActivity(defaultUserActivity);
//    userSystem.setUserRole(defaultRole);
//    userSystem.setIsActivated(true);
//
//    if(userSystem.getUserPersonalData()==null)
//      userSystem.setUserPersonalData(defaultPersonalData);
//    else
//      userSystem.setUserPersonalData(userPersonalDataRepository.save(userSystem.getUserPersonalData()));
//
//    return userSystemRepository.save(userSystem);
//  }

  @Override
  public UserSystem register(UserSystem userSystem) {
    return null;
  }

  @Override
  public UserSystem register(UserSystem userSystem, String userRole) {
    UserRole defaultRole = userRoleRepository.findByName(userRole).get();
    UserPersonalData defaultPersonalData =  userPersonalDataRepository.save(new UserPersonalData());
    UserActivity defaultUserActivity = userActivityRepository.save(new UserActivity());
    userSystem.setUserActivity(defaultUserActivity);
    userSystem.setUserRole(defaultRole);
    userSystem.setIsActivated(true);

    if(userSystem.getUserPersonalData()==null)
      userSystem.setUserPersonalData(defaultPersonalData);
    else
      userSystem.setUserPersonalData(userPersonalDataRepository.save(userSystem.getUserPersonalData()));

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
