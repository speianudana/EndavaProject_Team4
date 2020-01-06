package com.webapp.sportmeetingpoint.util.mail;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

@Log4j2
@Component
public class MailUtil {

  private static MailUtil singletonMailUtilObject;

  private final String accountEmail ;

  private final String accountPassword ;

  public MailUtil() {
    this.accountEmail = System.getenv("MAIL_LOGIN");
    this.accountPassword = System.getenv("MAIL_PASSWORD");

  }

  public void sendMailAsync(String recipient, final String title, final String htmlText){
    new Thread(()->{
      try {
        sendMail(recipient, title, htmlText);
      } catch (MessagingException e) {
        log.debug(e);
      }
    }).start();
  }

  private void sendMail(String recipient,final String title,final String htmlText) throws MessagingException {

    Properties properties = new Properties();

    properties.put("mail.smtp.auth","true");
    properties.put("mail.smtp.starttls.enable","true");
    properties.put("mail.smtp.host","smtp.gmail.com");
    properties.put("mail.smtp.port",  "5890");


    Session session = Session.getDefaultInstance(properties, new Authenticator() {
      @Override
      protected PasswordAuthentication getPasswordAuthentication() {
        return new PasswordAuthentication(accountEmail, accountPassword);
      }
    });

    Message message = prepareMessage(session, accountEmail, recipient, title, htmlText);

    Transport.send(message);

  }
  
  
  private Message prepareMessage(Session session, String myAccountEmail,
    String recipient, final String title, final String htmlText){

    Message message = new MimeMessage(session);


    try{
      message.setFrom(new InternetAddress(myAccountEmail));
      message.setRecipient(Message.RecipientType.TO, new InternetAddress(recipient));
      message.setSubject(title);

      message.setContent(htmlText, "text/html");

      return message;
    }
    catch(Exception e){
      log.debug(e.getMessage());
    }

    return message;

  }
  
  
  
}
