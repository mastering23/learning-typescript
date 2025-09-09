import { MyAwesomeApp } from "./MyAwesomeApp";
import { ItemCounter} from "./itemCounter";

interface ItemInCart{
  productName: string;
  quantity: number;
}

const intemsIncart : ItemInCart [] = [
{productName: 'PS 5',quantity:20},
{productName: 'Xbox',quantity:10},
{productName: 'Nintendo',quantity:16},

]

export function FirstStepsApp(){

  return(
    <>
     <h1>Hello wolrd</h1>
     <p>esto es parrafo</p>
     <button>Click me </button>
     <MyAwesomeApp />

     {intemsIncart.map(({productName,quantity})=>(
      <ItemCounter key={productName} name ={productName}quantity={quantity} />
     ))}
    {/* <ItemCounter name ="PS 5" quantity={20}/>
    <ItemCounter name = "Xbox" quantity={10}/>
    <ItemCounter name = "Nitendo"quantity={16}/> */}
    </>

  );

}
