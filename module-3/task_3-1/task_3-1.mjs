"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
let wakeUpTime = 7; 
if (wakeUpTime === 7) {
  printOut("I can take the bus to school.");
  } else if (wakeUpTime === 8) {
  printOut("I can take the train to school.")
} else {
  printOut("I must take the car to school.");
}
printOut(newLine);
printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = -4;
if (number > 0) {
  printOut("Positive");
} else if (number < 0) {
  printOut("Negative");
} else {
  printOut("Zero");
}

printOut(newLine);
printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
let r = Math.floor(Math.random()*8 + 1);

if (r >= 4 && r <= 6) {
  printOut(r + "MP" + " Thank you!");
} else if (r > 6) {
  printOut(r + "MP" + " The image is too big.");
} else printOut(r + "MP" + " The image is too small.");

printOut(newLine);

printOut("--- Part 8, 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

if (monthName.includes("r")) {
  printOut(monthName + " You must take vitamin D.");
} else {
  printOut(monthName + " You don't need to take vitamin D.");
}


switch (monthName) {
  case "February":
    printOut(monthName + " has 28 days, except in leap years when it has 29 days.");
  break 

  case "April":
  case "June":
  case "September":
  case "November":
    printOut(monthName + " has 30 days.");  
  break

    case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    printOut(monthName + " has 31 days.");
  break
  printOut(newLine);
}
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const openMonths = ["January", "February", "September", "July", "June", "August", "October", "November", "December"];
const closedMonths = ["March", "May"];

if (openMonths.includes(monthName)) {
  printOut( monthName + ", Gallery is open.");
} else if (closedMonths.includes(monthName)) {
  printOut(monthName + ", Gallery is closed.");
} else {
  printOut(monthName + ", Temporary premises in the building next door.");
}
printOut(newLine);
