"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let output = "";

for (let i = 0; i < numbers.length; i++) {
    output += numbers[i] + " ";
}
printOut(output);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let numbers1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let output1 = numbers1.join(" * ")

printOut(output1);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text = "Hello there, how are you?"
let words = text.split(" ");

for (let i = 0; i < words.length; i++){
    printOut("Word number " + (i+1) + " is at index " + i + " and is: " + words[i]);
}

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let listOfNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"]

function RemoveFromNames(names, textToRemove){
    let index = names.indexOf(textToRemove);
    if (index !== -1) {
        names.splice(index,1);
        printOut(textToRemove + " was removed.");
   }else {
    printOut("The name does not exist.")
   }

} 
RemoveFromNames(listOfNames,"Marit")
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let listOfNames1 = [" Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"]

let allNames =listOfNames.concat(listOfNames1);

printOut(allNames.join(", "));
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook {
    #Title;
    #Author;
    #ISBN;

    constructor(aTitle, aAuthor, aISBN){
        this.#Title = aTitle;
        this.#Author = aAuthor;
        this.#ISBN = aISBN;
    }

    toString(){
        return `Title: ${this.#Title}, Author: ${this.#Author}, ISBN: ${this.#ISBN}`;
    }
}
let book1 = new TBook("The Hobbit", "J.R.R. Tolkien", "978-057928227");
let book2 = new TBook("1984", "George Orwell", "978-0451524935");
let book3 = new TBook("The Catcher in the Rye", "J.D. Salinger", "978-0316769488");

let totalBooks = [book1, book2, book3];

for(let i = 0; i < totalBooks.length; i++) {
    printOut(totalBooks[i].toString());
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
    WeekDay1: {value: 0x01, name: "Mandag"},
    WeekDay2: {value: 0x02, name: "Tirsdag"},
    WeekDay3: {value: 0x04, name: "Onsdag"},
    WeekDay4: {value: 0x08, name: "Torsdag"},
    WeekDay5: {value: 0x10, name: "Fredag"},
    WeekDay6: {value: 0x20, name: "Lørdag"},
    WeekDay7: {value: 0x40, name: "Søndag"},
    Workdays: {value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager"},
    Weekends: {value: 0x20 + 0x40, name: "Helg"},
};

let keys = Object.keys(EWeekDays);

for(let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let item = EWeekDays[key];
    printOut(key + "-> value: " + item.value + ", name: " + item.name);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let numbers2 = [];
for(let i = 0; i < 35; i++) {
    numbers2.push(Math.floor(Math.random() * 20) + 1);
}

let ascending = numbers2.slice().sort(function(a, b) {
    return a - b;
});

let descending = numbers2.slice().sort(function(a, b) {
    return b - a;
});

printOut("Original array: " + numbers2.join(", "));
printOut("Ascending: " + ascending.join(", "));
printOut("Descending: " + descending.join(", "));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let count = {};
for(let num of numbers2) {
    if (count[num]) {
        count[num]++;
    } else {
        count[num] = 1;
    }
}

let freqMap = {};
for(let num in count) {
    let freq = count[num];
    if(!freqMap[freq]) {
        freqMap[freq] = [];
    }
    freqMap[freq].push(Number(num));
}

let sortedFreqs = Object.keys(freqMap).sort((a,b)=>b-a);

printOut("Numbers and their frequencies:");
for(let num in count) {
    printOut(num + "->" + count[num]);
}

printOut(newLine + "Frequencies and corresponding numbers (most frequent first): ");
for(let freq of sortedFreqs) {
    let num = freqMap[freq].sort((a, b ) => a - b);
    printOut(freq + "->" + num.join(", ")); 
}
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let array2D = [];

for(let row = 1; row < 5; row++) {
    array2D[row] = [];
    for(let col = 1; col < 9; col++) {
        array2D[row][col] = `Row ${row}, Col ${col}`;
    }
}

printOut("Printing the 2D array:");
for(let row = 1; row < array2D.length; row++) {
    let rowText = array2D[row].join(" | ");
    printOut(rowText);
}

printOut(newLine);