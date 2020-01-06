package com.webapp.sportmeetingpoint.domain.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity(name = "News")
@Table(name = "news")
public class News extends BaseEntity {


  @NotNull(message="Title is required!")
  @Column(name = "title", columnDefinition = "varchar(64)", nullable = false)
  private String title;

  @Column(name = "context", columnDefinition = "varchar(1000)", nullable = false)
  private String context;

  @Lob
  @Column(name = "image",  nullable = true)
  private Byte[] image;

  @Column(name = "date")
  private Date date;


  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_author_activity_fk_id", nullable = true)
  private UserAuthorActivity userAuthorActivity;


}
