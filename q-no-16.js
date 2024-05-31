"use strict";
// Creating a GUEDT liSt Arry
let guestList = ["tahir", "Fakir", "Aanabia", "fouzia"];
// Making Variable for those guest who cant come
let dontCome = guestList[0];
// Print the name of guest who cont come
console.log(dontCome, "can not came");
//  Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Abubakar");
// message print for Bigger Table
console.log("Good News! We have Found a Bigger Table For Dinner.");
// Adding a new guest at Starting index of array
guestList.unshift("Ghousia");
// Adding a new guest at ending index of array
guestList.push("UM E Romman");
//Get a middle index of our guest list array
let middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest at middle index of arry
guestList.splice(middleIndex, 0, "qeswa");
// print message for update list
console.log("Updated List of our Guests");
// Sending a invitation message to our guests one by one with thier names
guestList.forEach(oneguest => console.log(`Asalam u Aliqum ${oneguest}, would you like to dinner with us`));
