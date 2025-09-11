import type { CSSProperties } from "react";

export const MyAwesomeApp = () => {

  const name1 = "David";
  const name2 = "Bruno";

  const foodTopics = ['Chesses', 'Tomato', 'Salsa', 'Pinapple'];

  const isActive = true;

  const address = {
    zipCode: '10040',
    country: 'USA',
  }

  const myStyles: CSSProperties = {
    backgroundColor: '#9c1515ff',
    color: 'white',
    borderRadius: 10,
    padding: 20,

  }

  return (
    <div>
      <h1>Fernando</h1>
      <h3>Herrera</h3>

      {/* Variables  */}
      <h2>{name1}</h2>
      <h2>{name2}</h2>

      {/* suma */}
      {2 + 2}

      {/* arreglos  */}
      <p>{foodTopics.join(', ')}</p>

      {/* ternarios  */}
      <h2>{isActive ? 'Activo' : 'No Activo'}</h2>

      {/* object  + css */}
      <p
        style={myStyles}
      >

        {JSON.stringify(address)}

      </p>

    </div>

  );

}