package com.webapp.sportmeetingpoint.domain.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity(name="EventParticipantActivity")
@Table(name="event_participant_activity")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventParticipantActivity extends BaseEntity {

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_system_fk_id", nullable = false)
  private UserSystem userSystem;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "event_fk_id", nullable = false)
  private Event event;

}
