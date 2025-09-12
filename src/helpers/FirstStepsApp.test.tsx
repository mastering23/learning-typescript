import { describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "../components/FirstStepsApp";
import { render,screen } from "@testing-library/react";

vi.mock('../components/ItemCounter', () => ({
 ItemCounter: () => <div data-testid="ItemCounter" />,

}));

describe('FirstStepsApp', () => {
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

});