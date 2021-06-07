import logo from './logo.svg';
import './App.css';
import { Routers } from './Routers';
import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('http://localhost:3001/products')
      const data = await response.json();
      setProducts(data);
    }
    getProducts();
  }, []);

  const addProduct = async (item) => {
    //goi api va them san pham
    await fetch('http://localhost:3001/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });
    //render ra man hinh
    setProducts([...products, item]);
  }

  const removeProduct = async (id) => {
    let confirmRemove = window.confirm('Bạn có chắc chắn muốn xóa không ?');
    if (confirmRemove) {
      await fetch(`http://localhost:3001/products/${id}`, {
        method: 'DELETE',
      });
      const newProducts = products.filter(product => product.id != id);
      setProducts(newProducts);
    }
  }

  const editProduct = async (product) => {
    await fetch(`http://localhost:3001/products/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
    const newProducts = products.map(item => (item.id === product.id ? product : item));
    setProducts(newProducts)
  }

  return (
    <div className="App">
      <Routers
        products={products}
        onAdd={addProduct}
        onRemove={removeProduct}
        onEdit={editProduct}
      />
    </div>
  );
}
export default App;
