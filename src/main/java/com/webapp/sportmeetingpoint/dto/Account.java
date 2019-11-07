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

  @Column(name = "email", columnDefinition = "varchar(64)", nullable = false)
  private String email;

  @Column(name = "password", columnDefinition = "varchar(64)", nullable = false)
  private String password;

  @Column(name = "first_name", columnDefinition = "varchar(64)")
  private String firstName;

  @Column(name = "last_name", columnDefinition = "varchar(64)")
  private String lastName;


}
