function telephoneCheck(str) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
 }

const input = document.getElementById("input");

 function check(){
    let value = input.value;
    document.getElementById("p").innerHTML=telephoneCheck(value);
}
input.addEventListener("keypress", function(x){
if (x.keyCode === 13){
    check();
}
});