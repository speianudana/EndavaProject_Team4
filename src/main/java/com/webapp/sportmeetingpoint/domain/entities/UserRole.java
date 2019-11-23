package com.webapp.sportmeetingpoint.domain.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name="UserRole")
@Table(name = "user_role")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRole  {


  @Id
  @Column(name = "id", unique = true, nullable = false)
//  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @Column(name = "name", columnDefinition = "varchar(32)", nullable = false)
  private String name;

  @OneToMany(
          mappedBy = "userRole"
  )
  private List<UserSystem> usersSystem = new ArrayList<>();



}
