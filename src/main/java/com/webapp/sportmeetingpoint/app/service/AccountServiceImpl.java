package com.webapp.sportmeetingpoint.app.service;

import com.webapp.sportmeetingpoint.app.dto.Account;
import com.webapp.sportmeetingpoint.app.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class AccountServiceImpl implements AccountService {

  @Autowired
  private AccountRepository accountRepository;


  @Override
  public Account createAccount(Account account) {
    return accountRepository.save(account);
  }

  @Override
  public Account findById(Long id) {
    Optional<Account> result = accountRepository.findById(id);

    return result.get();
  }
}
