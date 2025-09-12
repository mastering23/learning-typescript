/* eslint-disable @typescript-eslint/no-unused-vars */
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "../components/FirstStepsApp";
import { render,screen } from "@testing-library/react";


const mockItemCounter = vi.fn((_props:unknown)=>{
return(<div data-testid="ItemCounter"/>)

});


 vi.mock('../components/ItemCounter', () => ({
  ItemCounter:(props:unknown)=> mockItemCounter(props),

 }));

describe('FirstStepsApp', () => {

  //life cycles afterEach help to clean each mock to make sure each test start with clean state;

  afterEach(()=>{
    vi.clearAllMocks();
  })

  test('Should match snapshot', () => {

    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();

  });

  test('Should render the correct number of ItemCounter components', () => {

    render(<FirstStepsApp />);

    const ItemCounter = screen.getAllByTestId('ItemCounter');
    expect(ItemCounter.length).toBe(3); 

  screen.debug();
  });

  test('should render ItemCounter with correct props',() =>{
    render(<FirstStepsApp />)

    expect(mockItemCounter).toHaveBeenCalledTimes(3);

    expect(mockItemCounter).toHaveBeenCalledWith({
    name:'PS 5', quantity:20
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
    name:'Xbox', quantity:10 
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
    name:'Nintendo', quantity:16 
    });
  })

});