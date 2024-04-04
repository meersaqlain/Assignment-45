"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let inviting = [
    "Ali",
    "Talha",
    "Arhum",
];
console.log("Oh YEah ! I Found a Bigger Dinner Table.");
let cantMake = inviting.splice(2);
console.log(cantMake, "Can,t Make It Dinner");
inviting.unshift("Wahab");
inviting.push("Jibran");
inviting[4] = "Abubakr";
inviting[5] = "Omer";
for (let i = 0; i < inviting.length; i++) {
    console.log("Dear ", inviting[i], " You Are Invited To Dinner");
}
