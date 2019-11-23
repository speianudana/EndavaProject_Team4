package com.webapp.sportmeetingpoint.domain.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity(name = "UserActivity")
@Table(name = "user_activity")
public class UserActivity extends BaseEntity {


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
