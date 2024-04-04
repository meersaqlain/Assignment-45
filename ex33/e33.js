"use strict";
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3
let Ordinal_Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Ordinal_Numbers.forEach(num => {
    let print_this = "st";
    if (num == 1) {
    }
    else if (num == 2) {
        print_this = "nd";
    }
    else if (num == 3) {
        print_this = "rd";
    }
    else if (num == 4) {
        print_this = "th";
    }
    else if (num == 5) {
        print_this = "th";
    }
    else if (num == 6) {
        print_this = "th";
    }
    else if (num == 7) {
        print_this = "th";
    }
    else if (num == 8) {
        print_this = "th";
    }
    else if (num == 9) {
        print_this = "th";
    }
    console.log(`${num}${print_this}`);
});
