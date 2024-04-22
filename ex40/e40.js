"use strict";
function make_album(artist, title, tracks) {
    let album = {
        artist, title, tracks
    };
    return album;
}
console.log(make_album("Artist One", "The First Album", 0));
console.log(make_album("Artist Two", "The Second Album", 1));
console.log(make_album("Artist Three", "The Third Album", 2));
