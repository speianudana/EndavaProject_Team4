package com.webapp.sportmeetingpoint.domain.entities;


import lombok.*;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity(name = "EventImage")
@Table(name = "event_image")
public class EventImage extends BaseEntity {

  @Lob
  @Column(name = "image",  nullable = false)
  private Byte[] image;

}
