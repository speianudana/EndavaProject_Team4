package com.webapp.sportmeetingpoint.util;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

public class UtilMethodsTests {

  @Test
  public void testNumberToAlphabetCharactersAndAlphabetCharactersToNumber() {

    Integer[] numbers = {0, 100, 999, 88, 532, 111, 10};

    List<String> alphabeticCharactersForNumbers = Arrays.stream(numbers)
      .map(UtilMethods::numberToAlphabetCharacters)
      .collect(Collectors.toList());


    List<Integer> numbersForAlphabeticCharacters = alphabeticCharactersForNumbers.stream()
      .map(UtilMethods::alphabetCharactersToNumber)
      .collect(Collectors.toList());

    for(int i=0; i<numbers.length; i++){
      Assertions.assertThat(numbers[i]).isEqualTo(numbersForAlphabeticCharacters.get(i));
    }

  }

}
