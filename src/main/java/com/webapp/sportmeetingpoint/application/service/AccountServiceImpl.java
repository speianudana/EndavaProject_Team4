package com.webapp.sportmeetingpoint.application.service;

import com.webapp.sportmeetingpoint.domain.entities.AccountSystem;
import com.webapp.sportmeetingpoint.persistance.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService {

  @Autowired
  AccountRepository accountRepository;

  @Override
  public AccountSystem add(AccountSystem accountSystem){
    return accountRepository.save(accountSystem);
  }

}
