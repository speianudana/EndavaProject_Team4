package com.webapp.sportmeetingpoint.domain.dto.News;

import lombok.Builder;
import lombok.Data;

@Data
@Builder(builderMethodName = "newsInfoBuilder")
public class NewsInfoResponseDTO {

    Integer id;

    String title;

    String context;

    String authorName;
//    String newsDate;



}

