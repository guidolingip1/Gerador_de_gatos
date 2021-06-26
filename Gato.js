import { useState } from "react";

const Gato = () => {

  const [url, setUrl] = useState();
  function fetch_data() {
    fetch('https://api.thecatapi.com/v1/images/search').then(res => {
      if(res.ok){
        return res.json();
      }
      throw new Error('Failed to fetch');
    }).then(jsonRes => {
      console.log(jsonRes)
      setUrl(jsonRes[0].url);
    })
  }
  return ( 
    <div className="containerFora">
      <div className="container">
        <h1>Invocação dos Miau 😻</h1>
        <img src={url} className='gatoImg' />
        <button onClick={fetch_data} className='btn'>Gerar Miau</button>
      </div>
    </div>
   );
}
 
export default Gato;