package com.webapp.sportmeetingpoint.persistance;

import com.webapp.sportmeetingpoint.domain.entities.UserRole;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;


public interface UserRoleRepository extends CrudRepository<UserRole, Integer>,
        PagingAndSortingRepository<UserRole, Integer> {


  void deleteAll();
  UserRole save(UserRole u);

  @Query("SELECT r FROM UserRole r WHERE r.name = :name1")
  Optional<UserRole > findByName(@Param("name1") final String name);



//  @Query("SELECT u FROM UserRole u WHERE u.name = :name and u.id > 1")
  List<UserRole>  findAllByName(String name);
}
