let clock=document.querySelector(".clock")
let myName=document.getElementById("myName")
let getName=prompt("Lütfen Adınızı Giriniz:");
myName.innerHTML=getName;

function showTime(){
    let hour=new Date().getHours();
    let minute=new Date().getMinutes();
    let second=new Date().getSeconds();
    let dayName=new Date().toLocaleString("tr-TR",{weekday:"long"})
    clock.innerHTML=`${hour}:${minute}:${second} ${dayName}`
}
showTime();