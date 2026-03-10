// var count;
// document.write("starting Loop"+"<br/>");
// for(count=0;count<10;count++){
//     document.write("Current Count:"+ count);
//     document.write("<br/>");

// }



// var count=0;
// document.write("Starting Loops");

// while(count<10){
//     document.write("current count:"+count+"</br>")
//     count++;
// }
// document.write("loops stopped!")

// const age =20;
// if(age>18){
//     console.log("You are an adult");   
// }
// else{
//     console.log("you are a minor.");
// }

//switch case
// var grade = 'A';
// document.write("Entering switch block<br/><br/>");
// switch(grade){
//     case 'A':document.write("Good job<br/><br/>");
//     break;
//     case 'B':document.write(" Pretty Good<br/>");
//     break;
//     case 'C':document.write("Passed<br/>");
//     break;
//     case 'D':document.write("Not so good<br/>");
//     break;
//     case 'E':document.write("Failed<br/>");
//     break;
//     default:document.write("unknown grade<br/>")
// }
// document.write("Exiting switch block");


//functions 


// function myFunction(){
//     alert("hello world");
// }


// function sayHello(name,age){
//     document.write(name+"is"+age+"year old.");
    
// }


//Function return
const res=mul(12,30)
function mul(x,y)
{
    return(x*y);
}

//Arrow Function
const add2=(a,b)=>
{
    console.log(a+b);
};
add2(102,20);

//Arrow Function for single line parameters
const add3=(c,d)=>console.log(c+d);
add3(30,20);

//Object Creation


//Array

var myinfo=new Array ();
var myinfo1=Array();
console.log(myinfo,myinfo1);

//Program
let collection=
[
  {},
  [],
  true,
  "john",
  function(){},
  9009898193,
  undefined,
  null,
  //new string("abc"),
  new Date(),
];
console.log(collection);
collection.teacherName="JohnMac";
collection.phoneNo=950008193;