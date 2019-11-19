package com.webapp.sportmeetingpoint.application.rest;

import com.webapp.sportmeetingpoint.application.dto.AuthenticationRequestDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/test")
public class TestController {


  @GetMapping("/user")
  public ResponseEntity user(){
    return ResponseEntity.ok("secret message for users");
  }

  @GetMapping("/admin")
  public ResponseEntity admin(){
    return ResponseEntity.ok("secret message for admin");
  }



}
