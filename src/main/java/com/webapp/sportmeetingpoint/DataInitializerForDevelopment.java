package com.webapp.sportmeetingpoint;


import com.webapp.sportmeetingpoint.persistance.EventRepository;
import com.webapp.sportmeetingpoint.persistance.UserAuthorActivityRepository;
import com.webapp.sportmeetingpoint.persistance.UserSystemRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class DataInitializerForDevelopment implements CommandLineRunner {


  @Autowired
  EventRepository eventRepository;

  @Autowired
  UserAuthorActivityRepository userAuthorActivityRepository;

  @Autowired
  UserSystemRepository userSystemRepository;

  @Override
  public void run(String... args) throws Exception {

//    UserSystem u = userSystemRepository.findById(1);
//
//    Event event = new Event();
//    event.setTitle("Title 31984");
//    event.setPreviewMessage("Prev. msg");
//    event.setDescription("Descr. dkslfjkjlkdsjk fjsdk fjsdl");
//    event.setDate(new Date());
//    event.setAddress("adfdaf");
//    event.setUserActivity(u.getUserActivity());
//
//    Event t = eventRepository.save(event);
  
//    log.debug("checkpoin");
//    MailUtil.sendMail("ipostu20000127@gmail.com");
    char c = 'a';

//    if(userSystemService.findByEmail("email")==null){
//
//      Date now = new Date();
//      String password = "abc";
//      UserSystem userSystem = new UserSystem();
//      UserPersonalData personalData = new UserPersonalData();
//
//      personalData.setFirstName("jonny");
//      personalData.setLastName("krab");
//      personalData.setTelephoneNumber(null);
//      personalData.setBirthDate(null);
//
//      userSystem.setPassword(password);
//      userSystem.setEmail("email");
//      userSystem.setUpdatedDate(now);
//      userSystem.setIsActivated(true);
//
//      UserSystem result = userSystemService.register(userSystem, personalData, null, AppUserRoles.USER.toString());
//
//
//    }


  }
}
