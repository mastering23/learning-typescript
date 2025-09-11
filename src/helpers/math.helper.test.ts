import { expect, test } from 'vitest';
import { add, print } from './math.helper';

//base example
// test('should add two positives numbers', () => {
  
//   const result = add(1,1);
  
//   print({ result });
  
//   if (result !== 2) {
//     throw new Error('El resultado no es 2');
//   }

// });

//testing base esto a las normativas actuales 

test('should add two positives numbers', () => {
  
  const result = add(1,1);  
  expect(result).toBe(2);
});