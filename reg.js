//To check valid email address.

var email="Yadwindersingh96@gmail.com";
var reg=/^([a-zA-Z\d\.-]+)@([a-zA-Z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,5})?$/g
if(reg.test(email)==true)
{
console.log("Valid email address");
}
else
{
console.log("not valid email address");
}