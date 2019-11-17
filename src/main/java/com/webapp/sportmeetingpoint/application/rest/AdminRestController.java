package com.webapp.sportmeetingpoint.application.rest;


import com.webapp.sportmeetingpoint.application.dto.UserSystemDTO;
import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/v1/admin/")
public class AdminRestController {


  private final UserSystemService userService;

  @Autowired
  public AdminRestController(UserSystemService userService) {
    this.userService = userService;
  }

//  @PreAuthorize("hasRole('ADMIN')")
  @GetMapping(value = "users/{id}")
  public ResponseEntity getUserById(@PathVariable(name = "id") Long id) {
    Map<Object, Object> result = new HashMap<>();
    result.put("a", 0);

    return new ResponseEntity(result, HttpStatus.OK);
  }
}
