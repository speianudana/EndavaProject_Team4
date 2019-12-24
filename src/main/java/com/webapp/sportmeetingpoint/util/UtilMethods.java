package com.webapp.sportmeetingpoint.util;

public class UtilMethods {

  private static int FIRST = (int)'a';

  public static String numberToAlphabetCharacters(final Integer num){

    StringBuilder str = new StringBuilder();


    Integer a = num,
      b = a;

    for(int i=10;;){
      a %= i;
      b /= i;

      str.append((char)(a + FIRST));

      if(b==0) break;

      a = b;
    }


    return str.toString();
  }

  public static Integer alphabetCharactersToNumber(final String str){
    Integer result = 0;

    for(int i=0, j=1; i<str.length(); i++, j*=10){
      result += ((int)str.charAt(i)-FIRST)*j;

    }

    return result;
  }

}
