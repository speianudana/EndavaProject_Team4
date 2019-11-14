package com.webapp.sportmeetingpoint.persistance;

import com.webapp.sportmeetingpoint.domain.entities.UserSystemDAO;
import org.springframework.data.repository.CrudRepository;

public interface UserSystemRepository extends CrudRepository<UserSystemDAO, Long> {

  UserSystemDAO save(UserSystemDAO u);

}
