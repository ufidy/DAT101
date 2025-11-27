"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const date = new Date();
function printNorwegianDate() {
    const today = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const formatted = today.toLocaleDateString("no-NB", options);
    printOut(formatted);
}

printNorwegianDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const StartDate = new Date();
function printNorwegianDate1() {
    const today = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const formatted = today.toLocaleDateString("no-NB", options);
    printOut(formatted);
}
printNorwegianDate1();

const EndDate = new Date(2025, 4, 14); // May 14, 2025 
let timeDiff = (EndDate.getTime() - StartDate.getTime()) / (1000 * 3600 * 24);
let timeDiffer = Math.round(timeDiff);
printOut("There are " + timeDiffer.toFixed(0) + " days left until the release.");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let radius = 5;
function calculateDiameter(radius) {
    let diameter = 2 * radius;
    return diameter;
}
let diameter = calculateDiameter(radius);

function calculateCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    return circumference;
}
let result = calculateCircumference(radius);

function calculateArea(radius) {
    let area = Math.PI * radius * radius;
    return area;
}
let areaResult = calculateArea(radius);

printOut("For a circle with radius " + radius + ":");
printOut("Diameter: " + diameter.toFixed(2));
printOut("Circumference: " + result.toFixed(2));
printOut("Area: " + areaResult.toFixed(2));
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let heightOfRectangle = 3;
let widthOfRectangle = 4;

function calculatePerimeter(heightOfRectangle, widthOfRectangle) {
    let perimeter = 2 * (heightOfRectangle + widthOfRectangle);
    return perimeter;
}
let perimeterResult = calculatePerimeter(heightOfRectangle, widthOfRectangle);

function calculateAreaOfRectangle(heightOfRectangle, widthOfRectangle) {
    let areaOfRectangle = heightOfRectangle * widthOfRectangle;
    return areaOfRectangle;
}
let areaOfRectangleResult = calculateAreaOfRectangle(heightOfRectangle, widthOfRectangle);

printOut("For a rectangle with height " + heightOfRectangle + " and width " + widthOfRectangle + ":");
printOut("Perimeter: " + perimeterResult.toFixed(2));
printOut("Area: " + areaOfRectangleResult.toFixed(2));
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let celsiusValue = 47;

function CelsiusToFahrenheit() {
  let fahrenheit = (celsiusValue * 9/5) + 32;
  return fahrenheit;
}

function CelsiusToKelvin() {
  let kelvin = celsiusValue + 273.15;
  return kelvin;
}

printOut("Convert " + celsiusValue + " Celsius");
printOut("Celsius = " + celsiusValue)
printOut("Fahrenheit = " + CelsiusToFahrenheit().toFixed(0));
printOut("Kelvin = " + CelsiusToKelvin().toFixed(0));
printOut(newLine);

let fahrenheitValue = 100;

function fahrenheitToCelsius() {
  let celsius = (fahrenheitValue - 32) * 5/9;
  return celsius;
}

function fahrenheitToKelvin() {
  let kelvin = (fahrenheitValue - 32) * 5/9 + 273.15;
  return kelvin;
}

printOut("Convert " + fahrenheitValue + " Fahrenheit");
printOut("Celsius = " + fahrenheitToCelsius().toFixed(0));
printOut("Fahrenheit = " + fahrenheitValue);
printOut("Kelvin = " + fahrenheitToKelvin().toFixed(0));
printOut(newLine);

let kelvinValue = 300;

function kelvinToCelsius() {
  let celsius = kelvinValue - 273.15;
  return celsius;
}

function kelvinToFahrenheit() {
  let fahrenheit = (kelvinValue - 273.15) * 9/5 + 32;
  return fahrenheit;
}
printOut("Kelvin " + kelvinValue + " Kelvin");
printOut("Celsius = " + kelvinToCelsius().toFixed(0));
printOut("Fahrenheit = " + kelvinToFahrenheit().toFixed(0));
printOut("Kelvin = " + kelvinValue);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let normalTaxRate = 0.25;    // normal = 25%
let foodTaxRate = 0.15;      // food = 15%
let otherTaxRate = 0.10;     // hotel, transport, and cinema = 10%
let taxRateOptions = [normalTaxRate, foodTaxRate, otherTaxRate];
let undefinedTaxRate;

let price = 100;

function calculateFinalPrice(price) {
    let finalPrice = price - (price * normalTaxRate);
    return finalPrice;
}
let finalPriceResult = calculateFinalPrice(price);

printOut( price + " is " + finalPriceResult.toFixed(2) + " without tax."); 


let price1 = 150;
function calculateFinalPriceWithTaxDifference(price) {
    let finalPrice1 = price - (price * foodTaxRate);
    return finalPrice1;
}
let finalPrice1 = calculateFinalPriceWithTaxDifference(price1);

printOut( price1 + " is " + finalPrice1.toFixed(2) + " without tax.");


let price2 = 50;

function calculateFinalPriceWithTaxDifference2(price) {
    let finalPrice2 = price - (price * otherTaxRate);
    return finalPrice2;
}
let finalPrice2 = calculateFinalPriceWithTaxDifference2(price2);

printOut( price2 + " is " + finalPrice2.toFixed(2) + " without tax.");

if (undefinedTaxRate === undefined) {
    printOut("Textile is unknown tax-group!");
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let distance = 150; // in kilometers
let time = 2; // in hours

function speedCalculation(distance, time) {
    let speed = distance / time;
    return speed;
}
let speedResult = speedCalculation(distance, time);

printOut("Speed = " + speedResult + " km/h.");
printOut("Distance = " + distance + " km");
printOut("Time = " + time + " h");
printOut(newLine);


let speed1 = 50; // in km/h
let time1 = 2; // in hours

function distanceCalculation(speed1, time1) {
    let distance1 = speed1 * time1;
    return distance1;
}
let distance1 = distanceCalculation(speed1, time1);

printOut("Speed = " + speed1 + " km/h.");
printOut("Distance = " + distance1 + " km");
printOut("Time = " + time1 + " h");
printOut(newLine);


let distance2 = 150; // in kilometers
let speed2 = 50; // in km/h

function timeCalculation(distance2, speed2) {
    let time2 = distance2 / speed2;
    return time2;
}
let time2 = timeCalculation(distance2, speed2);

printOut("Speed = " + speed2 + " km/h.");
printOut("Distance = " + distance2 + " km");
printOut("Time = " + time2 + " h");
printOut(newLine);

let speed3 = undefined; //in km/h
let distance3 = 50; // in kilometers

function timeCalculation1(distance3, speed3) {
    let time3 = distance3 / speed3;
    return time3;
}
let time3 = timeCalculation1(distance3, speed3);

printOut("Speed = " + speed3 + " km/h.");
printOut("Distance = " + distance3 + " km");
printOut("Time = " + time3 + " h");
printOut(newLine);
printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function padString(textString, maxSize, char, padBefore) {
    if (textString.length < maxSize) {
        const padLength = maxSize - textString.length;
        const padding = char.repeat(padLength);
        return padBefore ? padding + textString : textString + padding;
    }
    return textString;
}

let paddedResult = padString("This is a text", 50, "*", false);
printOut(paddedResult);
paddedResult = padString("This is a text", 50, "*", true);
printOut(paddedResult);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function sumArray(arr) {
  return arr.reduce((total, n) => total + n, 0);
}

function testMathPattern(lines) {
  let current = 1;
  for (let line = 1; line <= lines; line++) {
    let leftCount = line + 1;
    let rightCount = line;

    let left = [];
    let right = [];

    for (let i = 0; i < leftCount; i++) left.push(current++);
    for (let i = 0; i < rightCount; i++) right.push(current++);

    if (sumArray(left) !== sumArray(right)) {
      printOut("Wrong answer on line " + line);
      printOut("Left: " + left.join(" ") + " sum = " + sumArray(left));
      printOut("Right: " + right.join(" ") + " sum = " + sumArray(right));
      return;
    }

    // Printing of the numbers.
    const leftText = left.join(" ");
    const rightText = right.join(" ");
    const paddedLeft = leftText.padEnd(30, " ");

    printOut(paddedLeft + " = " + rightText);
    if (line === 6)
        break; 
  }

  printOut("Maths fun!");
}
// Testing that the code works.
testMathPattern(200);
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

let number = 9;
let factorialResult = factorial(number);
printOut("Factorial of " + number + " is " + factorialResult);
printOut(newLine);
