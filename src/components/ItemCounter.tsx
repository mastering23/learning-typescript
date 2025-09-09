import { useState } from "react";
import './css/ItemCounter.css';

interface Props {
  name: string;
  quantity?: number;
}
export const ItemCounter = ({ name, quantity = 1 }: Props) => {

  const [count, setCount] = useState(quantity);

  const handleAdd = () => {

    setCount(count + 1);
  }
  const handleSubtract = () => {
    if (count > 0)
      setCount(count - 1);
  }

  return (
    <section
      className="item-row"
    >
      <span
        className={`item-text`}
        style={{ color: count === 0 ? 'red' : 'black', }}>
        {name}</span>

      <button
        onClick={handleAdd}>+1</button>

      <span>{count}</span>

      <button onClick={handleSubtract}>-1</button>
    </section>

  );

}