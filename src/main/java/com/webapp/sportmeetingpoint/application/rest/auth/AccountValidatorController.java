package com.webapp.sportmeetingpoint.application.rest.auth;


import com.webapp.sportmeetingpoint.util.RandomString;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.SecureRandom;


@RestController
@RequestMapping(value = "/api/auth")
public class AccountValidatorController {

//  @Value("${jwt.token.secret}")
//  private String secret;

  @RequestMapping(value = "/validate", method = RequestMethod.GET)
  public ResponseEntity<?> getAllEventsWithoutImage(@RequestParam(name = "data") final String data) {

    String easy = RandomString.digits + "ACEFGHJKLMNPQRUVWXYabcdefhijkprstuvwx";
    RandomString tickets = new RandomString(23, new SecureRandom(), easy);

    String s = tickets.nextString();

    char a = 'a';

    return new ResponseEntity<>( HttpStatus.OK);
  }


}
