package com.webapp.sportmeetingpoint.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity(name="Account")
@Table(name = "account")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Account {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", unique = true, nullable = false)
  private Long id;

  @Column(name = "firstname", columnDefinition = "varchar(64)")
  private String firstname;

  @Column(name = "lastname", columnDefinition = "varchar(64)")
  private String lastname;

//  @OneToOne(mappedBy = "article")
//  private Article article;


}
