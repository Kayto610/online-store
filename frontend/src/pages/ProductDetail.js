import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://online-store-rho-smoky.vercel.app/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product detail:', error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p style={{ padding: '2rem' }}>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: '300px', borderRadius: '8px' }} />
      <p><b>Harga:</b> Rp {product.price ? product.price.toLocaleString('id-ID') : 0}</p>
      <p><b>Kategori:</b> {product.category}</p>
      <p><b>Stok:</b> {product.stock}</p>
      <p><b>Deskripsi:</b> {product.description}</p>
    </div>
  );
};

export default ProductDetail;