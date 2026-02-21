document.getElementById('login-btn')
    .addEventListener('click', function(){
        // 1. get the mobile number input
        const numberInput = document.getElementById('input-number');
        const contactNumber = numberInput.value;
        console.log(contactNumber);
        // 2. get the pin input
        const pinInput = document.getElementById('input-pin');
        const pin = pinInput.value;
        console.log(pin);
        // 3. match the pin & mobile number
        if(contactNumber == '01776406670' && pin == '1234'){
            // 3-1. true ---> alert--->home
            // alert('Login Success');
            //window.location.replace('/home.html');
            window.location.assign('/home.html');
        }
        // 3-2. false----> alert--->return
        else{
            alert('Login Failed');
            return;
        }
    })