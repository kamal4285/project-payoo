document.getElementById('transfer-money-btn').addEventListener('click', function(){
   const userAccount = getValueFromInput('transfer-acc-number');
   if(userAccount.length != 11){
    alert('Please input a valid account number');
    return;
   }

   const transferAmount = getValueFromInput('transfer-money-amount');
   const currnetBalance = getBalance();
   const newBalance = currnetBalance - Number(transferAmount);
   
   const pin = getValueFromInput('transfer-money-pin');
   if(pin === '1234'){
    alert(`Success Transfer Money to ${userAccount} at ${new Date}`);
    setBalance(newBalance);

    const history = document.getElementById('history-container');
    const newHistory = document.createElement('div');
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
        Success Transfer Money to ${userAccount} at ${new Date}
    </div>
    `  
    history.append(newHistory);
   }else{
    alert('Invalid Pin');
    return;
   }
})