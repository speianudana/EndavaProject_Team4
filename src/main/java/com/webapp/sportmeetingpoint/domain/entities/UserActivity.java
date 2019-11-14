package com.webapp.sportmeetingpoint.domain.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity(name = "UserActivity")
@Table(name = "user_activity")
public class UserActivity {

  @Id
  @Column(name = "id", unique = true, nullable = false)
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @OneToOne(fetch = FetchType.EAGER,
          mappedBy = "userActivity")
  private UserSystem userSystem;

  @OneToMany(
          mappedBy = "userActivity"
  )
  private List<News> news = new ArrayList<>();

  @OneToMany(
          mappedBy = "userActivity"
  )
  private List<Event> events = new ArrayList<>();


}
