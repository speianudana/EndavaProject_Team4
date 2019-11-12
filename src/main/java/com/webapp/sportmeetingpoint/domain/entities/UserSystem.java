package com.webapp.sportmeetingpoint.domain.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity(name="UserSystem")
@Table(name = "user_system")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserSystem {

  @Id
  @Column(name = "id", unique = true, nullable = false)
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "email", columnDefinition = "varchar(64)", nullable = false)

  private String email;

  @Column(name = "password", columnDefinition = "varchar(64)", nullable = false)
  private String password;

  @Column(name = "is_activated", columnDefinition = "boolean", nullable = false)
  private String isActivated;

  //for data
  @OneToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "user_personal_data_fk_id", nullable = false)
  private UserPersonalData userPersonalData;


  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_role_fk_id")
  private UserRole userRole;

}
