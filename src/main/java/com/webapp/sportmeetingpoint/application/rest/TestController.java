package com.webapp.sportmeetingpoint.application.rest;


import com.webapp.sportmeetingpoint.persistance.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RequestMapping(value = "/api/test")
@RestController
public class TestController {

  @Autowired
  EventRepository eventRepository;

  @RequestMapping(value = "/q", method = RequestMethod.GET)
  public void doTest(){

    Byte[] z = eventRepository.findByIdEventImage(1).get();

    char a = 'a';

  }




}

