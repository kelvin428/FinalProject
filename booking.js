const fname = document.getElementById('fname').value;
const lname = document.getElementById('lname').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const address = document.getElementById('address').value;
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
let message =[];



form.addEventListener('submit',(e)=>{
    if (phone<0){
        message.push("The incorrect phone number.");

    }
        if(message.length>0){
            e.preventDefault();
            errorElement.innerText=message.join(',');
            message = [];
        }
            window.alert('Booked! Thank you!')


})

