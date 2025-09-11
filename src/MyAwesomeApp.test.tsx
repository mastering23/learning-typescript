import { describe, test } from "vitest";
import { MyAwesomeApp } from "./components/MyAwesomeApp";
import {render , screen} from "@testing-library/react";
import { print } from "./helpers/math.helper";

describe('MyAwesomeApp',() =>{

test('Should render firstName and lastName' , () =>{
const {container} = render( <MyAwesomeApp />)
// print(container.innerHTML);
screen.debug();
});

});