package com.webapp.sportmeetingpoint.service;

import com.webapp.sportmeetingpoint.dto.Account;
import com.webapp.sportmeetingpoint.repository.AccountRepository;
import com.webapp.sportmeetingpoint.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AccountServiceImpl implements AccountService {

  @Autowired
  private AccountRepository accountRepository;


  @Override
  public Account createAccount(Account account) {
    return accountRepository.save(account);
  }
}
