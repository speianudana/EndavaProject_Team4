package com.webapp.sportmeetingpoint.persistance;

import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface UserSystemRepository extends CrudRepository<UserSystem, Long>, JpaRepository<UserSystem, Long> {


  @Query("SELECT u FROM UserSystem u WHERE u.email = :email1")
  Optional<UserSystem> findByEmail(@Param("email1") final String email);

  @Query("SELECT u FROM UserSystem u WHERE u.password = :password1")
  Optional<UserSystem> findByPassword(@Param("password1") final String password);

  List<UserSystem> findAll();

  UserSystem findById(Integer id);


  @Transactional
  void deleteById(Integer id);



  @Modifying
  @Transactional
  @Query(value = "UPDATE user_system SET is_activated=:activated1 WHERE id=:id1", nativeQuery = true)
  void updateSetSystemUserActivatedValue(@Param("activated1") boolean isActivated,
    @Param("id1") final Integer Id);




}
