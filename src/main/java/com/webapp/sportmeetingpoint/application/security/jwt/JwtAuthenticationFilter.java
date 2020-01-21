package com.webapp.sportmeetingpoint.application.security.jwt;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.SignatureException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

@Slf4j
public class JwtAuthenticationFilter extends OncePerRequestFilter {


  private JwtTokenProvider jwtTokenProvider;

  public JwtAuthenticationFilter(JwtTokenProvider jwtTokenProvider) {
    this.jwtTokenProvider = jwtTokenProvider;
  }

  @Override
  protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
          throws IOException, ServletException {

    String token = jwtTokenProvider.resolveToken(req);
    
    
    try{
      
      if(token!=null && jwtTokenProvider.validateToken(token)){
        UsernamePasswordAuthenticationToken authentication = null;

        try{
          authentication  = jwtTokenProvider.getAuthentication(token);
        }catch(UsernameNotFoundException e){
          log.error("User not found", e);
        }

    
        if(authentication!=null){
          authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(req));
          SecurityContextHolder.getContext().setAuthentication(authentication);
        }
      }
      
    }catch(JwtAuthenticationException e){
      log.warn(e.getMessage());
    }
    
  

    chain.doFilter(req, res);
  }
}
