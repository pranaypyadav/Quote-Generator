'use strict'
const quote=document.querySelector('.quote');
const person=document.querySelector('.person');
const button=document.querySelector("#new-quote");


let data;
async function getdata(){
    const response= await fetch("https://type.fit/api/quotes");
     data =await response.json();
    console.log(data)
}
getdata();

button.addEventListener("click",function(e){
    e.preventDefault();
    let randomNumber=Math.floor(Math.random()*17);
    quote.innerHTML=data[randomNumber].text;
    person.innerHTML=data[randomNumber].author;
})