package com.webapp.sportmeetingpoint.application.service;

import com.webapp.sportmeetingpoint.domain.entities.Event;
import com.webapp.sportmeetingpoint.domain.entities.EventParticipantActivity;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import com.webapp.sportmeetingpoint.persistance.EventRepository;
import com.webapp.sportmeetingpoint.persistance.EventParticipantActivityRepository;
import com.webapp.sportmeetingpoint.persistance.UserSystemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventParticipantActivityServiceImpl implements EventParticipantActivityService {

  final UserSystemRepository userSystemRepository;
  final EventRepository eventRepository;
  final EventParticipantActivityRepository eventParticipantActivityRepository;

  @Autowired
  public EventParticipantActivityServiceImpl(UserSystemRepository userSystemRepository, EventRepository eventRepository,
                                             EventParticipantActivityRepository eventParticipantActivityRepository) {

    this.userSystemRepository = userSystemRepository;
    this.eventRepository = eventRepository;
    this.eventParticipantActivityRepository = eventParticipantActivityRepository;
  }


  private EventParticipantActivity findTheSameIdByTwoLists(final List<EventParticipantActivity> arr1,
                                                  final List<EventParticipantActivity> arr2){

    for (int i = 0; i < arr1.size(); i++) {
      for (int j = 0; j < arr2.size(); j++) {
        if (arr1.get(i).getId()==arr2.get(j).getId()) return arr1.get(i);
      }
    }

    return null;
  }

  @Override
  public EventParticipantActivity subscribeUserToTheCurrentEvent(final UserSystem user, final Event event) throws Exception {
    if (user == null || event == null) throw new Exception("User and Event can not be NULL");

    List<EventParticipantActivity> forEvent = event.getParticipantActivity();
    List<EventParticipantActivity> forUser = user.getParticipantActivity();

    EventParticipantActivity commonEventParticipantActivity = findTheSameIdByTwoLists(forEvent, forUser);

    if(commonEventParticipantActivity!=null) throw new Exception("This user is already subscribed to this event");

    EventParticipantActivity newEventParticipantActivity = new EventParticipantActivity();
    newEventParticipantActivity.setEvent(event);
    newEventParticipantActivity.setUserSystem(user);

    newEventParticipantActivity = eventParticipantActivityRepository.save(newEventParticipantActivity);

    return newEventParticipantActivity;

  }

  @Override
  public void unsubscribeUserToTheCurrentEvent(UserSystem user, Event event) throws Exception {

    if (user == null || event == null) throw new Exception("User and Event can not be NULL");

    List<EventParticipantActivity> forEvent = event.getParticipantActivity();
    List<EventParticipantActivity> forUser = user.getParticipantActivity();

    EventParticipantActivity commonEventParticipantActivity = findTheSameIdByTwoLists(forEvent, forUser);

    if(commonEventParticipantActivity==null) throw new Exception("This relationship between " +
      "the user and the event does not exist");

    eventParticipantActivityRepository.delete(commonEventParticipantActivity);

    char a='a';

  }
}
