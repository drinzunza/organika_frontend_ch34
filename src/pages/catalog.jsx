import { useEffect, useState } from 'react';
import Product from '../components/product';
import DataService from '../services/dataService';
import "./catalog.css";

function Catalog() {
    const [products, setProducts] = useState([]);

    // when the component loads, do something
    useEffect(function(){
        console.log("component loaded");
        loadCatalog();
    }, []);

    function loadCatalog() {
        // get the products from the service
        let service = new DataService();
        let prods = service.getProducts();
        console.log(prods);        
        setProducts(prods); // put the results into the state var
    }

    function magicTest() {
        console.log("Behold, the magic!!");
        setProducts([]); // clears the array
    }

    return (
        <div className="catalog">
            <h1>Check our amazing products</h1>
            <h5>We have {products.length} products ready for you!</h5>

            <button onClick={magicTest} className="btn btn-danger">Magic</button>
            <br />            
            
            {products.map( p => <Product data={p}></Product> )}
        </div>
    );
}

export default Catalog;