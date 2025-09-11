import { describe, expect, test } from "vitest";
import { FirstStepsApp } from "../components/FirstStepsApp";
import { render } from "@testing-library/react";

describe('FirstStepsApp',()=>{
test('Should match snapshot',()=>{
  const {container} = render (<FirstStepsApp />);

  expect(container).toMatchSnapshot();

  
})
  
});