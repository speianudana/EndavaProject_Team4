package com.webapp.sportmeetingpoint;


import com.webapp.sportmeetingpoint.domain.entities.AppSportCategories;
import com.webapp.sportmeetingpoint.domain.entities.AppUserRoles;
import com.webapp.sportmeetingpoint.domain.entities.SportCategory;
import com.webapp.sportmeetingpoint.domain.entities.UserRole;
import com.webapp.sportmeetingpoint.persistance.SportCategoryRepository;
import com.webapp.sportmeetingpoint.persistance.UserRoleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Slf4j
public class DataInitializer implements CommandLineRunner {
  private final UserRoleRepository userRoleRepository;
  private final SportCategoryRepository sportCategoryRepository;

  @Autowired
  public DataInitializer(UserRoleRepository userRoleRepository, SportCategoryRepository sportCategoryRepository) {
    this.userRoleRepository = userRoleRepository;
    this.sportCategoryRepository = sportCategoryRepository;
  }

  private void sportCategoriesLoadToDatabase(){
    List<SportCategory> allCategories = sportCategoryRepository.findAll();

    for(AppSportCategories category : AppSportCategories.values()){
      if(
        allCategories
          .stream()
          .filter(a->a.getName().equals(category.name()) && a.getId()==category.ordinal())
          .findFirst().orElse(null)==null
      )
      {
        SportCategory sportCategory = new SportCategory();
        sportCategory.setName(category.name());
        sportCategory.setId(category.ordinal());
        sportCategoryRepository.save(sportCategory);
        log.debug("Sport category {} not found in database... set it", category.name());

      }
    }
  }

  private void userRolesLoadToDatabase(){
    for (AppUserRoles role : AppUserRoles.values()) {

      List<UserRole> userRoles = userRoleRepository.findAllByName(role.toString());
      if (userRoles.isEmpty()) {
        userRoleRepository.save(new UserRole(role.ordinal(), role.toString(), null));
      } else {
        log.debug("user role name {}", userRoles.get(0).getName());
      }
    }
  }

  @Override
  public void run(String... args) throws Exception {
    sportCategoriesLoadToDatabase();
    userRolesLoadToDatabase();

  }
}
