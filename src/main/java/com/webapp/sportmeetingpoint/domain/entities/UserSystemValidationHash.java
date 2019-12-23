package com.webapp.sportmeetingpoint.domain.entities;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = false)
@Entity(name="UserSystemValidationHash")
@Table(name = "user_system_validation_hash")
@Data
@NoArgsConstructor
public class UserSystemValidationHash extends BaseEntity {


  @Column(name = "_hash", columnDefinition = "varchar(128)", nullable = false)
  private String hash;


  @OneToOne(fetch = FetchType.EAGER,
    mappedBy = "userSystemValidationHash")
  private UserSystem userSystem;

}
