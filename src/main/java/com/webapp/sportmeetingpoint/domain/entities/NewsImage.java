package com.webapp.sportmeetingpoint.domain.entities;


import lombok.*;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity(name = "NewsImage")
@Table(name = "news_image")
public class NewsImage extends BaseEntity {

    @Lob
    @Column(name = "image",  nullable = false)
    private Byte[] image;

}
