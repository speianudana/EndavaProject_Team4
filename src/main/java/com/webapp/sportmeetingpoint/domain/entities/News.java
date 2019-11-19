package com.webapp.sportmeetingpoint.domain.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity(name = "News")
@Table(name = "news")
public class News {

  @Id
  @Column(name = "id", unique = true, nullable = false)
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @NotNull
  private Long id;

  @NotNull(message="Title is required!")
  @Column(name = "title", columnDefinition = "varchar(64)", nullable = false)
  private String title;

  @Column(name = "context", columnDefinition = "varchar(1000)", nullable = false)
  private String context;

  @Column(name = "date")
  private Date date;


  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_activity_fk_id", nullable = true)
  private UserActivity userActivity;


}
