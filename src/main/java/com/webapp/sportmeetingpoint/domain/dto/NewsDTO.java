package com.webapp.sportmeetingpoint.domain.dto;

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

    @Size(min=1, max=64, message = "Maximum title length 64 characters")
    @NotNull(message = "Title is required")
    private String title;

    @Size(min=1, max=500, message = "Maximum preview message length 200 characters")
    @NotNull(message = "Context is required")
    private String context;

    /*format YYYY-MM-DD*/
    private String newsDate;

    private Byte[] image;



}