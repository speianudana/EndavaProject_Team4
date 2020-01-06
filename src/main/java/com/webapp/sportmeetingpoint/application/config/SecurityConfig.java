package com.webapp.sportmeetingpoint.application.config;

import com.webapp.sportmeetingpoint.application.security.jwt.JwtSecurityConfigurer;
import com.webapp.sportmeetingpoint.application.security.jwt.JwtTokenProvider;
import com.webapp.sportmeetingpoint.domain.entities.AppUserRoles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
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

import javax.servlet.http.HttpServletResponse;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  private final JwtTokenProvider jwtTokenProvider;

  private static final String AUTH_ENDPOINT = "/api/auth/**";
  private static final String EVENT_ENDPOINT = "/api/event/**";
  private static final String NEWS_ENDPOINT = "/api/news/**";

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
      .csrf()
      .disable()
      .authorizeRequests()
      .antMatchers("/api/for_all/**").permitAll()
      .antMatchers("/api/for_authenticated_user/**").authenticated()
      .antMatchers("/api/for_user/**").hasRole(AppUserRoles.USER.toString())
      .antMatchers("/api/for_moderator/**").hasRole(AppUserRoles.MODERATOR.toString())
      .antMatchers("/api/for_admin/**").hasRole(AppUserRoles.ADMIN.toString())
      .antMatchers("/api/for_super_admin/**").hasRole(AppUserRoles.SUPER_ADMIN.toString())

//      .antMatchers(AUTH_ENDPOINT).permitAll()
//      .antMatchers("/api/event/add").hasRole("USER")
//      .antMatchers("/api/event/all_events").permitAll()
//      .antMatchers("/api/event/image_by_id").permitAll()
//      .antMatchers("/api/event//event_by_id").permitAll()
//      .antMatchers("/api/test/q").permitAll()
//
//      .antMatchers("/index.html", "/","/*.js","/*.css", "/*.ico", "/images/**").permitAll()
//      .anyRequest()
//      .authenticated()
      .and()
      .exceptionHandling()
      .authenticationEntryPoint(jwtAuthenticationEntryPoint)
      .and()
      .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
      .and()
      .apply(new JwtSecurityConfigurer(jwtTokenProvider));

//      http.authorizeRequests().antMatchers("/css/**", "/js/**", "/images/**").permitAll();
  }

  @Bean
  public CorsConfigurationSource corsConfigurationSource() {
    final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());

    return source;
  }


}

