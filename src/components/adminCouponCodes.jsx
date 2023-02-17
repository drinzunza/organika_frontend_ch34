import './adminCouponCodes.css';
import { useState } from 'react';

function AdminCouponCodes() {
  const [couponCode, setCouponCode] = useState({});

  function textChanged(e) {
    let text = e.target.value;
    let attr = e.target.name;

    let copy = { ...couponCode };
    copy[attr] = text;
    setCouponCode(copy);
  }

  function save() {
    console.log(couponCode);
  }

  return (
    <div className="ad-cc">
      <h3>Manage Coupon Codes</h3>

      <div className="my-control">
        <label className="form-label">Code:</label>
        <input name="code" onChange={textChanged} className="form-control" type="text" />
      </div>

      <div className="my-control">
        <label className="form-label">Discount:</label>
        <input name="discount" onChange={textChanged} className="form-control" type="number" />
      </div>

      <div className="my-control">
        <button onClick={save} className="btn btn-sm btn-dark">
          Save Coupon Code
        </button>
      </div>
    </div>
  );
}

export default AdminCouponCodes;
