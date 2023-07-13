const array = ['value', () => 'showValue'];

// Write the code here

const [value,showValue] = array



console.log(value); // should output 'value'
console.log(showValue()); // should output 'showValue'