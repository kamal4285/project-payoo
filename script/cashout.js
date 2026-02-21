document.getElementById('cashout-btn').addEventListener('click', function(){
    const cashoutNumber = getValueFromInput('cashout-number');
    if(cashoutNumber.length != 11){
        alert('Invalid Number');
        return;
    }
    
    const cashoutAmount = getValueFromInput('cashout-amount');

    const currnetBalance = getBalance();

    const newBalance = currnetBalance - Number(cashoutAmount);
    console.log('New Balance', newBalance);
    if(newBalance < 0){
        alert('Invalid Balance');
        return;
    }
    const pin = getValueFromInput('cashout-pin');
    if(pin === '1234'){
        alert('Cashout Successfull');
        // const balanceElement = document.getElementById('balance');
        // balanceElement.innerText = newBalance;
        // console.log('final balance', newBalance);
        setBalance(newBalance);

         // 1. history container call
        const history = document.getElementById('history-container');
        // 2. new div create
        const newHistory = document.createElement('div');
        // 3. new div innerHTML add
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Cashout ${cashoutAmount} success to ${cashoutNumber},
            at ${new Date()};     
        </div>
        `
        // 4. new div append in history container
        history.append(newHistory);
    }
    else{
        alert('Invalid pin');
        return;
    }
});





// document.getElementById('cashout-btn')
//     .addEventListener('click', function(){
//         // 1. get the agent number & validate
//         const cashoutNumberInput = document.getElementById('cashout-number');
//         const cashoutNumber = cashoutNumberInput.value;
//         console.log(cashoutNumber);
//         if(cashoutNumber.length != 11){
//             alert('Invalid Agent Number');
//             return;
//         }
//         else{

//         }
//         // 2. get the amount, validate, convert to number
//         const cashoutAmountInput = document.getElementById('cashout-amount');
//         const cashoutAmount = cashoutAmountInput.value;
//         console.log(cashoutAmount)
//         // 3. get current balance, calculate , convert to number
//         const balanceElement = document.getElementById('balance');
//         const balance = balanceElement.innerText;
//         // console.log(balance);
//         // 4. calculate new balance
//         const newBalance = Number(balance) - Number(cashoutAmount);
//         // console.log(newBalance)

//         if(newBalance < 0){
//             alert('Invalid Balance');
//         }
//         console.log('newBalance', newBalance);
//         // 5. get the pin and verify
//         const cashoutPinInput = document.getElementById('cashout-pin');
//         const pin = cashoutPinInput.value;
//         if(pin === '1234'){
//             alert('Cashout successfull')
//             balanceElement.innerText = newBalance;
//         }
//         else{
//             alert('Invalid pin');
//             return;
//         }
//         // 5-1. true----> show an alert ---> set balance
//         // 5-2. true----> show an error ---> return
//     });