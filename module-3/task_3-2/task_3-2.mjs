"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let txtPrintValue = "";
for (let i = 1; i <= 10; i++) {
    txtPrintValue += " " + i.toString();
}
printOut(txtPrintValue);

let txtPrintValue2 = "";
for (let a = 10; a>=1; a--) {
    txtPrintValue2 += " " + a.toString();
}
printOut(txtPrintValue2);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = Math.floor(Math.random() * 60) + 1;
while (number !== 7) {
    number = Math.floor(Math.random() * 60) + 1;
}

printOut("The number is " + number);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let timeStarted = Date.now();

let number1 = Math.floor(Math.random() * 1000000) + 1;
while (number1 !== 835183) {
    number1 = Math.floor(Math.random() * 1000000) + 1;
}
let guessedVariables = Math.floor(Math.random() * 1000000) + 1;
let count2 = guessedVariables;

let timeStopped = Date.now();
let count = timeStopped - timeStarted;


printOut("The number is " + number1);
printOut ("It took " + count2 + " guesses to find the number 835183."); 
printOut("It took" + " " + count + " " + "milliseconds to find the number 835183.");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let primeNumbers = "";
for (let num = 1; num <= 200; num++) {
    if (num < 2) continue;
    let isPrime = true;
    let i = 2;
    while (i <= Math.sqrt(num)) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
        i++;
    }
    if (isPrime) {
        primeNumbers += " " + num.toString();
    }
}
printOut(primeNumbers);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let textPart5 ="";
for (let row = 1; row <= 7; row++) {
    let line = "";

    for (let col = 1; col <= 9; col++) {
        line += "K" + col + "R" + row + " ";
    }
    textPart5 += line + newLine;
}
printOut(textPart5);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const students = 5;

const grade1 = Math.ceil(Math.random() * 236) / 236 * 100;
const grade2 = Math.ceil(Math.random() * 236) / 236 * 100;
const grade3 = Math.ceil(Math.random() * 236) / 236 * 100;
const grade4 = Math.ceil(Math.random() * 236) / 236 * 100;
const grade5 = Math.ceil(Math.random() * 236) / 236 * 100;

let textPart6 = "";
if (grade1 >= 89) {
    textPart6 += "Student 1: " + grade1.toFixed(2) + "% - (A)" + newLine;
} else if (grade1 >= 77) {
    textPart6 += "Student 1: " + grade1.toFixed(2) + "% - (B)" + newLine;
} else if (grade1 >= 65) {
    textPart6 += "Student 1: " + grade1.toFixed(2) + "% - (C)" + newLine;
} else if (grade1 >= 53) {
    textPart6 += "Student 1: " + grade1.toFixed(2) + "% - (D)" + newLine;
} else if (grade1 >= 41) {
    textPart6 += "Student 1: " + grade1.toFixed(2) + "% - (E)" + newLine;
} else {
    textPart6 += "Student 1: " + grade1.toFixed(2) + "% - (F)" + newLine;
}
printOut(textPart6);

textPart6 = "";
if (grade2 >= 89) {
    textPart6 += "Student 2: " + grade2.toFixed(2) + "% - (A)" + newLine;
} else if (grade2 >= 77) {
    textPart6 += "Student 2: " + grade2.toFixed(2) + "% - (B)" + newLine;
} else if (grade2 >= 65) {
    textPart6 += "Student 2: " + grade2.toFixed(2) + "% - (C)" + newLine;
} else if (grade2 >= 53) {
    textPart6 += "Student 2: " + grade2.toFixed(2) + "% - (D)" + newLine;
} else if (grade2 >= 41) {
    textPart6 += "Student 2: " + grade2.toFixed(2) + "% - (E)" + newLine;
} else {
    textPart6 += "Student 2: " + grade2.toFixed(2) + "% - (F)" + newLine;
}
printOut(textPart6);

textPart6 = "";
if (grade3 >= 89) {
    textPart6 += "Student 3: " + grade3.toFixed(2) + "% - (A)" + newLine;
} else if (grade3 >= 77) {
    textPart6 += "Student 3: " + grade3.toFixed(2) + "% - (B)" + newLine;
} else if (grade3 >= 65) {
    textPart6 += "Student 3: " + grade3.toFixed(2) + "% - (C)" + newLine;
} else if (grade3 >= 53) {
    textPart6 += "Student 3: " + grade3.toFixed(2) + "% - (D)" + newLine;
} else if (grade3 >= 41) {
    textPart6 += "Student 3: " + grade3.toFixed(2) + "% - (E)" + newLine;
} else {
    textPart6 += "Student 3: " + grade3.toFixed(2) + "% - (F)" + newLine;
}
printOut(textPart6);

textPart6 = "";
if (grade4 >= 89) {
    textPart6 += "Student 4: " + grade4.toFixed(2) + "% - (A)" + newLine;
} else if (grade4 >= 77) {
    textPart6 += "Student 4: " + grade4.toFixed(2) + "% - (B)" + newLine;
} else if (grade4 >= 65) {
    textPart6 += "Student 4: " + grade4.toFixed(2) + "% - (C)" + newLine;
} else if (grade4 >= 53) {
    textPart6 += "Student 4: " + grade4.toFixed(2) + "% - (D)" + newLine;
} else if (grade4 >= 41) {
    textPart6 += "Student 4: " + grade4.toFixed(2) + "% - (E)" + newLine;
} else {
    textPart6 += "Student 4: " + grade4.toFixed(2) + "% - (F)" + newLine;
}
printOut(textPart6);

textPart6 = "";
if (grade5 >= 89) {
    textPart6 += "Student 5: " + grade5.toFixed(2) + "% - (A)" + newLine;
} else if (grade5 >= 77) {
    textPart6 += "Student 5: " + grade5.toFixed(2) + "% - (B)" + newLine;
} else if (grade5 >= 65) {
    textPart6 += "Student 5: " + grade5.toFixed(2) + "% - (C)" + newLine;
}   else if (grade5 >= 53) {
    textPart6 += "Student 5: " + grade5.toFixed(2) + "% - (D)" + newLine;
} else if (grade5 >= 41) {
    textPart6 += "Student 5: " + grade5.toFixed(2) + "% - (E)" + newLine;
} else {
    textPart6 += "Student 5: " + grade5.toFixed(2) + "% - (F)" + newLine;
}
printOut(textPart6);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// yatzee has defeated me in ways i didnt know were possible.

printOut(newLine);
