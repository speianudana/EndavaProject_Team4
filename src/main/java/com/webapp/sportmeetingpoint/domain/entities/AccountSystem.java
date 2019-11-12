package com.webapp.sportmeetingpoint.domain.entities;

import javax.persistence.*;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity(name = "AccountSystem")
@Table(name = "account_system")
public class AccountSystem {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", unique = true, nullable = false)
  private Long id;

  @Column(name = "email", columnDefinition = "varchar(64)", nullable = false)
  private String email;

  @Column(name = "password", columnDefinition = "varchar(64)", nullable = false)
  private String password;

  @Column(name = "is_activated", columnDefinition = "boolean default false")
  private boolean is_activated;


}
