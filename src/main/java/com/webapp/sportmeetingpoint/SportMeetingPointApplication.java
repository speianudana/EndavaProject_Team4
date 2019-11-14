package com.webapp.sportmeetingpoint;


import com.webapp.sportmeetingpoint.application.security.jwt.JwtUser;
import com.webapp.sportmeetingpoint.application.security.jwt.JwtUserFactory;
import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.entities.AppUserRoles;
import com.webapp.sportmeetingpoint.domain.entities.UserPersonalData;
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

import java.util.Calendar;
import java.util.Date;
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
//
//            ==========================

//            UserSystem u = new UserSystem();
//            u.setPassword("qwerty");
//            u.setEmail("juju@mail.ru");
//            userSystemService.register(u);


//            ==================================


//            List<UserSystem> arr = userSystemRepository.findAll();

//            UserSystem u = userSystemService.findByEmail("qer");


//                UserSystem u = userSystemService.findById(8l);

          Calendar cal = Calendar.getInstance();
          cal.set(Calendar.YEAR, 2000);
          cal.set(Calendar.MONTH, Calendar.JANUARY);
          cal.set(Calendar.DAY_OF_MONTH, 1);


          UserSystem u = new UserSystem();
          UserPersonalData p = new UserPersonalData();

          p.setFirstName("Vania");
          p.setLastName("Qwerty");
          p.setTelephoneNumber("000000000000000");
          p.setBirthDate(cal.getTime());

          cal.set(Calendar.YEAR, 2017);
          cal.set(Calendar.MONTH, Calendar.JANUARY);
          cal.set(Calendar.DAY_OF_MONTH, 1);

          u.setPassword("zqwerty");
          u.setEmail("qjuju@mail.ru");
          u.setUpdatedData(cal.getTime());
          u.setUserPersonalData(p);

          UserSystem u1 = userSystemService.register(u);

          JwtUser ju = JwtUserFactory.create(u1);



          char c = 'z';
        };
    }

}
