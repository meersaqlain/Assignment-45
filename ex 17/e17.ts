//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
let inviting = [ 
    "Ali",
    
 ]
 console.log("Sorry ! I Can invite only two people for dinner.");


let cantMake = inviting.splice(2);
console.log(cantMake,"Can,t Make It Dinner");
inviting.unshift("Wahab") ;
inviting.push("Jibran") ;
 inviting[4] = ("Abubakr");
 inviting [5] = ("Omer");
let  c1 = inviting.pop();
console.log(`Sorry ${c1} I Can,t Invite You To Dinner`);
let c2 = inviting.pop();
console.log(`Sorry ${c2} I Can,t Invite You To Dinner`);
let c3 = inviting.pop();
console.log(`Sorry ${c3} I Can,t Invite You To Dinner`);
let c4 = inviting.pop();
console.log(`Sorry ${c4} I Can,t Invite You To Dinner`);

  
for (let  i=0; i <inviting.length;i++){
    console.log("Dear ", inviting[i] ,"  You Are Still Invited.");
    
}
inviting.splice(0,inviting.length);
console.log(inviting);


