package com.webapp.sportmeetingpoint.domain.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity(name = "UserPersonalData")
@Table(name = "user_personal_data")
public class UserPersonalData extends BaseEntity {


  @Column(name = "first_name", columnDefinition = "varchar(64)", nullable = true)
  private String firstName;

  @Column(name = "last_name", columnDefinition = "varchar(64)", nullable = true)
  private String lastName;

  @Column(name = "telephone_number", columnDefinition = "varchar(64)", nullable = true)
  private String telephoneNumber;

  @Column(name = "birth_date", nullable = true)
  private Date birthDate;


  @OneToOne(fetch = FetchType.EAGER,
          mappedBy = "userPersonalData")
  private UserSystem userSystem;

//  @OneToOne(fetch = FetchType.LAZY, optional = false)
//  @JoinColumn(name = "user_id", nullable = false)
//  private UserSystem user;

}
