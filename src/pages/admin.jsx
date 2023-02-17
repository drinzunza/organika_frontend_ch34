import AdminCouponCodes from '../components/adminCouponCodes';
import AdminProducts from '../components/adminProducts';
import './admin.css';

function Admin() {
  return (
    <div className="admin">
      <h1>Store Administration</h1>

      <div className="parent">

        <AdminProducts></AdminProducts>

        <AdminCouponCodes></AdminCouponCodes>

      </div>
    </div>
  );
}

export default Admin;


/**
 * 
 * create the AdminCouponCodes component
 * on admin:
 *   import the componet
 *   render the component
 * 
 * 
 * on AdminCouponCodes
 * show a form to handle
 *    code
 *    discount
 * 
 * when the user clicks on the button, console log the object 
 * 
 */