package com.webapp.sportmeetingpoint.persistance;

import com.webapp.sportmeetingpoint.domain.entities.AccountSystem;
import org.springframework.data.repository.CrudRepository;

public interface AccountRepository extends CrudRepository<AccountSystem, Long> {


}
