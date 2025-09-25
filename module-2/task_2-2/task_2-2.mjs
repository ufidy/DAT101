"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
let Answer = 2 + (3 * ((2 - 4) * 6)); 
printOut("2 + (3 * ((2 - 4) * 6))=" + Answer);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
let millimeter = 25340; //25m and 34cm
let inch = 25.4;
let answer = millimeter/inch; 

printOut("25 meters and 34 centimeters=" + answer.toFixed(2) + " inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
let Days = 3;
let Hours = 12;
let Minutes = 14;
let Seconds = 45;

let DaysToHours = (3 * 24);
let HoursToMinutes = (72 + 12) * 60;
let SecondsToMinutes = (45 / 60) + 14;
let totalMinutes = HoursToMinutes + SecondsToMinutes;

printOut("3 Days, 12 hours, 14 minutes and 45 seconds=" + totalMinutes + " minutes");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
let AmountOfMinutes = 6322.52;
let AmountOfSeconds = 0.52 * 60;
let RemainingMinutesAfterSeconds = 6322.52 - 0.52;

let AmountOfDays = RemainingMinutesAfterSeconds / 1440;
let AfterDays = RemainingMinutesAfterSeconds % 1440;

let AmountOfHours = AfterDays / 60;
let AfterHours = AfterDays % 60;

let RemainingMinutes = AfterHours;
printOut("6322.52 minutes =" + AmountOfDays.toFixed(0) + " days, " + AmountOfHours.toFixed(0) + " hours, " + RemainingMinutes.toFixed(0) + " minutes and " + AmountOfSeconds.toFixed(0) + " seconds. ");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
// 76 kroner per 8.6 USD
let ExchangeRate = 76 / 8.6;
let USD = 54;
let totalNOK = (ExchangeRate * USD).toFixed(0);

let NOK = totalNOK;
let totalUSD = (NOK / ExchangeRate).toFixed(0);

printOut( USD + " USD = " + totalNOK + "NOK");
printOut( NOK + " NOK = " + totalUSD + "USD");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
let sentence = "There is much between heaven and earth that we do not understand."
printOut("There is much between heaven and earth that we do not understand.");

let letters = sentence.length - sentence.split(" ").length;
printOut("Total letters in the sentence: " + letters);

printOut("The character in the 19th position is: " + sentence.charAt(18));

printOut ("The substring from the 35st and 8 characters forward is: " + sentence.substr(34, 8));

printOut("The word 'earth'starts at position: " + sentence.indexOf("earth"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
let number1 = 5;
let number2 = 3;
if (number1 > number2) {
    printOut(number1 + " is greater than " + number2);
} else if (number1 < number2)
    printOut(number1 + " is less than " + number2);

let number3 = 7;
let number4 = 7;
if (number3 >= number4) {
printOut(number3 + " is greater than or equal to " + number4);
} else if (number3 <= number4)
    printOut(number3 + " is less than or equal to " + number4);

let letter = "a";
let letter2 = "b";
if (letter > letter2) {
    printOut(letter + " is greater than " + letter2);
} else if (letter < letter2)
    printOut(letter + " is less than " + letter2);

let number5 = 1;
let letter3 = "a";
let answer11 = (number5 > letter3); 
printOut(number5 + " is greater than " + letter3);

let number6 = 2500;
let letter4 = "abcd";
let answer12 = (number6 > letter4); 
printOut(number6 + " is greater than " + letter4);

let word = "arne";
let word2 = "thomas";
let answer13 = (word !== word2); 
printOut("arne !== thomas");

let statement = (2 == 5);
printOut("(2 = 5) true is " + statement);

let word3 = "abcd";
let word4 = "bcd";
const answer14 = (word3 < word4);
printOut("abcd " + "is greater than " + "bcd " + "false is " + answer14);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
let word5 = "254";
let convertedNumber = Number(word5);
printOut ("\"254\" = " + convertedNumber);

let word6 = "57.23";
let convertedNumber2 = Number(word6);
printOut ("\"57.23\" = " + convertedNumber2);

let word7 = "25";
let convertedNumber3 = Number(word7);
printOut ("\"25 NOK\" = " + convertedNumber3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
let generatedNumber = Math.floor(Math.random() * 360) + 1;
printOut("Random number between 1 and 360: " + generatedNumber);
printOut(newLine);


printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
let totalDays = 131;
let Weeks= 131 % 7;
let DaysLeft = (131 - Weeks) / 7;
printOut("131 days = " + DaysLeft + " weeks and " + Weeks + " days");
printOut(newLine);