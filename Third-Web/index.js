//The programs in this language are called scripts.

//Array Method and properties
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
//array lenght method return the lenght of array (1 to so on...)
//array.length
//array.length = number
const arr = [1,2,3,4,5];
let x = arr.lenght = 2;
console.log(x);
//array lastIndexOf return the last index (last to start or right to left) for specific value
//array.lastIndexOf(item, start)
const arr = [1,2,3,4,5];
let x = arr.lastIndexOf(2);
console.log(x);
//array map method return the result of the function
//array.map(function(currentValue, index, arr), thisValue)

//in this case return array
const arr = [{firstname:"riki", lastname:"dhiman"},
             {firstname:"ramu", lastname:"kumar"}];
arr.map(function(item){
console.log([item.firstname ,item.lastname]);
});
//in this case return string
const arr = [{firstname:"riki", lastname:"dhiman"},
             {firstname:"ramu", lastname:"kumar"}];
arr.map(function(item){
console.log([item.firstname ,item.lastname].join("  "));
});
//array pop method return the deleted element from last
//array.pop()
const arr = [1,2,3,4,5,6];
let x = arr.pop();
console.log(x);
//array prototype method return the new prototype (only for own defined array)
//Array.prototype.name = value
function Person(first, last, eye) {
    this.firstName = first;
    this.lastName = last;
    this.eyeColor = eye;
  }
  const myFather = new Person("John", "Doe", "blue");
  const myMother = new Person("Sally", "Rally", "green");
  let x = Person.prototype.value = "english";
  console.log(x);
  //use case with array
  const arr = [1,2,3,4,5];
let x = Array.prototype.arr = "english";
console.log(x);
//array push method return the new item in array and also lenght
//array.push(item1, item2, ..., itemX)
const arr = [1,2,3,4,5];
let x = arr.push(6);
console.log(arr);
//arrray reduce method return reduce value or subtract all element in array with their own first array element 
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
const a = [200, 100, 50];
let x = a.reduce(test);
function test(total, num){
document.write(total - num);
}
//array reduceRight method return the value from right to left reduce in array object
//array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)
const a = [200, 100, 50];
let x = a.reduceRight(test);
function test(total, num){
console.log(total - num);
}
//array reverse method returns the reverse of the array object
//array.reverse()
const a = [200, 100, 50];
console.log(a.reverse());
//array shift method remove the first element in array
//array.shift()
const a = [200, 100, 50];
console.log(a.shift());
//array slice method returns the sliced element
//array.slice(start, end)
//example 1
const a = [200,150, 100, 50, 25];
console.log(a.slice(0, 3));
//example 2
const a = [200,150, 100, 50, 25];
console.log(a.slice(-4, -1));
//array some method returns true if function execute true 
//array.some(function(value, index, arr), this)
const a = [200,150, 100, 50, 25];
let x = a.some(test);
function test(num){
console.log(num > 25);
}
//one more example 
const a = [200,150, 100, 50, 25];
let x = a.some(test);
function test(num){
return num > document.getElementById('new').innerHTML;
}
//array sort method returns the sorted array items and also in case of number its use a function for right value
//array.sort(compareFunction)
const a = [200,150, 100, 50, 25];
console.log(a.sort(function(a,b){
return a - b;
}));
//array splice method returns the itmes removed in array and or added items to the array
//array.splice(index, howmany, item1, ....., itemX)
const a = ['riki', 'dhiman', 'ricky'];
let x = a.splice(2, 0, 'hello', 'wolrd');
console.log(a);
//array string method returns the object as a string sepreated by commas
//array.toString()
const a = ['riki', 'dhiman', 'ricky'];
console.log(a.toString());
//array unshift method returns the new array item in begining of the array items
//array.unshift(item1, item2, ..., itemX)
const a = ['riki', 'dhiman', 'ricky'];
console.log(a.unshift('hello', 'world'));
//more example
const a = ['riki', 'dhiman', 'ricky'];
const b = ['hello', 'world', 'new'];
console.log(a.unshift(b));
console.log(a);
//array valueOf method returns the orignal value of the array 
//array.valueOf()
const a = ['riki', 'dhiman', 'ricky'];
console.log(a.valueOf());


//Boolean Method and properties(note that: construtor and proptype are the properties for any data type)
//Boolean method returns true if the expression is gonna true
//Boolean(expression);
console.log(Boolean(2 > 1));
//Boolean toString method convert the boolean value to string
//boolean.toString()
let x = (Boolean(2 > 1));
console.log(typeof(toString(x)));
//Boolean valueOf method returns the true or false value of boolean expression
//boolean.valueOf()
let x = Boolean(2 > 1);
console.log(x.valueOf());


//Js Classes refrence



