package com.webapp.sportmeetingpoint.persistance;

import com.webapp.sportmeetingpoint.domain.entities.UserRole;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;


public interface UserRoleRepository extends CrudRepository<UserRole, Integer>,
        PagingAndSortingRepository<UserRole, Integer> {


  void deleteAll();
  UserRole save(UserRole u);


//  @Query("SELECT u FROM UserRole u WHERE u.name = :name and u.id > 1")
  List<UserRole>  findAllByName(String name);
}
