// console.log('paise');
document.getElementById('btn-clicked').addEventListener('click', function(){
    // console.log('btn clicked')
    const emailField = document.getElementById('input-email');
    const email = emailField.value;
    // console.log(email)
    const passField = document.getElementById('input-pass');
    const pass = passField.value;
    // console.log(pass)
    if(email === 'user_name@gmail.com' && pass === 'secret'){
        
    }
    else{
        alert('matha nsto😤')
    }
})