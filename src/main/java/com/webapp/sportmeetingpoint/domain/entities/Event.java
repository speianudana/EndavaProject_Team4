package com.webapp.sportmeetingpoint.domain.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity(name = "Event")
@Table(name = "event")
public class Event extends BaseEntity {

  @NotNull(message = "Title is required!")
  @Column(name = "title", columnDefinition = "varchar(128)", nullable = false)
  private String title;

  @NotNull
  @Column(name = "address", columnDefinition = "varchar(128)", nullable = false)
  private String address;

  @Column(name = "description", columnDefinition = "varchar(1000)", nullable = false)
  private String description;

  @NotNull
  @Column(name = "date")
  private Date date;


  @OneToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_activity_fk_id", nullable = false)
  private UserActivity userActivity;







}
