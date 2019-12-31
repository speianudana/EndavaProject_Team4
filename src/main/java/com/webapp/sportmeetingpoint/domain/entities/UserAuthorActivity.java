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
@Entity(name = "UserAuthorActivity")
@Table(name = "user_author_activity")
public class UserAuthorActivity extends BaseEntity {


  @OneToOne(fetch = FetchType.EAGER,
          mappedBy = "userAuthorActivity")
  private UserSystem userSystem;

  @OneToMany(
          mappedBy = "userAuthorActivity"
  )
  private List<News> news = new ArrayList<>();

  @OneToMany(
          mappedBy = "userAuthorActivity"
  )
  private List<Event> events = new ArrayList<>();


}
