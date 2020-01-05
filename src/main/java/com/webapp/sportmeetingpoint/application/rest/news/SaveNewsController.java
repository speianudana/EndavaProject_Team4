package com.webapp.sportmeetingpoint.application.rest.news;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.webapp.sportmeetingpoint.application.security.jwt.JwtUser;
import com.webapp.sportmeetingpoint.application.service.NewsService;
import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.dto.News.CreateNewsDTO;
import com.webapp.sportmeetingpoint.domain.dto.ValidationErrorMessagesDTO;
import com.webapp.sportmeetingpoint.domain.entities.News;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import java.io.IOException;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping(value = "/api/for_authenticated_user")
public class SaveNewsController {

  private final UserSystemService userSystemService;
  private final Validator validator;
  private final NewsService newsService;

  @Autowired
  public SaveNewsController(UserSystemService userSystemService, NewsService newsService) {
    this.userSystemService = userSystemService;
    this.validator = Validation.buildDefaultValidatorFactory().usingContext().getValidator();
    this.newsService = newsService;
  }

  @RequestMapping(value = "/save_news", method = RequestMethod.POST,
    consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity saveNews(
    @RequestParam("imageFile") MultipartFile imageFile,
    @RequestParam("jsonData") String jsonData
  ) throws JsonProcessingException {

    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    JwtUser jwtUser = (JwtUser) authentication.getPrincipal();
    UserSystem userSystem = userSystemService.findById(jwtUser.getId());

    CreateNewsDTO createNewsDTO = null;

    if (jsonData != null && !jsonData.isEmpty()) {
      createNewsDTO = new ObjectMapper().readValue(jsonData, CreateNewsDTO.class);
    }

    try {
      Byte[] byteImage = new Byte[imageFile.getBytes().length];

      int i = 0;

      for (byte b : imageFile.getBytes()) {
        byteImage[i++] = b;
      }

      createNewsDTO.setImage(byteImage);

    }
    catch(NullPointerException e){
      log.error("Json parse error", e);
      return ResponseEntity.badRequest().body("JSON parse error");
    }
    catch (IOException e) {
      createNewsDTO.setImage(null);
    }

    Set<ConstraintViolation<CreateNewsDTO>> validates = validator.validate(createNewsDTO);

    if(validates.size()>0){
      List<String> errorMessages = validates.stream().map(ConstraintViolation::getMessageTemplate)
        .collect(Collectors.toList());


      ValidationErrorMessagesDTO result = new ValidationErrorMessagesDTO();
      result.setValidationErrorMessages(errorMessages);

      return ResponseEntity.ok().body(result);
    }

    News news = new News();
    news.setContext(createNewsDTO.getContext());
    news.setTitle(createNewsDTO.getTitle());
    news.setImage(createNewsDTO.getImage());

    newsService.saveNews(news, userSystem);

    return ResponseEntity.ok().body("news has been created");
  }


}
