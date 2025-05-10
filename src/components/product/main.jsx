// // src/pages/main.jsx
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function Main() {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const url = `${import.meta.env.VITE_BACKEND_URL}/api/product`;
//       console.log('Fetching products from:', url);
//       const res = await axios.get(url);
//       console.log('Products response:', res.data);
//       setProducts(res.data.products); // Ensure 'products' exists in response
//     } catch (err) {
//       console.error('Failed to fetch products:', err.message);
//     }
//   };
  
  
  
//   const filteredProducts = products.filter(p =>
//     p.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleProductClick = (id) => {
//     navigate(`/display/${id}`);
//   };

//   return (
//     <div className="main-container">
//       <input
//         className="search-input"
//         type="text"
//         placeholder="Search products..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <div className="product-grid">
//         {filteredProducts.map(product => (
//           <div
//             key={product._id}
//             className="product-card"
//             onClick={() => handleProductClick(product._id)}
//           >
//             <img src={product.images?.[0]} alt={product.name} className="product-image" />
//             <div className="product-info">
//               <h3>{product.name}</h3>
//               <p>₹{product.discountedPrice || product.price}</p>
//               {product.discountedPrice && <span className="strike">₹{product.price}</span>}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="bottom-buttons">
//         <button onClick={() => navigate('/add')} className="btn">Add Product</button>
//         <button onClick={() => navigate('/orders')} className="btn">Orders</button>
//       </div>

//       {/* Styles */}
//       <style jsx="true">{`
//   .main-container {
//           width:200%;
//           margin-left:10rem;
//           margin-top:2rem;
//           margin-bottom:2rem;
//           margin-right:0%;
//           padding: 2rem;
//           border-radius: 12px;
//           box-shadow: 0 6px 50px rgba(98, 108, 156, 0.9);
//           background: #f9f9f9;
//           transition: box-shadow 0.3s ease;
//   }

//   .search-input {
//     width: 95%;
//     padding: 0.75rem 1rem;
//     font-size: 1rem;
//     border-radius: 12px;
//     border: 1px solid #d1d5db;
//     margin-bottom: 1.5rem;
//     outline: none;
//     transition: border 0.2s;
//   }

//   .search-input:focus {
//     border-color: #3b82f6;
//     box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
//   }

//   .product-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
//     gap: 1rem;
//   }

//   .product-card {
//     background: white;
//     border-radius: 16px;
//     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.09);
//     overflow: hidden;
//     cursor: pointer;
//     transition: transform 0.2s, box-shadow 0.2s;
//     border: 1px solid #e5e7eb;
//   }

//   .product-card:hover {
//     transform: translateY(-4px);
//     box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
//   }

//   .product-image {
//     width: 100%;
//     height: 140px;
//     background: #f3f4f6;
//   }

//   .product-info {
//     padding: 0.75rem;
//     text-align: center;
//   }

//   .product-info h3 {
//     font-size: 1rem;
//     margin: 0.25rem 0;
//     font-weight: 600;
//     color: #111827;
//   }

//   .product-info p {
//     color: #16a34a;
//     font-weight: 700;
//     margin: 0;
//     font-size: 0.95rem;
//   }

//   .strike {
//     text-decoration: line-through;
//     color: #9ca3af;
//     font-size: 0.85rem;
//     margin-left: 0.4rem;
//   }

//   .bottom-buttons {
//     position: fixed;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     display: flex;
//     justify-content: space-around;
//     padding: 1rem;
//     background: #ffffff;
//     border-top: 1px solid #e5e7eb;
//     box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.03);
//   }

//   .btn {
//     padding: 0.75rem 1.4rem;
//     background: #3b82f6;
//     color: white;
//     border: none;
//     border-radius: 12px;
//     font-size: 1rem;
//     font-weight: 500;
//     cursor: pointer;
//     transition: background 0.3s ease;
//   }

//   .btn:hover {
//     background: #2563eb;
//   }

//   @media (max-width: 480px) {
//     .product-grid {
//       grid-template-columns: 1fr 1fr;
//     }
//   }
// `}</style>

//     </div>
//   );
// }

// src/pages/main.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Main() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
     setLoading(true);
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/product`;
      console.log('Fetching products from:', url);
      const res = await axios.get(url);
      console.log('Products response:', res.data);
      setProducts(res.data.products); // Ensure 'products' exists in response
    } catch (err) {
      console.error('Failed to fetch products:', err.message);
    }finally {
    setLoading(false); // stop loading
  }
  };
  
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleProductClick = (id) => {
    navigate(`/display/${id}`);
  };

  return (
    <div className="main-container">
       {loading ? (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    ) : (
      <>
    <div className="content-wrapper">
      <h1 className="main-heading">Welcome to Nathars</h1>
      <div className="search-container">

          <input
            className="search-input"
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="product-grid">
          {filteredProducts.map(product => (
            <div
              key={product._id}
              className="product-card"
              onClick={() => handleProductClick(product._id)}
            >
              <img src={product.images?.[0]} alt={product.name} className="product-image" />
             <div className="product-info">
                <h3>{product.name}</h3>
                <div className="price-row">
                  <p>₹{product.discountedPrice || product.price}</p>
                  {product.discountedPrice && (
                    <span className="strike">₹{product.price}</span>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>
        
      </div>

      <div className="bottom-buttons">
        <button onClick={() => navigate('/add')} className="btn">Add Product</button>
        <button onClick={() => navigate('/orders')} className="btn">Orders</button>
      </div>

      {/* Styles */}
      <style jsx="true">{`
        body {
          background-color: #f0f4f8;
          color: #1e3a5f;
          margin: 0;
          font-family: 'Inter', sans-serif;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          position: relative;
        }

        .main-container {
          max-width: 1000px;
          width: 100%;
          margin: 0 auto;
          padding: 2rem;
          box-sizing: border-box;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          overflow-y: auto;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
          .main-heading {
  font-size: 2rem;
  font-weight: 700;
  color: #1e3a5f;
  margin-bottom: 1.5rem;
}




        .loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
}

.loader {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #1e3a5f;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

        .content-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          margin-bottom: 4rem;
          text-align: center;
          padding: 1rem;
          max-height: calc(100vh - 8rem);
          overflow-y: auto;
        }

        .search-container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto 2rem;
          display: flex;
          justify-content: center;
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          border-radius: 8px;
          border: 1px solid #1e3a5f;
          outline: none;
          transition: border 0.2s;
          background-color: #ffffff;
          color: #1e3a5f;
        }

        .search-input::placeholder {
          color: #6b7280;
        }

        .search-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          justify-content: center;
        }

        .product-card {
          background: #ffffff;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          border: 1px solid #e5e7eb;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(30, 58, 95, 0.15);
          border-color: #1e3a5f;
        }

        .product-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
          background: #f3f4f6;
        }

        .product-info {
          padding: 1rem;
          text-align: center;
          background-color: #1e3a5f;
          color: #ffffff;
        }

        .product-info h3 {
          font-size: 1rem;
          margin: 0.25rem 0;
          font-weight: 600;
          color: #ffffff;
        }

        .product-info p {
          color: #10b981;
          font-weight: 700;
           margin: 0;
          font-size: 1rem;
        }

        .strike {
          text-decoration: line-through;
          color:rgb(218, 213, 213); /* red */
          font-size: 0.85rem;
           margin: 0;
                }

        .bottom-buttons {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 2rem;
          padding: 1rem;
          background: #ffffff;
          border-top: 1px solid #e5e7eb;
          box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
          z-index: 10;
        }

        .btn {
          padding: 0.75rem 1.75rem;
          background: #1e3a5f;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn:hover {
          background: #2c5282;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(44, 82, 130, 0.2);
        }

        @media (max-width: 768px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          
          .main-container {
            padding: 1.5rem;
            width: 90%;
          }
        }

        @media (max-width: 480px) {
          .product-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .bottom-buttons {
            gap: 1rem;
          }
          
          .btn {
            padding: 0.75rem 1.25rem;
          }
        }

        .price-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 0.25rem;
        }

      `}</style>

            </>
    )}

    </div>
  );
}
