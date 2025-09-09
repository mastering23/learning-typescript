interface Props {
  name: string;
  quantity?: number;
}
export const ItemCounter = ({ name, quantity }: Props) => {

  const handleClick =() =>{
      console.log(`click  en ${name}`);
  }


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
        onClick={handleClick}>+1</button>
      <span>{quantity}</span>
      
      <button>-1</button>
    </section>

  );

}