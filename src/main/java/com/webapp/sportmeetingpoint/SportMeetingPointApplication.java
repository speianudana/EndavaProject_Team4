package com.webapp.sportmeetingpoint;


import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.entities.AppUserRoles;
import com.webapp.sportmeetingpoint.domain.entities.UserRole;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import com.webapp.sportmeetingpoint.persistance.UserRoleRepository;
import com.webapp.sportmeetingpoint.persistance.UserSystemRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.List;

import java.util.List;

@Slf4j
@SpringBootApplication
public class SportMeetingPointApplication {

    public static void main(String[] args) {
        SpringApplication.run(SportMeetingPointApplication.class, args);
    }

    @Bean
    public CommandLineRunner demo(UserSystemRepository userSystemRepository, UserRoleRepository userRoleRepository,
                                  UserSystemService userSystemService) {
        return (args) -> {


            for (AppUserRoles role : AppUserRoles.values()) {

                List<UserRole> userRoles = userRoleRepository.findAllByName(role.toString());
                if (userRoles.isEmpty()) {
                    userRoleRepository.save(new UserRole(role.ordinal(), role.toString(), null));
                } else {
                    log.info("user role name {}", userRoles.get(0).getName());
                }
            }


//            userRoleRepository.findAll(Sort.by("name")).forEach(it -> log.info("sorted {}", it.getName()));
//            userRoleRepository.findAll(PageRequest.of(0, 2)).forEach(it -> log.info("page 0 {}", it.getName()));
//            userRoleRepository.findAll(PageRequest.of(1, 2)).forEach(it -> log.info("page 1 {}", it.getName()));
//
//            UserSystem u = userSystemRepository.findByEmail("qer").get();
//            UserRole r = userRoleRepository.findByName("ADMIN").get();

            UserSystem u = new UserSystem();
            u.setPassword("qwerty");
            u.setEmail("juju@mail.ru");

            userSystemService.register(u);

            char c = 'z';
        };
    }

}
