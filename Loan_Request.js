let first = document.getElementById('fname');
let last = document.getElementById('lname');
let quantity = document.getElementById('qnt');
let prefix = document.getElementById('prefix');


document.getElementById('sendBtn').addEventListener("click", function() {

  if (first.value == '' && last.value == '' && quantity.value == '' && prefix.value == '') {
    window.alert('Complete all the inputs');
  } else if (first.value == '' || last.value == '') {
    window.alert('First Name and Last Name inputs are mandatory');
  } else if (quantity.value == '') {
    window.alert('Quantity input is mandatory');
  } else if (prefix.value == '') {
    window.alert('Phone Prefix input is mandatory');
  } else if (quantity.value < 10000) {
    window.alert('Minimum Quantity: RD$10,000');
  } else if (quantity.value > 50000000) {
    window.alert('Maximum Quantity: RD$50,000,000')
  } else if (prefix.value != '809') {
    window.alert('Phone Prefix not available in your country');
  } else {
    window.alert('Request Completed');

    console.log(`First Name: ${typeof first.value}`);
    console.log(`Last Name: ${typeof last.value}`);
    console.log(`Quantity: RD$${typeof quantity.value}`);
    console.log(`Phone Prefix: ${typeof prefix.value}`);
  }

});


  if (window.navigator.language == 'es-419') {
    console.log('Region: Central America and the Caribbean');
  }

console.log(`App Version: ${window.navigator.appVersion}`);
console.log(`Platform: ${window.navigator.platform}`);
console.log(`Language: ${window.navigator.language}`);
console.log(`Online Status: ${window.navigator.onLine}`);
console.log(`Protocol: ${window.location.protocol}`);
console.log(`Route: ${window.location.pathname}`);
