package com.webapp.sportmeetingpoint.application.security.jwt;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;

public class JwtUser implements UserDetails {

  private  Long id;
  private  String username;
  private  String firstName;
  private  String lastName;
  private  String password;
  private  String email;
  private  boolean enabled;
  private  Date lastPasswordResetDate;
  private   Collection<? extends GrantedAuthority> authorities;

  public JwtUser(Long id, String userName, String firstName, String lastName, String password, String email, Boolean enabled, Date lastPasswordResetDate, Collection<? extends GrantedAuthority> authorities) {
    this.id = id;
    this.username = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
    this.enabled = enabled;
    this.lastPasswordResetDate = lastPasswordResetDate;
    this.authorities = authorities;
  }


  @JsonIgnore
  public Long getId() {
    return id;
  }

  @Override
  public String getUsername() {
    return username;
  }

  @JsonIgnore
  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @JsonIgnore
  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @JsonIgnore
  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  public String getFirstname() {
    return firstName;
  }

  public String getLastname() {
    return lastName;
  }

  public String getEmail() {
    return email;
  }

  @JsonIgnore
  @Override
  public String getPassword() {
    return password;
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return authorities;
  }

  @Override
  public boolean isEnabled() {
    return enabled;
  }

  @JsonIgnore
  public Date getLastPasswordResetDate() {
    return lastPasswordResetDate;
  }
}
