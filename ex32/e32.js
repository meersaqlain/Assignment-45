"use strict";
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
let current_users = ["Ali", "Talha", "Zubair", "Arsalan", "Hasnain"];
let new_users = ["Arsalan", "Hasnain", "Abubabkr", "Aziz", "Anas"];
new_users.forEach(new_User => {
    if (current_users.some(current_user => current_user.toLowerCase() === new_User.toLowerCase())) {
        console.log(" You", new_User, " need to enter a new username");
    }
    else {
        console.log(new_User, " is available.");
    }
});
