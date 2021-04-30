var firstname = ['Mary', 'Gary'];
var lastname = ['Ho', 'Chan'];
var email = ['user@gmail.com','user@yahoo.com'];
var phone = ['23456231','98684323'];
var address = ['Unit A 6/F Glory Centre 8 Hillwood Road Kowloon','Unit E 2 / F Rught Emperor Comm Bldg 122-126 Wellington St Central'];
var selectedservice = ['Pet Daycare , Pet Boarding','Pet Spa'];

firstname.push(localStorage.getItem("FNAME"));
lastname.push(localStorage.getItem("LNAME"));
email.push(localStorage.getItem("EMAIL"));
phone.push(localStorage.getItem("PHONE"));
address.push(localStorage.getItem("ADDRESS"));
selectedservice.push(localStorage.getItem("SERVICE"));
window.onload = show();
function show(){
    document.getElementById("firstname").innerHTML = 'Firstname\n'+firstname;
    document.getElementById("lasttname").innerText= 'Lastname\n'+lastname;
}




