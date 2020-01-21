package com.webapp.sportmeetingpoint.domain.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity(name = "News")
@Table(name = "news")
public class News extends BaseEntity {


  @NotNull(message="Title is required!")
  @Column(name = "title", columnDefinition = "varchar(64)", nullable = false)
  private String title;

  @Column(name = "context", columnDefinition = "varchar(1000)", nullable = false)
  private String context;

  @Column(name="news_image_id")
  private Integer newsImageId;

//  @Column(name = "date")
//  private Date date;


  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_author_activity_fk_id", nullable = true)
  private UserAuthorActivity userAuthorActivity;

  @OneToMany(mappedBy = "news")
  private List<NewsSubscribeActivity> newsSubscribeActivity = new ArrayList<>();

  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "category_id", nullable = false)
  @OnDelete(action = OnDeleteAction.CASCADE)
  @JsonIgnore
  private SportCategory sportCategory;

}
