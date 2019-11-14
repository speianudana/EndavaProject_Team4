package com.webapp.sportmeetingpoint.domain.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity(name = "UserPersonalData")
@Table(name = "user_personal_data")
public class UserPersonalData {

  @Id
  @Column(name = "id", unique = true, nullable = false)
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "first_name", columnDefinition = "varchar(64)", nullable = true)
  private String firstName;

  @Column(name = "last_name", columnDefinition = "varchar(64)", nullable = true)
  private String lastName;

  @Column(name = "telephone_number", columnDefinition = "varchar(64)", nullable = true)
  private String telephoneNumber;

  @Column(name = "birth_date", nullable = true)
  private Date birthDate;


  @OneToOne(fetch = FetchType.LAZY,
          cascade =  CascadeType.ALL,
          mappedBy = "userPersonalData")
  private UserSystemDAO userSystemDAO;

//  @OneToOne(fetch = FetchType.LAZY, optional = false)
//  @JoinColumn(name = "user_id", nullable = false)
//  private UserSystem user;

}
