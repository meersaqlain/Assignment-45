"use strict";
function make_sandwich(...ingredients) {
    console.log(` We Have ${ingredients} Sandwich`);
    return ingredients;
}
make_sandwich("ingredients 1", "ingredients 2");
make_sandwich("ingredients 3", "ingredients 4");
make_sandwich("ingredients 5", "ingredients 6");
