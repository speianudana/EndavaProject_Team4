package com.webapp.sportmeetingpoint.dto;


import lombok.*;

import javax.persistence.*;


@Entity
@Table(name = "article")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Article {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", unique = true, nullable = false)
  private Long id;

  @Column(name = "title", columnDefinition = "varchar(128)")
  private String title;

  @Column(name = "text", columnDefinition = "varchar(1024)")
  private String text;

}
