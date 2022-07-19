let searchbtn = document.querySelector("#search-btn");
let searchbar = document.querySelector(".search-container");
let loginuser = document.querySelector("#login-btn");
let formuser = document.querySelector(".form");
var box = document.querySelector("#dest");
var box1 = document.querySelector("#member");
var box2 = document.querySelector("#arrival");
var box3 = document.querySelector("#leaving");
var logo_media = document.querySelector(".logo");
var nav_media = document.querySelector(".nav-media");

window.onscroll = ()=>{
    searchbtn.classList.remove("fa-xmark");
    searchbar.classList.remove("active");
    formuser.classList.remove("active");
    nav_media.classList.remove("active");
}
searchbtn.addEventListener("click", () =>{
    searchbtn.classList.toggle("fa-xmark");
    searchbar.classList.toggle("active");
});

loginuser.addEventListener("click", ()=>{
    formuser.classList.toggle("active");
});

logo_media.addEventListener("click", ()=>{
    nav_media.classList.toggle("active");
})




function validateText(){
    
    if (box.value.length < 3 || box.value.length > 20){
        alert("Please enter character between 3 and 20");
        return false;} 

    if (box.value.length >= 3 && box.value.length <= 20){
        var a = box.value;
        var b = box.value.replace(/[^a-z]/g, '');
        if (a != b){
            alert("Special characters not allowed");
            return false;}}

    if (box1.value.length == " " || box1.value.length > 2){
        alert("Please enter atleast one member and in limit");
        return false;}

    if (box2.value == "" || box3.value == ""){
        alert("Please enter date");
        return false;} 
           
}





/** let usernm = document.querySelector("#username");
let pass = document.querySelector("#password");

if (usernm.value.length < 5 || pass.value.length < 5){
    alert("Enter atleast 5 characters");
} */
/* 
var special_char = [33, 34, 60, 62, 59, 47, 45];
    for (var i=0; i < special_char.length(); i++){
        if (box.value == special_char[i]){
            alert("Special characters not allowed");
            return false;}
        }     

https://www.w3schools.com/charsets/ref_html_ascii.asp   

var noSpecChar = box.value.replace(/[^a-z]/g, '');
    alert(noSpecChar);

box.value.replace(/[^a-z] /g, '');
alert(document.write(box.value));  

if (box.value.length >= 3 && box.value.length <= 20){
        if ((box.value.replace(/[^a-z]/g, '')) = true) {
            alert("Special characters not allowed");
            return false;}
    }

*/    