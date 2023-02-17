import "./quantityPicker.css";
import {useState} from 'react';

function QuantityPicker(props) {
    let [quantity, setQuantity] = useState(1);
 
    function decrease() {        
        if (quantity === 1) return;

        let val = quantity - 1;
        setQuantity(val);
        props.onChange(val); // notify the parent
    }

    function increase() {
        let val = quantity + 1;
        setQuantity(val);
        props.onChange(val); // notify the parent
    }
    
    
    return (
      <div className="qt-picker">
        <button className='btn btn-sm btn-outline-dark' disabled={quantity === 1} onClick={decrease}>
          -
        </button>
        <label>{quantity}</label>
        <button className='btn btn-sm btn-outline-dark' onClick={increase}>+</button>
      </div>
    );
}

export default QuantityPicker;