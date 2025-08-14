let firstName = document.getElementById('fname');
let lastName = document.getElementById('lname');
let crop = document.getElementById('crop');
let province = document.getElementById('province');
let acres = document.getElementById('acres');
let quantity = document.getElementById('quantity');

 
/*Set the network connection status
if (window.navigator.onLine == true) {
  console.log('Status: Online');
} else {
  console.log('Status: Offline');
}
*/

/*Set the file protocol
console.log(`Protocol: ${window.location.protocol}`);
*/

/*Set the geographical zone
if (window.navigator.language == 'es-419') {
  console.log('Region: Central America and the Caribbean');
}*/

/*Button Listener
document.getElementById('sendBtn').addEventListener("click", function() {
  
  if (first.value == '') {
    document.getElementById('msg').innerHTML = 'First Empty';
  } else if (last.value == '') {
    document.getElementById('msg').innerHTML = 'Last Empty';
  } else if (account.value == '') {
    document.getElementById('msg').innerHTML = 'Account Empty';
  } else if (account.value.length != 10) {
    document.getElementById('msg').innerHTML = 'Account Number must have 10 digits';  
  } else if (quantity.value == '') {
    document.getElementById('msg').innerHTML = 'Quantity Empty';
  } else if (quantity.value < 10000) {
    document.getElementById('msg').innerHTML = 'Minimum Quantity: RD$10,000';
  } else if (quantity.value > 50000000) {
    document.getElementById('msg').innerHTML = 'Maximum Quantity: RD$50,000,000';
  } else if (rate.value == '') {
    document.getElementById('msg').innerHTML = 'Rate Empty';
  } else if (prefix.value == '') {
    document.getElementById('msg').innerHTML = 'Prefix Empty';
  } else if (prefix.value != '809') {
    document.getElementById('msg').innerHTML = 'Phone Prefix not available in your country';
  } else {
    window.alert('Request Sended');
    document.getElementById('msg').innerHTML = '';
    document.getElementById('loanRequestForm').reset();

    console.log(`First Name: ${first.value}`);
    console.log(`Last Name: ${last.value}`);
    console.log(`Account Number: ${Number.parseInt(account.value)}`);
    console.log(`Region: ${region.value}`);

    console.log(`Currency: ${currency.value}`);
    console.log(`Quantity: RD$ ${quantity.value}`);
    console.log(`Interest Rate: ${rate.value}`);
    console.log(`Phone Prefix: ${prefix.value}`);
  }
    
});
*/