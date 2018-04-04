function checkemail()
{
var email=document.getElementById("email").value;
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
        alert(email);
    alert('Please provide a valid email address');
    email.focus;
    return false;
}
}
function checkpass()
{
var pass=document.getElementById("pass").value;
var cpass=document.getElementById("cpass").value;

if(pass !== cpass)
{
alert("Password not matched");
cpass.focus;
return false;
}}