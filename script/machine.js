// machine id ---> input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}
// machine ----> balance
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    // console.log('Current Balance', Number(balance));
    return Number(balance);
}
// machine--> new balance
function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}


// machine id---> hide all---> show id
function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const transferMoney = document.getElementById('transfer');
    const getBonous = document.getElementById('get-bonous');
    const history = document.getElementById('history');
    // console.log(`Add money- ${addMoney}, Cashout- ${cashout}`);

    // hide all
    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    transferMoney.classList.add('hidden');
    getBonous.classList.add('hidden');
    history.classList.add('hidden');

    // show only id
    const selected = document.getElementById(id);
    selected.classList.remove('hidden');

}