package com.webapp.sportmeetingpoint.domain.entities;


import lombok.Data;

import javax.persistence.*;

@MappedSuperclass
@Data
public class BaseEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name="id", unique = true, nullable = false)
  private Integer id;


}
