const result = document.getElementById("para");
console.log(result);
result.innerHTML = "Hello World";
result.tittle = "my name";
document.write(result);



const x=document.getElementsByClassName("p1");
console.log(x);
x[0].innerHTML="aastik rai ";
x[1].innerHTML="absc";
x[2].innerHTML="bsi";
const result3 = document.getElementsByTagName("p");
result3[2].innerHTML = "this is a pet";
result3[1].style.color = "blue ";
result3[0].innerText = "my paragraph";


const test = document.querySelector("ul li");
test.style.backgroundColor = "green";
test.style.padding = "10px";
test.style.fontSize = "20px";