package com.webapp.sportmeetingpoint.app.service;

import com.webapp.sportmeetingpoint.app.dto.Account;

public interface AccountService {
  Account createAccount(Account account);
  Account findById(Long id);

}
