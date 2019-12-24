package com.webapp.sportmeetingpoint.application.service;

import com.webapp.sportmeetingpoint.domain.entities.*;
import com.webapp.sportmeetingpoint.persistance.*;
import com.webapp.sportmeetingpoint.util.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.List;
import java.util.Random;

@Service
public class UserSystemServiceImpl implements UserSystemService {


  private final UserSystemRepository userSystemRepository;
  private final UserRoleRepository userRoleRepository;
  private final UserPersonalDataRepository userPersonalDataRepository;
  private final UserActivityRepository userActivityRepository;
  private final UserSystemValidationHashRepository userSystemValidationHashRepository;

  @Autowired
  public UserSystemServiceImpl(UserSystemRepository userSystemRepository, UserRoleRepository userRoleRepository,
                               UserActivityRepository userActivityRepository,
                               UserPersonalDataRepository userPersonalDataRepository,
                               UserSystemValidationHashRepository userSystemValidationHashRepository) {
    this.userSystemRepository = userSystemRepository;
    this.userRoleRepository = userRoleRepository;
    this.userPersonalDataRepository = userPersonalDataRepository;
    this.userActivityRepository = userActivityRepository;
    this.userSystemValidationHashRepository = userSystemValidationHashRepository;
  }



  @Override
  public UserSystem register(UserSystem userSystem, UserPersonalData userPersonalData  ) {


    UserRole role = userRoleRepository.findByName(AppUserRoles.USER.toString()).get();
    UserActivity defaultUserActivity = userActivityRepository.save(new UserActivity());
    UserPersonalData defaultPersonalData =  userPersonalDataRepository.save(userPersonalData);

    String alphabet = RandomString.digits + "ACEFGHJKLMNPQRUVWXY"+"abcdefhijkprstuvwx";

    Random rand = new Random();
    int randomNum = 64 + rand.nextInt(64);

    RandomString tickets = new RandomString(randomNum, new SecureRandom(), alphabet);
    String hash = tickets.nextString();
    UserSystemValidationHash userSystemValidationHash = new UserSystemValidationHash();
    userSystemValidationHash.setHash(hash);
    userSystemValidationHash = userSystemValidationHashRepository.save(userSystemValidationHash);

    userSystem.setUserActivity(defaultUserActivity);
    userSystem.setUserRole(role);
    userSystem.setUserPersonalData(userPersonalData);
    userSystem.setUserSystemValidationHash(userSystemValidationHash);

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
  public UserSystem findById(Integer id) {
    return userSystemRepository.findById(id);

  }
}
