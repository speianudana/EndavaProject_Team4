package com.webapp.sportmeetingpoint;


import com.webapp.sportmeetingpoint.domain.entities.AppUserRoles;
import com.webapp.sportmeetingpoint.domain.entities.UserRole;
import com.webapp.sportmeetingpoint.persistance.UserRoleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Slf4j
public class DataInitializer implements CommandLineRunner {

  @Autowired
  UserRoleRepository userRoleRepository;


  @Override
  public void run(String... args) throws Exception {

    for (AppUserRoles role : AppUserRoles.values()) {

      List<UserRole> userRoles = userRoleRepository.findAllByName(role.toString());
      if (userRoles.isEmpty()) {
        userRoleRepository.save(new UserRole(role.ordinal(), role.toString(), null));
      } else {
        log.debug("user role name {}", userRoles.get(0).getName());
      }
    }

  }
}
