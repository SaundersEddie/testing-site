// Selenium Test Site Scripts
// EXS 3rd February 2021
// edwyn.saunders@outlook.com

console.log ("Our Script has run!")

document.getElementById("id-myBtn").addEventListener("click", function() {
    console.log ("MyBtn has been clicked!!!");
    document.getElementById("myText").innerHTML="My button has been clicked!!";
});