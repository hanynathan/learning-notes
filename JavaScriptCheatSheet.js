//to return new copy (instance) of an object use function constructor
const f = () => {
  //return object
  return {

  }
}

const obj = new f(); //obj is a new copy of f object
//or use
Object.assign copies values from the provided object to a new object
const obj = {a : 2};
const newObj = Object.assign({}, obj);
newObj.a = 3;
obj.a;
// 2

//With the advent of ES6, this can also be done using the spread operator.
const newObj = {...obj};

///////////////////////////////////////////////////////////

//Currying
//Currying means breaking down a function that takes multiple arguments into one or multiple levels of higher-order functions.
const add = a => {
	return b => {
		return a + b;
	};
};
add(3)(4);

//The benefit of currying is memoization. We can now memoize certain arguments in a function call so that they can be reused later without duplication and re-computation.
// assume getOffsetNumer() call is expensive
const addOffset = add(getOffsetNumber());
addOffset(4);
// 4 + getOffsetNumber()
addOffset(6);
// 4 + getOffsetNumber()

//This is certainly better than using both arguments everywhere
// DON"T DO THIS
add(4, getOffsetNumber());
add(6, getOffsetNumber());
add(10, getOffsetNumber());


///////////////////////////////////////////////////
//Composition

//In mathematics, composition is defined as passing the output of one function into input of another so as to create a combined output.
//The same is possible in functional programming since we are using pure functions.
//The first function is range, which takes a starting number a and an ending number b and creates an array consisting of numbers from a to b.

const range = (a, b) => a > b ? [] : [a, ...range(a+1, b)];

//Then we have a function multiply that takes an array and multiplies all the numbers in it.

const multiply = arr => arr.reduce((p, a) => p * a);

//We will use these functions together to calculate factorial.

const factorial = n => multiply(range(1, n));
factorial(5);
// 120
factorial(6);
// 720
