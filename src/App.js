import logo from './logo.svg';
import './App.css';
import { Routers } from './Routers';
import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
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

  //Remove
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

  //Edit
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

  //Search
  const getSearch = (searchItem) => {
    setSearchItem(searchItem);
    if (searchItem !== "") {
      const newProducts = products.filter((products) => {
        return Object.values(products).join(" ").toLowerCase().includes(searchItem.toLowerCase());
      });
      setSearchResults(newProducts);
    }
    else {
      setSearchResults(products);
    }
  };

  //PL giá
  const setSelectFrice = async (min, max) => {
    const respone = await fetch(`http://localhost:3001/products?price_gte=${min}&price_lte=${max}`);
    const data = await respone.json();
    setProducts(data);
  }

  const setPrice = async (event) => {
    if (event.target.value == "0") {
      const respone = await fetch(`http://localhost:3001/products`);
      const data = await respone.json();
      setProducts(data);
    }
    if (event.target.value == "1") {
      setSelectFrice(0, 100)
    }
    if (event.target.value == "2") {
      setSelectFrice(100, 500)
    }
    if (event.target.value == "3") {
      setSelectFrice(500, 1000)
    }
    if (event.target.value == "4") {
      setSelectFrice(10000, 10000000000000)
    }
  }

  //PL SP
  const selecttype = async (event) => {
    if (event.target.value == "0") {
      const respone = await fetch(`http://localhost:3001/products`);
      const data = await respone.json();
      setProducts(data);
    }
    if (event.target.value == "1") {
      const respone = await fetch(`http://localhost:3001/products?q=${"Đồ ăn"}`);
      const data = await respone.json();
      setProducts(data);
    }
    if (event.target.value == "2") {
      const respone = await fetch(`http://localhost:3001/products?q=${"Đồ uống"}`);
      const data = await respone.json();
      setProducts(data);
    }
  }

  //Phân trang
  const indexOfLastPost = currentPage * postsPerPage 
  const indexOfFirstpost = indexOfLastPost - postsPerPage
  const currentProducct = products.slice(indexOfFirstpost, indexOfLastPost)
  const pageNumber = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="App">
      <Routers
        products={searchItem.length < 1 ? currentProducct : searchResults}
        onAdd={addProduct}
        onRemove={removeProduct}
        onEdit={editProduct}
        searchItem={searchItem}
        searchKeyword={getSearch}
        setPrice={setPrice}
        setType={selecttype}
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        pageNb={pageNumber}


      />
    </div>
  );
}
export default App;
