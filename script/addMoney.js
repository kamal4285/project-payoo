document.getElementById('add-money-btn').addEventListener('click', function(){
    // 1. bank account get
    const bankAccount = getValueFromInput('add-money-bank');
    if(bankAccount == "Select a bank"){
        alert('Please select a bank');
        return;
    }
    // 2. get bank account number
    const accno = getValueFromInput('add-money-number');
    if(accno.length != 11){
        alert('Invalid acc no');
        return;
    }
    // 3. get amount
    const amount = getValueFromInput('add-money-amount');
    const currnetBalance = getBalance();
    const newBalance = currnetBalance + Number(amount);
    
    const pin = getValueFromInput('add-money-pin');
    if(pin === '1234'){
        alert(`Add money success ${bankAccount} at ${new Date()}`);
        setBalance(newBalance);

        // 1. history container call
        const history = document.getElementById('history-container');
        // 2. new div create
        const newHistory = document.createElement('div');
        // 3. new div innerHTML add
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Add money success from ${bankAccount}, acc-no ${accno},
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
})