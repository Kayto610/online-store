import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h2 style={{ display: 'inline', marginRight: '2rem' }}>Toko Online</h2>
        <Link to="/" style={{ color: '#fff', marginRight: '1rem', textDecoration: 'none' }}>Home</Link>
        <Link to="/products" style={{ color: '#fff', textDecoration: 'none' }}>Produk</Link>
      </div>
      <div>
        {token ? (
          <button onClick={handleLogout} style={{ padding: '0.3rem 0.8rem', cursor: 'pointer' }}>Logout</button>
        ) : (
          <>
            <Link to="/login" style={{ color: '#fff', marginRight: '1rem', textDecoration: 'none' }}>Login</Link>
            <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;