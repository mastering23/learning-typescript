import { useState } from "react";

interface Props {
  name: string;
  quantity?: number;
}
export const ItemCounter = ({ name ,quantity =1}: Props) => {

  const [count,setCount] = useState(quantity);

  const handleAdd =()=>{

    setCount(count+1);
  }
  const handleSubtract =()=>{
    if(count>0)
    setCount(count-1);
  }

  // const handleClick =() =>{
  //     console.log(`click  en ${name}`);
  // }



  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}>

      <span style={{
        width: 150,
        marginTop: 20,
      }}>{name}</span>
     
      <button
        onClick={handleAdd}>+1</button>
      
      <span>{count}</span>
      
      <button  onClick={handleSubtract}>-1</button>
    </section>

  );

}