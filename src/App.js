import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <h1>Hello from React</h1>

      <Footer></Footer>
    </div>
  );
}

export default App;


// Create a Footer component and render it below the h1