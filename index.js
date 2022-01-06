//The programs in this language are called scripts.
//array filter method use to filter key and value in array
//array.filter(function(currentValue, index, arr), thisValue)
const a = ['riki', 'mohit', 'amit', 'aju'];
let x = a.filter(lenght);
function lenght(){
if(a.length > 3){
return console.log(a);
}
}
//array concat method add two or more array
//array1.concat(array2, array3, ..., arrayX)
const a = ['riki', 'mohit', 'amit', 'aju'];
const b = ['helo', 'this', 'new', 'name'];
let x = a.concat(b);
console.log(x);
//array constructor method display array prototype
//array.constructor
const a = ['riki', 'mohit', 'amit', 'aju'];
let x = a.constructor();
console.log(x);
//array entries method itreate over array
//array.entries()
const a = ['riki', 'mohit', 'amit', 'aju'];
let x = a.entries();
for(let z of x){
console.log(z);
}
//array every method  check if function(test) is true 
//array.every(function(currentValue, index, arr), thisValue)
const a = ['riki', 'mohit', 'amit', 'aju'];
let x = a.every(test);
function test(){
if(a.length >= 4){
console.log(a);
}
}
//array find method find elements using function (test) return true if function is not undefined or empty
//array.find(function(currentValue, index, arr),thisValue)
const a = [1, 2, 3, 4];
let x = a.find(test);
function test(){
if(a.length > 3)
return console.log(a);
}
//array findIndex method return index when function (test) passed
//array.findIndex(function(currentValue, index, arr), thisValue)
const ages = [3, 10, 18, 20];

document.getElementById("box1").innerHTML = ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}
//new expample for findIndex
//array.findIndex(function(currentValue, index, arr), thisValue)
const numbers = [4, 12, 16, 20];

function checkValue(x) {
  return x > document.getElementById("toCheck").value;
}

function myFunction() {
  document.getElementById("demo").innerHTML = numbers.findIndex(checkValue);
}
//array forEach method return array key and value pair
//array.forEach(function(currentValue, index, arr), thisValue)
const array = [1,2,3,4,5];
let x = array.forEach(test);
function test( item, index){
document.getElementById('box1').innerHTML += index + ": " + item + "<br>"; 
}
//array Array.from method return lenght of string object
//Array.from(object, mapFunction, thisValue)
const arr ="This is my World";
let x = Array.from(arr);
console.log(x);
//array includes method return true if value is in array exist
array.includes(element, start)
const a = ['riki', 'mohit', 'amit', 'aju'];
let x = a.includes("riki", 0);
console.log(x);
//array indexOf method return index of arrgument pass to this function 
//array.indexOf(item, start)
const arr = [1,2,3,4,5];
console.log(arr.indexOf(2, 0));
//array Array.isArray method is return true if arrgument is an array otherwise false
Array.isArray(obj)
const arr = [1,2,3,4,5];
console.log(Array.isArray(arr));
//array join method is return array valu as string + arrgrument passes to join method
//array.join(separator)
const arr = [1,2,3,4,5];
console.log(arr.join(0));
//array copyWithin method return copied array value
//array.copyWithin(target, start, end)
const arr = [1,2,3,4,5];
console.log(arr.copyWithin(1, 2, 4));
//array keys method return keys of array object using itration
//array.keys()
const arr = [1,2,3,4,5];
let x = arr.keys();
for(z of x){
 console.log(z);
}