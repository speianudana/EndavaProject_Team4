package com.webapp.sportmeetingpoint.application.security;

import com.webapp.sportmeetingpoint.application.security.jwt.JwtUser;
import com.webapp.sportmeetingpoint.application.security.jwt.JwtUserFactory;
import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class JwtUserDetailsService implements UserDetailsService {

  private final UserSystemService userSystemService;

  @Autowired
  public JwtUserDetailsService(UserSystemService userSystemService) {
    this.userSystemService = userSystemService;
  }


  @Override
  public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
    UserSystem userSystem = userSystemService.findByEmail(s);

    if(s == null){
      throw new UsernameNotFoundException("User with email: "+ s + "not found!");
    }

    JwtUser jwtUser = JwtUserFactory.create(userSystem);

    return jwtUser;
  }



}