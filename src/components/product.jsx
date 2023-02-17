import './product.css';
import QuantityPicker from './quantityPicker';
import { useEffect, useState } from 'react';

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  useEffect(function(){
    // when component loads
    console.log("Hello, I'm a product!");
  }, []);

  function onQuantityChange(qty){
    console.log("new value:" + qty);
    setQuantity(qty);
  }

  function getTotal(){
    let total = props.data.price * quantity;
    return total.toFixed(2);
  }

  function addProduct(){
    console.log("Adding " + quantity + " " + props.data.title)

    // console.log(`Adding ${quantity} ${props.data.title}`);
  }

  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt=""></img>

      <h5>{props.data.title}</h5>

        <div className="prices">
            <label>${ getTotal() }</label>
            <label>${props.data.price.toFixed(2)}</label>
        </div>

      <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
      <button onClick={addProduct} className='btn btn-sm btn-outline-primary'>Add</button>
    </div>
  );
}

export default Product;

/**
 * 
 * when the user clicks on the Add button
 * console log: Adding <Quantity> <Title>
 * example: Adding 3 Orange
 */