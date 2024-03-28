
document.getElementById('btn').addEventListener('click', function(){
    /* email */
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    /* pass */
    const passField = document.getElementById('pass-field');
    const pass = passField.value;
    if(email === 'rahulkadir@gmail.com' && pass === 'password'){
        window.location.href = 'index.html';
    }
    else{
        alert('Wrong password');
    }
})