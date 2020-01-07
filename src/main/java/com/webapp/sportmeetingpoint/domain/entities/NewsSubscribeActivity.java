package com.webapp.sportmeetingpoint.domain.entities;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity(name="NewsSubscribeActivity")
@Table(name="news_subscribe_activity")
@NoArgsConstructor
@Getter
@Setter
public class NewsSubscribeActivity extends BaseEntity {

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_system_fk_id", nullable = false)
  private UserSystem userSystem;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "news_fk_id", nullable = false)
  private News news;

}
