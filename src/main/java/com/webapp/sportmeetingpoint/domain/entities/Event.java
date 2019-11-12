package com.webapp.sportmeetingpoint.domain.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity(name = "Event")
@Table(name = "event")
public class Event {

  @Id
  @Column(name = "id", unique = true, nullable = false)
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "title", columnDefinition = "varchar(128)", nullable = false)
  private String title;

  @Column(name = "address", columnDefinition = "varchar(128)", nullable = false)
  private String address;

  @Column(name = "description", columnDefinition = "varchar(1000)", nullable = false)
  private String description;

  @Column(name = "date")
  private Date date;


  @OneToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "user_activity_fk_id", nullable = false)
  private UserActivity userActivity;







}
