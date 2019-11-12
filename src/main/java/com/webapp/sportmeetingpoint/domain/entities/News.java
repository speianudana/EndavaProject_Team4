package com.webapp.sportmeetingpoint.domain.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
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
  private Long id;

  @Column(name = "title", columnDefinition = "varchar(64)", nullable = false)
  private String title;

  @Column(name = "context", columnDefinition = "varchar(640)", nullable = false)
  private String context;

  @Column(name = "date")
  private Date date;



}
