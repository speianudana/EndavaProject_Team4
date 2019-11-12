package com.webapp.sportmeetingpoint.domain.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name="AccountRole")
@Table(name = "account_role")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AccountRole {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", unique = true, nullable = false)
  private Integer id;

  @Column(name = "name", columnDefinition = "varchar(64)", nullable = false)
  private String name;


  @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
  @JoinColumn(name = "role_id")
  private List<AccountSystem> comments = new ArrayList<>();

}

