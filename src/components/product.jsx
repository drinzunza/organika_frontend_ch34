import './product.css';
import QuantityPicker from './quantityPicker';

function Product() {
  return (
    <div className="product">
      <img src="https://picsum.photos/220/180" alt=""></img>

      <h5>Title goes here</h5>

        <div className="prices">
            <label>Total</label>
            <label>Price</label>
        </div>

      <QuantityPicker></QuantityPicker>
      <button className='btn btn-sm btn-outline-primary'>Add</button>
    </div>
  );
}

export default Product;
