package com.webapp.sportmeetingpoint.persistance;

import com.webapp.sportmeetingpoint.domain.entities.EventParticipantActivity;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface EventParticipantActivityRepository extends CrudRepository<EventParticipantActivity, Integer> {

//  @Modifying
//  @Transactional
//  @Query(value = "SELECT * FROM EventParticipantActivity u WHERE u.user_system_fk_id=:id1 " +
//    " AND u.event_fk_id=:id2", nativeQuery = true)
//  Optional<EventParticipantActivity> findByUserIdAndEventId(@Param("id1") Integer userId,
//                                                            @Param("id2") Integer eventId);

//  @Transactional
//  @Query(value = "SELECT * FROM EventParticipantActivity u WHERE u.user_system_fk_id=:id1 " +
//    " AND u.event_fk_id=:id2", nativeQuery = true)
//  EventParticipantActivity findByUserIdAndEventId(@Param("id1")Integer userId,
//                                                            @Param("id2")Integer eventId);

}
