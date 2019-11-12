package com.webapp.sportmeetingpoint;


import com.webapp.sportmeetingpoint.domain.entities.AppUserRoles;
import com.webapp.sportmeetingpoint.domain.entities.UserRole;
import com.webapp.sportmeetingpoint.persistance.UserRoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class SportMeetingPointApplication {

	public static void main(String[] args) {
		SpringApplication.run(SportMeetingPointApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(UserRoleRepository userRoleRepository) {
		return (args) -> {

			userRoleRepository.deleteAll();

			for	(AppUserRoles role : AppUserRoles.values()){
				userRoleRepository.save(new UserRole(role.ordinal(), role.toString(), null));
			}



		};
	}

}
