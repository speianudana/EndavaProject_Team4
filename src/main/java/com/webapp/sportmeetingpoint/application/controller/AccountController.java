package com.webapp.sportmeetingpoint.application.controller;


import com.webapp.sportmeetingpoint.application.service.AccountService;
//import com.webapp.sportmeetingpoint.domain.entities.AccountRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
public class AccountController {

  @Autowired
  AccountService accountService;

//  @GetMapping("/q ")
//  Iterable<AccountRole> allRoles(){
//    return accountService.allAccountRoles();
//  }
//

//  @Autowired
//  AccountService accountServiceImpl;
//
//  @RequestMapping("/register")
//  @PostMapping(consumes = "application/json", produces = "application/json")
//  @CrossOrigin(origins = "*", allowedHeaders = "*")
//  public List<String> saveAccountSystem(@RequestBody AccountSystem accountSystem){
//    accountServiceImpl.add(accountSystem);
//    ArrayList<String> result = new ArrayList<String>();
//    result.add("Registration success!!!");
//
//    return result;
//  }


}
