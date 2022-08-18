// JAVASCRIPT FILE

'use strict';

const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


let isValid = false;
let passwordMatch = false ;

function validateForm()
{
    // using constraint API
    isValid = form.checkValidity();
    if (!isValid)
    {
    // style main message for an error
    message.textContent = "Please fill out all feilds";
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';

    return;
    }

    // check to see if passwords match
    if(password1El.value === password2El.value)
    {
        passwordMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    }
    else
    {
        passwordMatch = false;
        message.textContent = "Make sure passwords match."
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';

        return;
    }

    // if form is valid and passwords match
    if (isValid && passwordMatch)
    {
        message.textContent = "Form submited successfully!"
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

// store form data
function storeFormData()
{
    const user = {
        name : form.name.value,
        phone : form.phone.value,
        email : form.email.value,
        website : form.website.value,
        password : form.password.value
    };

    // Do something with data (backend - servers)
    console.log(user);
}



// processFormData function
const processFormData = function(event)
{
    event.preventDefault();
    // validate form
    validateForm();
    // submit data if valid
    if (isValid && passwordMatch)
    {
        storeFormData();
    }
}


// Event Listners
form.addEventListener('submit',processFormData);