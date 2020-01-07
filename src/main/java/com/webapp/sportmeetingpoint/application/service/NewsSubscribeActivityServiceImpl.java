package com.webapp.sportmeetingpoint.application.service;

import com.webapp.sportmeetingpoint.domain.entities.EventParticipantActivity;
import com.webapp.sportmeetingpoint.domain.entities.News;
import com.webapp.sportmeetingpoint.domain.entities.NewsSubscribeActivity;
import com.webapp.sportmeetingpoint.domain.entities.UserSystem;
import com.webapp.sportmeetingpoint.persistance.NewsSubscribeActivityRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class NewsSubscribeActivityServiceImpl implements NewsSubscribeActivityService {

  private final NewsSubscribeActivityRepository newsSubscribeActivityRepository;

  @Autowired
  public NewsSubscribeActivityServiceImpl(NewsSubscribeActivityRepository newsSubscribeActivityRepository) {
    this.newsSubscribeActivityRepository = newsSubscribeActivityRepository;
  }

  private NewsSubscribeActivity findTheSameIdByTwoLists(final List<NewsSubscribeActivity> arr1,
                                                        final List<NewsSubscribeActivity> arr2){

    for (int i = 0; i < arr1.size(); i++) {
      for (int j = 0; j < arr2.size(); j++) {
        if (arr1.get(i).getId().equals(arr2.get(j).getId())) return arr1.get(i);
      }
    }

    return null;
  }

  @Override
  public NewsSubscribeActivity subscribeUserToTheCurrentNews(UserSystem user, News news) throws Exception {
    if (user == null || news == null) throw new Exception("User and news can not be NULL");

    List<NewsSubscribeActivity> forEvent = news.getNewsSubscribeActivity();
    List<NewsSubscribeActivity> forUser = user.getNewsSubscribeActivity();

    NewsSubscribeActivity commonNewsParticipantActivity = findTheSameIdByTwoLists(forEvent, forUser);
    if(commonNewsParticipantActivity!=null) throw new Exception("This user is already subscribed to this news");

    NewsSubscribeActivity activity = new NewsSubscribeActivity();
    activity.setNews(news);
    activity.setUserSystem(user);




    return newsSubscribeActivityRepository.save(activity);
  }

  @Override
  public void unsubscribeUserToTheCurrentNews(UserSystem user, News news) throws Exception {
    if (user == null || news == null) throw new Exception("User and news can not be NULL");

    List<NewsSubscribeActivity> forEvent = news.getNewsSubscribeActivity();
    List<NewsSubscribeActivity> forUser = user.getNewsSubscribeActivity();

    NewsSubscribeActivity commonNewsParticipantActivity = findTheSameIdByTwoLists(forEvent, forUser);

    if(commonNewsParticipantActivity==null) throw new Exception("This relationship between " +
      "the user and the event does not exist");

    this.newsSubscribeActivityRepository.deleteById(commonNewsParticipantActivity.getId());
  }
}
