package com.webapp.sportmeetingpoint.domain.dto.News;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class NewsDTO {

    private Integer id;
    private String title;
    private String context;
    private String authorEmail;
    private String authorFullName;
    /*format YYYY-MM-DD*/
//    private String newsDate;
    private Byte[] image;



}