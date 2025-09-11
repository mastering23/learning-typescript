import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./components/MyAwesomeApp";
import {render , screen} from "@testing-library/react";
// import { print } from "./helpers/math.helper";

describe('MyAwesomeApp',() =>{

test('Should render firstName and lastName' , () =>{
const {container} = render( <MyAwesomeApp />)
// print(container.innerHTML);
screen.debug();


const h1 = container.querySelector('h1');
const h3 = container.querySelector('h3');

expect(h1?.innerHTML).toContain('Fernando');
expect(h3?.innerHTML).toContain('Herrera');

});

});