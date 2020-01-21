package com.webapp.sportmeetingpoint.domain.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "SportCategory")
@Table(name = "sport_category")
@Getter
@Setter
@NoArgsConstructor
public class SportCategory {

  @Id
  @Column(name = "id", unique = true, nullable = false)
  private Integer id;

  @Column(name = "name", columnDefinition = "varchar(32)", nullable = false, unique = true)
  private String name;

//  @ManyToMany(mappedBy = "categories")
//  private List<Event> events ;

//  @OneToMany(
//    mappedBy = "sport_category",
//    cascade = CascadeType.ALL,
//    orphanRemoval = true
//  )
//  private List<Event> events = new ArrayList<>();


//  @OneToMany(fetch = FetchType.LAZY)
//  @JoinTable(name="event_category",
//    joinColumns = @JoinColumn(name="category_id"),
//    inverseJoinColumns = @JoinColumn(name="event_id")
//  )
//  private List<Event> events;

}
