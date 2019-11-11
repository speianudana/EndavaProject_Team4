package com.webapp.sportmeetingpoint.rest_controller;


import com.webapp.sportmeetingpoint.dto.Account;
import com.webapp.sportmeetingpoint.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
public class AccountController {

  @Autowired
  private AccountService accountService;


  @RequestMapping("/register")
  @PostMapping(consumes = "application/json", produces = "application/json")
  public Account addAccount(@RequestBody Account account){

    return accountService.createAccount(account);
  }

}
