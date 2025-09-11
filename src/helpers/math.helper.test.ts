import { describe, expect, test } from 'vitest';
import { add, mult, print, sub } from './math.helper';

//base example
// test('should add two positives numbers', () => {
  
//   const result = add(1,1);
  
//   print({ result });
  
//   if (result !== 2) {
//     throw new Error('El resultado no es 2');
//   }

// });

//testing base esto a las normativas actuales 
describe('add',()=>{
test('should add two positives numbers', () => {  
  const result = add(1,1);  
  expect(result).toBe(2);
});
});


describe('subtract',()=>{
test('should subtract two positives numbers', () => {  
 //! 1. Arrange
  const a = 1;
  const b = 2;

  // ! 2 ACt
  const result = sub(a,b);

  //! 3 Assert
  expect(result).toBe(a-b);

});
});

describe('subtract',()=>{
test('should subtract two negative numbers', () => {  
 //! 1. Arrange
  const a = -1;
  const b = -2;

  // ! 2 ACt
  const result = sub(a,b);

  //! 3 Assert
  expect(result).toBe(a-b);
  
});
});


describe('multiply',()=>{
test('should multiply two positives numbers', () => {  
 //! 1. Arrange
  const a = 1;
  const b = 2;

  // ! 2 ACt
  const result = mult(a,b);

  //! 3 Assert
  expect(result).toBe(a*b);

});
});

describe('multiply',()=>{
test('should multiply one positive numbers with 0 value', () => {  
 //! 1. Arrange
  const a = 1;
  const b = 0;

  // ! 2 ACt
  const result = mult(a,b);

  //! 3 Assert
  expect(result).toBe(a*b);

});
});