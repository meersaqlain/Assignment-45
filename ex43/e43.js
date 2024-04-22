"use strict";
let magicians = ["Chris", "john", "Mathwe"];
function make_great(magicians) {
    magicians.forEach(element => {
        console.log(magicians + "  The Great");
    });
}
make_great(magicians);
console.log(magicians + "  Orignal Names");
