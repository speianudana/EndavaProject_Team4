package com.webapp.sportmeetingpoint.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class NewsDTO {

    private String title;
    private String context;
    private String date;



}