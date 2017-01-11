// Read about the Array.prototype.sort method. Create a function that can be used with sort. 
// This function should take two strings, and return a value that sort can use to determine which is the longest string. 
// Finally, create an array of strings and try to get it sorted using your new function.

var arrStr = ["Montreal", "London", "New York", "Beijing"];

arrStr.sort(function(str1, str2) {
  return str1.length - str2.length;
});

console.log(arrStr);

// Create an array of objects (don’t need to use new here, just regular object literals). 
// These objects will contain a name and email property. 
// Then, run some code that will sort your array by the longest name. 
// Then, run some code that will sort your array by e-mail address in alphabetical order.

var arr = [
    {name: 'alice', email:'alice@gmail.com'},
    {name: 'david', email:'david@gmail.com'},
    {name: 'charles', email:'charles@gmail.com'},
    {name: 'joe', email:'joe@gmail.com'},
];

// sort by longest namae
arr.sort(function(str1, str2) {
  return str1.name.length - str2.name.length;
});

console.log(arr);


// sort by email
arr.sort(function(a, b) {
  var emailA = a.email.toUpperCase(); // ignore upper and lowercase
  var emailB = b.email.toUpperCase(); // ignore upper and lowercase
  if (emailA < emailB) {
    return -1;
  }
  if (emailA > emailB) {
    return 1;
  }

  // names must be equal
  return 0;
});

console.log(arr);


// Create a function that can be used with Array.prototype.map. 
// This function should take a number and return its square. 
// Then, use this function with map on an array of numbers to check the result.

var numbers = [1, 4, 9];
var roots = numbers.map(function(num){
    return num * num;
});

console.log(roots);

// Create a function that can be used with Array.prototype.map. 
// This function should be able to take an object and square its “num” property. 
// Then, use this function with map on an array of objects each containming a “num” property.