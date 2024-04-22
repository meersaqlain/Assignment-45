let magicians:string[] = ["Chris","john","Mathwe"];
function make_great(magicians:string[] ){
       magicians.forEach(element => {
        console.log(magicians + "  The Great")
       });
  } 
make_great(magicians) ;
console.log(magicians + "  Original Names");