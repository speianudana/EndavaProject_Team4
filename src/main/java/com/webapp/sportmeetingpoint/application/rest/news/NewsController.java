package com.webapp.sportmeetingpoint.application.rest.news;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.webapp.sportmeetingpoint.application.security.jwt.JwtUser;
import com.webapp.sportmeetingpoint.application.service.NewsService;
import com.webapp.sportmeetingpoint.application.service.UserSystemService;
import com.webapp.sportmeetingpoint.domain.dto.NewsDTO;
import com.webapp.sportmeetingpoint.domain.entities.News;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Log4j2
@RestController
@RequestMapping(value = "/api/news")
public class NewsController {

    private final UserSystemService userSystemService;
    private final NewsService newsService;
    private final Validator validator;

    @Autowired
    public NewsController(UserSystemService userSystemService, NewsService newsService, Validator validator) {
        this.userSystemService = userSystemService;
        this.newsService = newsService;
        this.validator = Validation.buildDefaultValidatorFactory().usingContext().getValidator();

    }

    @RequestMapping(value = "/for_authenticated_user/news/add", method = RequestMethod.POST,
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> addNewEvent(
            @RequestParam("file") MultipartFile file,
            @RequestParam("data")  String data
    )throws IOException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        JwtUser jwtUser = (JwtUser)authentication.getPrincipal();
        UserSystem userSystem = userSystemService.findById(jwtUser.getId());

        NewsDTO newsDTO = null;

        if(data != null && !data.isEmpty()){
            newsDTO = new ObjectMapper().readValue(data, NewsDTO.class);
        }

        if(newsDTO!=null && !file.isEmpty() ){
            try {

                Byte[] byteImage = new Byte[file.getBytes().length];

                int i = 0;

                for (byte b : file.getBytes()){
                    byteImage[i++] = b;
                }

                newsDTO.setImage(byteImage);

            } catch (IOException e) {
                log.error("Error ", e);
                e.printStackTrace();
            }
        }

        Set<ConstraintViolation<NewsDTO>> validates = validator.validate(newsDTO);

        if(validates.size()>0){
            List<String> errorMessages = validates.stream().map(ConstraintViolation::getMessageTemplate)
                    .collect(Collectors.toList());

            HashMap result = new HashMap();
            result.put("validationMessage", errorMessages);

            return new ResponseEntity<>(result, HttpStatus.OK);
        }

        News e = new News();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");

        try{

            e.setTitle(newsDTO.getTitle());
            e.setDate(simpleDateFormat.parse(newsDTO.getNewsDate()));
            e.setContext(newsDTO.getContext());
            e.setImage(newsDTO.getImage());

        }catch(Exception ex){
            log.debug(ex.getMessage());
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        News result = newsService.saveNews(e, userSystem);

        return new ResponseEntity<>(result.getId(), HttpStatus.OK);
    }

}