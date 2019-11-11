package com.webapp.sportmeetingpoint.app.rest_controller;


import com.webapp.sportmeetingpoint.app.service.AccountService;
import com.webapp.sportmeetingpoint.app.dto.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
public class AccountController {

  @Autowired
  private AccountService accountService;


  @RequestMapping("/register")
  @CrossOrigin(origins = "*", allowedHeaders = "*")//annotation for frontend server request
  @PostMapping(consumes = "application/json", produces = "application/json")
  public Account addAccount(@RequestBody Account account){

    return accountService.createAccount(account);
  }

}
