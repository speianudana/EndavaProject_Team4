package com.webapp.sportmeetingpoint.util.mail;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

@Log4j2
@Component
public class MailUtil {

  private static MailUtil singletonMailUtilObject;

  private static String PORT = "587";


  public static MailUtil getMailUtilObject(){

    if(singletonMailUtilObject==null){
      singletonMailUtilObject = new MailUtil();
      return singletonMailUtilObject;
    }

    return singletonMailUtilObject;

  }

  public void sendMailAsync(String recipient,final String htmlText){
    new Thread(()->{
      try {
        sendMail(recipient, htmlText);
      } catch (MessagingException e) {
        log.debug(e);
      }
    }).start();
  }

  private void sendMail(String recipient,final String htmlText) throws MessagingException {


    Properties properties = new Properties();

    properties.put("mail.smtp.auth","true");
    properties.put("mail.smtp.starttls.enable","true");
    properties.put("mail.smtp.host","smtp.gmail.com");
    properties.put("mail.smtp.port", PORT);

    String myAccountEmail = "sportmeetingpoint223@gmail.com";
    String password = "GhTT635__0poOqZ410OOiq__0";

    Session session = Session.getDefaultInstance(properties, new Authenticator() {
      @Override
      protected PasswordAuthentication getPasswordAuthentication() {
        return new PasswordAuthentication(myAccountEmail, password);
      }
    });

    Message message = prepareMessage(session, myAccountEmail, recipient, htmlText);

    Transport.send(message);
    log.debug("Message send successfully");

  }
  
  
  private Message prepareMessage(Session session, String myAccountEmail,
    String recipient, final String htmlText){

    Message message = new MimeMessage(session);


    try{
      message.setFrom(new InternetAddress(myAccountEmail));
      message.setRecipient(Message.RecipientType.TO, new InternetAddress(recipient));
      message.setSubject("My first mail app");

      message.setContent(htmlText, "text/html");

      return message;
    }
    catch(Exception e){
      log.debug(e.getMessage());
    }

    return message;

  }
  
  
  
}
