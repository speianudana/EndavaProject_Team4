package com.webapp.sportmeetingpoint.domain.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@EqualsAndHashCode(callSuper = false)
@Entity(name="UserSystem")
@Table(name = "user_system")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserSystem extends BaseEntity {

  @Column(name = "email", columnDefinition = "varchar(64)", nullable = false)
  private String email;

  @Column(name = "password", columnDefinition = "varchar(64)", nullable = false)
  private String password;

  @Column(name = "is_activated", columnDefinition = "boolean", nullable = false)
  private Boolean isActivated;

  @Column(name = "updated_date")
  private Date updatedDate;//data inregistrarii  -  data resetarii passwordului sau a emailui

  @OneToOne(fetch = FetchType.EAGER, optional = false)
  @JoinColumn(name = "user_personal_data_fk_id", nullable = false)
  private UserPersonalData userPersonalData;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_role_fk_id")
  private UserRole userRole;

  @OneToOne(fetch = FetchType.EAGER, optional = false)
  @JoinColumn(name = "user_author_activity_fk_id", nullable = false)
  private UserAuthorActivity userAuthorActivity;

  @OneToOne(fetch = FetchType.EAGER, optional = false)
  @JoinColumn(name="user_system_validation_hash_fk_id", nullable = false)
  private UserSystemValidationHash userSystemValidationHash;

  @OneToMany(mappedBy = "userSystem")
  private List<EventParticipantActivity> participantActivity = new ArrayList<>();

  @OneToMany(mappedBy = "userSystem")
  private List<NewsSubscribeActivity> newsSubscribeActivity = new ArrayList<>();

}
