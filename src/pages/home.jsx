import './home.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Organika store</h1>
      <h4>Organic & fresh food, 1 click away!</h4>

      <Link className='btn btn-primary' to="/catalog">Check our amazing catalog</Link>
    </div>
  );
}

export default Home;