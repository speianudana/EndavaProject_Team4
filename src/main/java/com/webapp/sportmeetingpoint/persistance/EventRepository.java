package com.webapp.sportmeetingpoint.persistance;

import com.webapp.sportmeetingpoint.domain.entities.Event;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.constraints.Max;
import java.util.List;
import java.util.Optional;

public interface EventRepository extends CrudRepository<Event, Integer> {


    @Transactional
    Optional<Event> findById(Integer id);

    @Transactional
    @Modifying
    @Query(value = "SELECT \"image\" FROM Event u WHERE u.id=:id1", nativeQuery = true)
    Optional<Byte[]> findByIdEventImage(@Param("id1")Integer id);
    
    
    @Modifying
    @Query(value = "SELECT * FROM Event u", nativeQuery = true)
    @Transactional
    List<Event> findAll();

    @Modifying
    @Query(value = "SELECT * FROM Event u WHERE u.id NOT IN ?1 LIMIT ?2",nativeQuery = true)
    @Transactional
    List<Event> findAllAndExcludeValueByListUseLimit(List<Integer> ids, Integer limit);

    @Modifying
    @Query(value = "SELECT * FROM Event u LIMIT ?1",nativeQuery = true)
    @Transactional
    List<Event> findAllUseLimit(Integer limit);

    @Modifying
    @Transactional
    @Query(value = "SELECT * FROM \"event\" AS e " +
      "INNER JOIN \"event_participant_activity\" AS ac " +
      "ON ac.event_fk_id=e.id " +
      "WHERE ac.user_system_fk_id=?1 ", nativeQuery = true)
    List<Event> eventsForTheSubscriberByUserSystemId(final Integer userId);


}
