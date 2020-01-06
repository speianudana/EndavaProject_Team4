package com.webapp.sportmeetingpoint.util.mail;


import com.webapp.sportmeetingpoint.util.RandomString;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.util.Properties;


public class MailUtilTests {

  final String accountEmail;
  final String accountPassword;


  public MailUtilTests() {
    this.accountEmail = System.getenv("MAIL_LOGIN");
    this.accountPassword = System.getenv("MAIL_PASSWORD");
  }

//  @Test
  public void testSendMailAndReceiveMail() throws Exception {
    final String title = "Testing";
    final String hashToCheckSendAndReceiveMail = new RandomString(100).nextString();
    sendMail(title, hashToCheckSendAndReceiveMail);

    final Message lastMessage = receiveLastMail();

    String headerName = lastMessage.getSubject();
    String bodyText = (String) lastMessage.getContent();

    final boolean condition1 = bodyText.contains(hashToCheckSendAndReceiveMail);
    final boolean condition2 = headerName.equals(title);

//    if(!condition1)
//      throw new Exception("Body text is not equal.");
//
//    if(!condition2)
//      throw new Exception("Header is not equal.");

    Assertions.assertThat(condition1 && condition2).isTrue();

  }


  private Message receiveLastMail() throws MessagingException, IOException {

    Properties properties = new Properties();
    properties.setProperty("mail.store.protocol", "imaps");

    Session session = Session.getInstance(properties,
      new javax.mail.Authenticator() {
        protected PasswordAuthentication getPasswordAuthentication() {
          return new PasswordAuthentication(accountEmail, accountPassword);
        }
      });

    Store store = session.getStore("imaps");

    store.connect("imap.gmail.com", accountEmail, accountPassword);
    Folder emailFolder = store.getFolder("INBOX");
    emailFolder.open(Folder.READ_ONLY);
    Message messages[] = emailFolder.getMessages();




    return messages[messages.length - 1];
  }



  private void sendMail(final String title, final String mailBody) throws Exception {


    Properties properties = new Properties();

    properties.put("mail.smtp.auth", "true");
    properties.put("mail.smtp.starttls.enable", "true");
    properties.put("mail.smtp.host", "smtp.gmail.com");
    properties.put("mail.smtp.port", "587");


    Session session = Session.getDefaultInstance(properties, new Authenticator() {
      @Override
      protected PasswordAuthentication getPasswordAuthentication() {
        return new PasswordAuthentication(accountEmail, accountPassword);
      }
    });

    Message message = new MimeMessage(session);


    message.setFrom(new InternetAddress(accountEmail));
    message.setRecipient(Message.RecipientType.TO, new InternetAddress(accountEmail));
    message.setSubject(title);

    message.setContent("<p>" + mailBody + "</p>", "text/html");

    Transport.send(message);

  }

}
