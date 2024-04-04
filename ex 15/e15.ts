//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let inviting = [ 
    "Ali",
    "Talha",
    "Arhum",
 ]

let cantMake = inviting.splice(2);
console.log(cantMake,"Can,t Make It Dinner");
 inviting[2] = "Abubakr";
for (let  i=0; i <inviting.length;i++){
    console.log("Dear ", inviting[i] ," You Are Invited To Dinner");
    
}
