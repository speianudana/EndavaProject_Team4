package com.webapp.sportmeetingpoint.persistance;

import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import org.springframework.data.repository.CrudRepository;

public interface UserSystemRepository extends CrudRepository<UserSystem, Long> {

  UserSystem save(UserSystem u);

}
