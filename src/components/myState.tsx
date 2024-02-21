import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);


  function handleClick() {

    if(index >= 0 && index < 11){
    setIndex(index + 1);

}  
  }



  function handleClick2() {

    if(index > 0 ){

    setIndex(index - 1);

    }
  }

  let sculpture = sculptureList[index];
  return (
    <>

      <button className="myButton" onClick={handleClick2}>
       Indietro  
      </button>
      
      <button className="myButton" onClick={handleClick}>
        Avanti 
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
