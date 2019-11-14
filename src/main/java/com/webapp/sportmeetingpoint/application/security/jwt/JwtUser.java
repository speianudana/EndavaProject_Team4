package com.webapp.sportmeetingpoint.application.security.jwt;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;

public class JwtUser implements UserDetails {

  private final Long id;
  private final String userName;
  private final String firstName;
  private final String lastName;
  private final String password;
  private final String email;
  private final boolean enabled;
  private final Date lastPasswordResetDate;
  private final Collection<? extends GrantedAuthority> authorities;

  public JwtUser(Long id, String userName, String firstName, String lastName, String password, String email, Boolean enabled, Date lastPasswordResetDate, Collection<? extends GrantedAuthority> authorities) {
    this.id = id;
    this.userName = userName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
    this.enabled = enabled;
    this.lastPasswordResetDate = lastPasswordResetDate;
    this.authorities = authorities;
  }

  public Long getId() {
    return id;
  }

  public String getUsername() {
    return userName;
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

  @Override
  public String getPassword() {
    return password;
  }

  public String getEmail() {
    return email;
  }

  public boolean isEnabled() {
    return enabled;
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return authorities;
  }
}
