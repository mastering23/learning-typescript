import{describe, expect, test} from 'vitest';
import { ItemCounter } from '../components/ItemCounter';
import { fireEvent, render , screen } from '@testing-library/react';

describe('ItemCounter',()=>{

  test('Should render with Default values', () =>{
    
    const name  =  'Test item';

    render(<ItemCounter name ={name} />);
    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();   

  });


    test('Should render with custom quantity', () =>{
    
    const name  =  'Test item';
    const quantity = 10;

    render(<ItemCounter name ={name} quantity={quantity} />);

    expect(screen.getByText(String(quantity))).toBeDefined();
    

  });


  
    test('Should increase count when +1 button is clicked', () =>{
    

    render(<ItemCounter name ={"Test item"} quantity={1} />);

    const [buttonAdd] = screen.getAllByRole('button');

    fireEvent.click(buttonAdd);

    expect(screen.getAllByText(String('2'))).toBeDefined();

  });

    
    test('Should decrease count when -1 button is clicked', () =>{
    

    render(<ItemCounter name ={"Test item"} quantity={5} />);

    const [,buttonSubtract] = screen.getAllByRole('button');

    fireEvent.click(buttonSubtract);
    
    expect(screen.getAllByText(String('4'))).toBeDefined();

  });

  test('Should not decrease count when -1 button is clicked and quantity is equal to zero', () =>{
    

    render(<ItemCounter name ={"Test item"} quantity={1} />);

    const [,buttonSubtract] = screen.getAllByRole('button');

    fireEvent.click(buttonSubtract);
    
    expect(screen.getAllByText(String('0'))).toBeDefined();

  });

  test('Should change to red when count is 0', ()=>{
  const name = 'Test item';
  render(<ItemCounter name={name} quantity={0} />);

  const itemText = screen.getByText(name);

  expect(itemText.style.color).toBe('red');

  })

    test('Should change to black when count is 1', ()=>{
  const name = 'Test item';
  render(<ItemCounter name={name} quantity={1} />);

  const itemText = screen.getByText(name);

  expect(itemText.style.color).toBe('black');

  })
});