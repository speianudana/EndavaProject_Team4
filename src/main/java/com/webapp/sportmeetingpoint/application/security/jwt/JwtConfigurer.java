package com.webapp.sportmeetingpoint.application.security.jwt;

import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

public class JwtConfigurer extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {

  private JwtTokenProvider jwtTokenProvider;
  private UserDetailsService userDetailsService;

  public JwtConfigurer(JwtTokenProvider jwtTokenProvider, UserDetailsService userDetailsService) {
    this.jwtTokenProvider = jwtTokenProvider;
    this.userDetailsService = userDetailsService;
  }


  @Override
  public void configure (HttpSecurity httpSecurity) throws Exception{
//    JwtTokenFilter jwtTokenFilter = new JwtTokenFilter(jwtTokenProvider);
//    httpSecurity.addFilterBefore(jwtTokenFilter, UsernamePasswordAuthenticationFilter.class);
    JwtAuthenticationFilter jwtAuthenticationFilter =
            new JwtAuthenticationFilter(jwtTokenProvider, userDetailsService);
    httpSecurity.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
  }





}
