// Problem One

/**
 * Task description: Write a method that verifies an argument is a plain object, not an array or null
 * Expected Result: True if object is plain, false otherwise. 
     ({ a: 1 }) => true, 
     ([1, 2, 3]) => false
 * Task complexity: 1 of 5
 * @param element - element to verify
 * @returns {boolean}
 */
export const isPlainObject = (element) => {
  throw new Error(`put your solution here ${element}`);
};
const data = { a: 1 };
console.log(isPlainObject(data)); // true

// Problem Two

/** 
  * Task description: Write a method that returns a deep array like [[key, value]] 
  * Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]] 
  * Task complexity: 1 of 5 
  * @param {Object} object - Any object to transform into array 
  * @returns {Array} - a deep array 
*/
export const makePairs = (object) => {
  throw new Error(`put your solution here ${object}`);
};
const data = { a: 1, b: 2 };
console.log(makePairs(data)); // [['a', 1], ['b', 2]]

// Problem Three

/** 
  * Task description: Write a method that returns new object without provided properties 
  * Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 } 
  * Task complexity: 2 of 5 
  * @param {Object} object - Any object 
  * @param {?} args - list of properties to remove from object 
  * @returns {Object} - New object without listed values 
*/
export const without = (object, ...args) => {
  throw new Error(`put your solution here ${object} ${args}`);
};
const data = { a: 1, b: 2 };
console.log(without(data, 'b')); // { a: 1 }

// Problem Four

/** 
  * Task description: Write a method that makes a shallow check is object empty 
  * Expected Result: ({}) => true, ({ a: undefined }) => true, 
      ({ a: 1 }) => false 
  * Empty values: '', null, NaN, undefined 
  * Task complexity: 2 of 5 
  * @param {Object} object - Object with values of primitive data types 
  * @returns {boolean} 
*/
export const isEmpty = (object) => {
  throw new Error(`put your solution here ${object}`);
};
const data = { a: 1, b: undefined };
const data2 = { a: undefined };
console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true

// Problem Five

/** 
  * Task description: Write a method that makes a shallow compare of two objects 
  * Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true 
  * Task complexity: 2 of 5 
  * @param {Object<string | number>} firstObj - Object with values of primitive data types 
  * @param {Object<string | number>} secondObj - Object with values of primitive data types 
  * @returns {boolean} 
*/
export const isEqual = (firstObject, secondObject) => {
  throw new Error(`put your solution here ${firstObject} ${secondObject}`);
};
const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false

// Problem Six

/** 
  * Task description: Write a method that invokes an array method on a specific path 
  * Expected Result: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3] 
  * Task complexity: 3 of 5 
  * @param {Object} object 
  * @param {String} path - path in an object to property 
  * @param {String} func - function to invoke 
  * @param {Array} [args] - list of args 
  * @returns {?} 
*/
export const invoke = (object, path, func, args) => {
  throw new Error(`put your solution here ${object} ${path} ${func} ${args}`);
};
const data = { a: { b: [1, 2, 3] } }
console.log(invoke(data, 'a.b', 'splice', [1, 2])); // [2, 3]

// Problem Seven

/** 
  * Task description: Write a method that makes a deep check is an object empty 
  * Empty values: '', null, NaN, undefined, [], {} 
  * Expected Result: ({}) => true, 
      ({ a: { b: undefined } }) => true, 
      ({ a: { b: [] } }) => true 
  * Task complexity: 3 of 5 
  * @param {?} element - Object with values of any data types 
  * @returns {boolean} 
*/
export const isEmptyDeep = (element) => {
  throw new Error(`put your solution here ${element}`);
};
const data = { a: { b: undefined } };
console.log(isEmptyDeep(data)); // true

// Problem Eight

/** 
  * Task description: Write a method that makes a deep compare of two objects 
  * Expected Result: True if objects are equal, false if objects are different ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true 
  * @param {Object} firstObj - Object of any values
  * @param {Object} secondObj - Object of any values
  * @returns {boolean} 
*/
export const isEqualDeep = (element) => {
  throw new Error(`put your solution here ${element}`);
};
const data = { a: 1, b: { c: 1 } };
const data2 = { a: 1, b: { c: 1 } };
const data3 = { a: 1, b: { c: 2 } };
console.log(isEqualDeep(data, data2)); // true
console.log(isEqualDeep(data, data3)); // false

// Problem Nine

/** 
  * Task description: Write a method that finds shallow intersections of objects 
  * Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 } 
  * @param {Object<string | number>} firstObj - Object with values of primitive data types 
  * @param {Object<string | number>} secondObj - Object with values of primitive data types 
  * @returns {Object} 
*/
export const intersection = (firstObject, secondObject) => {
  throw new Error(`put your solution here ${firstObject}, ${secondObject}`);
};
const data = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
console.log(intersection(data, data2)); // { b: 2 }

// Problem Ten

/** 
  * Task description: Write a method that finds all intersections of objects
  * Expected Result: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } } 
  * @param {Object} firstObj - Object with values of any data types
  * @param {Object} secondObj - Object with values of any data types
  * @returns {Object} 
*/
export const intersectionDeep = (firstObject, secondObject) => {
  throw new Error(`put your solution here ${firstObject}, ${secondObject}`);
};
const data = { a: 1, b: { c: 3 } };
const data2 = { c: 1, b: { c: 3 } };
console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }
