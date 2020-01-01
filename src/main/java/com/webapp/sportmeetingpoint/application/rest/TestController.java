package com.webapp.sportmeetingpoint.application.rest;


import com.webapp.sportmeetingpoint.application.service.EventParticipantActivityService;
import com.webapp.sportmeetingpoint.domain.entities.Event;
import com.webapp.sportmeetingpoint.domain.entities.EventParticipantActivity;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import com.webapp.sportmeetingpoint.persistance.EventRepository;
import com.webapp.sportmeetingpoint.persistance.EventParticipantActivityRepository;
import com.webapp.sportmeetingpoint.persistance.UserSystemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RequestMapping(value = "/api/test")
@RestController
public class TestController {

  private final UserSystemRepository userSystemRepository;
  private final EventRepository eventRepository;
  private final EventParticipantActivityService eventParticipantActivityService;

  @Autowired
  private EventParticipantActivityRepository eventParticipantActivityRepository;

  public TestController(UserSystemRepository userSystemRepository, EventRepository eventRepository, EventParticipantActivityService eventParticipantActivityService) {
    this.userSystemRepository = userSystemRepository;
    this.eventRepository = eventRepository;
    this.eventParticipantActivityService = eventParticipantActivityService;
  }

  @RequestMapping(value = "/q", method = RequestMethod.GET)
  public void doTest(@RequestParam("i1") Integer uId, @RequestParam("i2") Integer eId,
                     @RequestParam("subscribe") Integer subscribe) throws Exception {

//    Byte[] z = eventRepository.findByIdEventImage(1).get();

    UserSystem u = userSystemRepository.findById(uId).orElse(null);
    Event e = eventRepository.findById(eId).orElse(null);

    if (subscribe == 1)
      eventParticipantActivityService.subscribeUserToTheCurrentEvent(u, e);
    else
      eventParticipantActivityService.unsubscribeUserToTheCurrentEvent(u, e);
//
//    EventParticipantActivity ep = eventParticipantActivityService.subscribeUserToTheCurrentEvent(u, e);

    char a = 'a';

  }


}

