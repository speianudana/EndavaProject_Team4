package com.webapp.sportmeetingpoint.application.service;

import com.webapp.sportmeetingpoint.domain.entities.AppUserRoles;
import com.webapp.sportmeetingpoint.domain.entities.UserPersonalData;
import com.webapp.sportmeetingpoint.domain.entities.UserRole;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import com.webapp.sportmeetingpoint.persistance.UserPersonalDataRepository;
import com.webapp.sportmeetingpoint.persistance.UserRoleRepository;
import com.webapp.sportmeetingpoint.persistance.UserSystemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountServiceImpl implements AccountService  {


  private final UserSystemRepository userSystemRepository;
  private final UserRoleRepository userRoleRepository;
  private final UserPersonalDataRepository userPersonalDataRepository;

  @Autowired
  public AccountServiceImpl(UserSystemRepository userSystemRepository, UserRoleRepository userRoleRepository,
                            UserPersonalDataRepository userPersonalDataRepository) {
    this.userSystemRepository = userSystemRepository;
    this.userRoleRepository = userRoleRepository;
    this.userPersonalDataRepository = userPersonalDataRepository;
  }


  @Override
  public UserSystem register(UserSystem userSystem) {
    UserRole defaultRole = userRoleRepository.findByName(AppUserRoles.USER.toString()).get();
    userSystem.setUserPersonalData(new UserPersonalData());
    userSystem.setUserRole(defaultRole);
    userSystem.setIsActivated(true);

    return userSystem;
  }

  @Override
  public List<UserSystem> findAll() {
    return null;
  }

  @Override
  public UserSystem findByEmail(String email) {
    return null;
  }

  @Override
  public UserSystem findById(Long id) {
    return null;
  }
}
