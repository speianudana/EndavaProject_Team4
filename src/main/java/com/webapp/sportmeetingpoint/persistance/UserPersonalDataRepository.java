package com.webapp.sportmeetingpoint.persistance;

import com.webapp.sportmeetingpoint.domain.entities.UserPersonalData;
import org.springframework.data.repository.CrudRepository;

public interface UserPersonalDataRepository extends CrudRepository<UserPersonalData, Integer> {

  UserPersonalData save(UserPersonalData personalData);

}
