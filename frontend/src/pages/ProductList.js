import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Daftar Produk</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        {products.map((product) => (
          <div key={product._id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{product.name}</h3>
            <p>Rp {product.price ? product.price.toLocaleString('id-ID') : 0}</p>
            <Link to={`/products/${product._id}`}>Lihat Detail</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;