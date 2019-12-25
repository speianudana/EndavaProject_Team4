package com.webapp.sportmeetingpoint.application.rest;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RequestMapping(value = "/api/test")
@RestController
public class TestController {


  @RequestMapping(value = "/q", method = RequestMethod.GET)
  public void doTest(){


    char a = 'a';

  }




}

