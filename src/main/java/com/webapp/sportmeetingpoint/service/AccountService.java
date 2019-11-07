package com.webapp.sportmeetingpoint.service;

import com.webapp.sportmeetingpoint.dto.Account;

public interface AccountService {
  Account createAccount(Account account);
  Account findById(Long id);

}
