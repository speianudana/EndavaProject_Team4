package com.webapp.sportmeetingpoint.application.rest;

import com.webapp.sportmeetingpoint.application.dto.AuthenticationRequestDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/test")
public class TestController {


  @PostMapping("/user")
  public ResponseEntity user(@RequestBody AuthenticationRequestDTO requestDTO){
    return ResponseEntity.ok("message for users");
  }

  @PostMapping("/admin")
  public ResponseEntity admin(@RequestBody AuthenticationRequestDTO requestDTO){
    return ResponseEntity.ok("message for admin");
  }



}
