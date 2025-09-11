import{describe, expect, test} from 'vitest';
import { ItemCounter } from '../components/ItemCounter';
import { render , screen } from '@testing-library/react';

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

});