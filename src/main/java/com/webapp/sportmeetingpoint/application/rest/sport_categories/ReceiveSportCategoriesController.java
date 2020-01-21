package com.webapp.sportmeetingpoint.application.rest.sport_categories;


import com.webapp.sportmeetingpoint.domain.entities.AppSportCategories;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Log4j2
@RequestMapping(value = "/api/for_all")
@RestController
public class ReceiveSportCategoriesController {


  @RequestMapping(value = "/get_all_sport_categories_eng", method = RequestMethod.GET)
  public ResponseEntity getAllCategoriesInEnglishLang() {

    List<String> categoriesKeys = Arrays.stream(AppSportCategories.values())
      .map(a1->new String(a1.name()))
      .collect(Collectors.toList());


    return ResponseEntity.ok().body(categoriesKeys);
  }


}
