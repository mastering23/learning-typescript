import { MyAwesomeApp } from "./MyAwesomeApp";
import { ItemCounter} from "./itemCounter";


export function FirstStepsApp(){

  return(
    <>
     <h1>Hello wolrd</h1>
     <p>esto es parrafo</p>
     <button>Click me </button>
     <MyAwesomeApp />
    <ItemCounter name ="PS 5" quantity={20}/>
    <ItemCounter name = "Xbox" quantity={10}/>
    <ItemCounter name = "Nitendo"quantity={16}/>
    </>

  );

}
