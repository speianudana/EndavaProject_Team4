package com.webapp.sportmeetingpoint.application.config;

import com.webapp.sportmeetingpoint.application.security.jwt.JwtSecurityConfigurer;
import com.webapp.sportmeetingpoint.application.security.jwt.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  private final JwtTokenProvider jwtTokenProvider;

  private static final String AUTH_ENDPOINT = "/api/auth/**";
  private static final String EVENT_ENDPOINT = "/api/event/**";
  
  private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
  
  @Autowired
  public SecurityConfig(JwtTokenProvider jwtTokenProvider, JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint) {
    this.jwtTokenProvider = jwtTokenProvider;
    this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
  }

  @Bean
  @Override
  public AuthenticationManager authenticationManagerBean() throws Exception {
    return super.authenticationManagerBean();
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
            .cors()
            .and()
            .csrf().disable()
            .authorizeRequests()
            .antMatchers(AUTH_ENDPOINT).permitAll()
//            .antMatchers("/api/user_personal_data/get_data").permitAll()
            .antMatchers("/api/event/add").hasRole("USER")
            .antMatchers("/api/event/all_events").permitAll()
            .anyRequest().authenticated()
            .and()
            .exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint).and().sessionManagement()
            .and()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//            .antMatchers("/api/**").permitAll()
            .and()
            .apply(new JwtSecurityConfigurer(jwtTokenProvider));
  }
  
  @Bean
  public CorsConfigurationSource corsConfigurationSource() {
    final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
    
    return source;
  }
  
  
}

