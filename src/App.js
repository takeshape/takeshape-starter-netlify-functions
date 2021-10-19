import { useState, useEffect } from 'react';

function App() {

  const [productList, setProductList] = useState(null);

  useEffect(() => {
    (async ()=>{
      try{
        const result = await fetch('/.netlify/functions/fetch-products');
        const resultJSON = await result.json();
        setProductList(resultJSON.data.getProductList.items);
        console.log(resultJSON);
      } catch (err){
        console.log('Failed to do netlify function', err);
      }
    })();
  }, [])

  return (
    <main style={{width:'50%',margin:'auto', display:'flex', flexDirection:'column'}}>
      {productList && productList.map(product=>(
        <div key={product._id} style={{display:'flex', flexDirection:'column'}}>
          <img style={{maxWidth:'800px'}} src={product.image.sourceUrl}></img>
          <h2>{product.name}</h2>
          <b>{product.price}</b>
        </div>
      ))}
    </main>
  );
}

export default App;
