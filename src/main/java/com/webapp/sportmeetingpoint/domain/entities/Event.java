package com.webapp.sportmeetingpoint.domain.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity(name = "Event")
@Table(name = "event")
public class Event extends BaseEntity {


  @NotNull(message = "Title is required!")
  @Column(name = "title", columnDefinition = "varchar(64)", nullable = false)
  private String title;

  @Column(name = "preview_message", columnDefinition = "varchar(200)", nullable = false)
  private String previewMessage;

  @NotNull
  @Column(name = "address", columnDefinition = "varchar(128)", nullable = false)
  private String address;

  @Column(name = "description", columnDefinition = "varchar(1000)", nullable = false)
  private String description;

  @Column(name = "date")
  private Date date;

  @Column(name = "event_image_id")
  private Integer eventImageId;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_author_activity_fk_id", nullable = false)
  private UserAuthorActivity userAuthorActivity;

  @OneToMany(mappedBy = "event")
  private List<EventParticipantActivity> participantActivity = new ArrayList<>();

//  @ManyToMany(fetch=FetchType.LAZY)
//  @JoinTable(name="event_categories",
//    joinColumns = @JoinColumn(name="event_id"),
//    inverseJoinColumns = @JoinColumn(name="category_id")
//  )
//  List<SportCategory> categories;


  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "category_id", nullable = false)
  @OnDelete(action = OnDeleteAction.CASCADE)
  @JsonIgnore
  private SportCategory sportCategory;

}
