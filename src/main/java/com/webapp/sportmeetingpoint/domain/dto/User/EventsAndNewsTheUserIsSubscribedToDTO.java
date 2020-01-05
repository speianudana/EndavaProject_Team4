package com.webapp.sportmeetingpoint.domain.dto.User;

import com.webapp.sportmeetingpoint.domain.dto.Event.EventDTO;
import com.webapp.sportmeetingpoint.domain.dto.NewsDTO;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class EventsAndNewsTheUserIsSubscribedToDTO {

  private List<EventDTO> events;

  private List<NewsDTO> news;

}
