package com.webapp.sportmeetingpoint.application.service;

import com.webapp.sportmeetingpoint.domain.entities.Event;
import com.webapp.sportmeetingpoint.domain.entities.EventParticipantActivity;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;

public interface EventParticipantActivityService {

  EventParticipantActivity subscribeUserToTheCurrentEvent(final UserSystem user, final Event event) throws Exception;

  void unsubscribeUserToTheCurrentEvent(final UserSystem user, final Event event) throws Exception;

}
