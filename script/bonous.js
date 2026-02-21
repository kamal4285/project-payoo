document.getElementById('bonous-btn').addEventListener('click', function(){
    const couponNumber = getValueFromInput('coupon-number');
    if(couponNumber.length === 5 && couponNumber.startsWith('B-')){
        alert('Congratulations You get a special bonous')
    }
    else{
        alert('Sorry! You are not selected for this bonous');
        return;
    }
})