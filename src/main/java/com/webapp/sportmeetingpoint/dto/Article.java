package com.webapp.sportmeetingpoint.dto;


import lombok.*;

import javax.persistence.*;


@Entity(name="Article")
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

  //Author of article
  @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  @JoinColumn(name = "author_account_id", referencedColumnName = "id")
  private Account authorAccount;


}
