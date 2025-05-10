// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// export default function Display() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
  
//   // Fetch the product details
//   useEffect(() => {
//     fetchProduct();
//   }, [id]);

//   const fetchProduct = async () => {
//     try {
//       const url = `${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`;
//       const res = await axios.get(url);
//       setProduct(res.data.product);
//     } catch (err) {
//       console.error('Failed to fetch product:', err.message);
//     }
//   };

//   // Delete the product
//   const handleDelete = async () => {
//     try {
//       const url = `${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`;
//       await axios.delete(url);

//       navigate('/');
//     } catch (err) {
//       console.error('Failed to delete product:', err.message);
//     }
//   };

//   // Navigate to the update page
//   const handleUpdate = () => {
//     navigate(`/update/${id}`);
//   };

//   return (
//     <div className="display-container">
//       {product ? (
//         <div className="product-card">
//        <div className="product-images">
//   {product.images.map((image, index) => (
//     <img
//       key={index}
//       src={image}  // Directly use the image URL
//       alt={`product-image-${index}`}
//       className="product-image"
//     />
//   ))}
// </div>
//           <div className="product-info">
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p className="price">
//               ₹{product.discountedPrice || product.price}
//               {product.discountedPrice && (
//                 <span className="strike"> ₹{product.price}</span>
//               )}
//             </p>
//             <div className="buttons">
//               <button onClick={handleUpdate} className="btn update-btn">Update</button>
//               <button onClick={handleDelete} className="btn delete-btn">Delete</button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p>Loading product details...</p>
//       )}

//       <style jsx="true">{`
//         .display-container {
//           width: 100%;
//           margin: 0;
//           padding: 2rem;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background: #f9f9f9;
//         }

//         .product-card {
//           width: 100%;
//           max-width: 600px;
//           background: white;
//           padding: 1rem;
//           border-radius: 12px;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
//           overflow: hidden;
//         }

//         .product-images {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//         }

//         .product-image {
//           width: 100%;
//           height: 180px;
//           object-fit: cover;
//           margin: 0.5rem;
//         }

//         .product-info {
//           padding: 1rem;
//           text-align: center;
//         }

//         .product-info h2 {
//           font-size: 1.5rem;
//           margin-bottom: 1rem;
//         }

//         .product-info p {
//           font-size: 1rem;
//           color: #4a4a4a;
//           margin-bottom: 1rem;
//         }

//         .price {
//           font-size: 1.2rem;
//           font-weight: bold;
//           color: #16a34a;
//         }

//         .strike {
//           color: #9ca3af;
//           text-decoration: line-through;
//           font-size: 1rem;
//           margin-left: 0.5rem;
//         }

//         .buttons {
//           display: flex;
//           justify-content: space-around;
//           margin-top: 1rem;
//         }

//         .btn {
//           padding: 0.75rem 1.4rem;
//           background: #3b82f6;
//           color: white;
//           border: none;
//           border-radius: 12px;
//           font-size: 1rem;
//           font-weight: 500;
//           cursor: pointer;
//           transition: background 0.3s ease;
//         }

//         .btn:hover {
//           background: #2563eb;
//         }

//         .update-btn {
//           background: #3b82f6;
//         }

//         .delete-btn {
//           background: #ef4444;
//         }

//         .delete-btn:hover {
//           background: #dc2626;
//         }
//       `}</style> 
    
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// export default function Display() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetchProduct();
//   }, [id]);

//   const fetchProduct = async () => {
//     try {
//       const url = `${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`;
//       const res = await axios.get(url);
//       setProduct(res.data.product);
//     } catch (err) {
//       console.error('Failed to fetch product:', err.message);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       const url = `${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`;
//       await axios.delete(url);
//       navigate('/');
//     } catch (err) {
//       console.error('Failed to delete product:', err.message);
//     }
//   };

//   const handleUpdate = () => {
//     navigate(`/update/${id}`);
//   };

//   return (
//     <div className="display-container">
//       {product ? (
//         <div className="product-card">
//           <div className="product-images">
//             {product.images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`product-image-${index}`}
//                 className="product-image"
//               />
//             ))}
//           </div>
//           <div className="product-info">
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p className="price">
//               ₹{product.discountedPrice || product.price}
//               {product.discountedPrice && (
//                 <span className="strike"> ₹{product.price}</span>
//               )}
//             </p>
//             <div className="buttons">
//               <button onClick={handleUpdate} className="btn update-btn">Update</button>
//               <button onClick={handleDelete} className="btn delete-btn">Delete</button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p style={{ color: '#2c3e50', fontSize: '1.1rem' }}>Loading product details...</p>
//       )}

//       <style jsx="true">{`
//         .display-container {
//           min-height: 100vh;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           padding: 2rem;
//           background-color: #f4f6f8;
//         }

//         .product-card {
//           background-color: #ffffff;
//           max-width: 600px;
//           width: 100%;
//           border-radius: 12px;
//           box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
//           overflow: hidden;
//         }

//         .product-images {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           gap: 10px;
//           padding: 1rem;
//         }

//         .product-image {
//           width: 100%;
//           max-width: 250px;
//           height: 180px;
//           object-fit: cover;
//           border-radius: 8px;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
//         }

//         .product-info {
//           padding: 2rem;
//           text-align: center;
//           color: #2c3e50;
//         }

//         .product-info h2 {
//           font-size: 1.75rem;
//           margin-bottom: 0.5rem;
//         }

//         .product-info p {
//           font-size: 1rem;
//           margin-bottom: 1rem;
//           color: #555;
//         }

//         .price {
//           font-size: 1.2rem;
//           font-weight: 600;
//           color: #16a34a;
//         }

//         .strike {
//           margin-left: 0.5rem;
//           text-decoration: line-through;
//           font-size: 1rem;
//           color: #9ca3af;
//         }

//         .buttons {
//           display: flex;
//           justify-content: center;
//           gap: 1rem;
//           margin-top: 1.5rem;
//         }

//         .btn {
//           padding: 0.75rem 1.5rem;
//           font-size: 1rem;
//           font-weight: 500;
//           border: none;
//           border-radius: 6px;
//           color: white;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }

//         .update-btn {
//           background-color: #3b82f6;
//         }

//         .update-btn:hover {
//           background-color: #2563eb;
//         }

//         .delete-btn {
//           background-color: #ef4444;
//         }

//         .delete-btn:hover {
//           background-color: #dc2626;
//         }

//         @media (max-width: 640px) {
//           .product-card {
//             margin: 1rem;
//           }

//           .buttons {
//             flex-direction: column;
//           }

//           .btn {
//             width: 100%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Display() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`;
      const res = await axios.get(url);
      setProduct(res.data.product);
    } catch (err) {
      console.error('Failed to fetch product:', err.message);
    }
  };

  const handleDelete = async () => {
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`;
      await axios.delete(url);
      navigate('/');
    } catch (err) {
      console.error('Failed to delete product:', err.message);
    }
  };

  const handleUpdate = () => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="display-container">
      <div className="content-wrapper">
        {product ? (
          <div className="product-card">
            <div className="product-images">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`product-image-${index}`}
                  className="product-image"
                />
              ))}
            </div>
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p className="price">
                ₹{product.discountedPrice || product.price}
                {product.discountedPrice && (
                  <span className="strike"> ₹{product.price}</span>
                )}
              </p>
              <div className="buttons">
                <button onClick={handleUpdate} className="btn update-btn">Update</button>
                <button onClick={handleDelete} className="btn delete-btn">Delete</button>
              </div>
            </div>
          </div>
        ) : (
          <p className="loading-text">Loading product details...</p>
        )}
      </div>

      <style jsx="true">{`
        .display-container {
          /* min-height: 100vh;
           width: 100%;
          display: flex;
           justify-content: center;
           align-items: center;
           padding: 0;
           margin: 0;
          background-color: #ffffff;*/
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

        .content-wrapper {
          max-width: 1200px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }

        .product-card {
          background-color: #ffffff;
          max-width: 700px;
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          border: 1px solid #eaeaea;
          margin: 0 auto;
        }

        .product-images {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          padding: 1.5rem;
        }

        .product-image {
          width: 100%;
          max-width: 250px;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .product-info {
          padding: 2rem;
          text-align: center;
          color: #2c3e50;
        }

        .product-info h2 {
          font-size: 1.8rem;
          color: #0f2c59;
          margin-bottom: 0.75rem;
        }

        .product-info p {
          font-size: 1.1rem;
          margin-bottom: 1.25rem;
          color: #4a4a4a;
        }

        .price {
          font-size: 1.4rem;
          font-weight: 600;
          color: #16a34a;
          margin-bottom: 1.5rem;
        }

        .strike {
          margin-left: 0.5rem;
          text-decoration: line-through;
          font-size: 1.1rem;
          color: #9ca3af;
        }

        .buttons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .btn {
          padding: 0.75rem 2rem;
          font-size: 1.1rem;
          font-weight: 500;
          border: none;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .update-btn {
          background-color: #0f2c59;
        }

        .update-btn:hover {
          background-color: #183e77;
          transform: translateY(-2px);
        }

        .delete-btn {
          background-color: #dc2626;
        }

        .delete-btn:hover {
          background-color: #b91c1c;
          transform: translateY(-2px);
        }

        .loading-text {
          color: #0f2c59;
          font-size: 1.2rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .product-card {
            margin: 1rem;
          }

          .product-info h2 {
            font-size: 1.6rem;
          }

          .product-info p {
            font-size: 1rem;
          }

          .buttons {
            flex-direction: column;
            gap: 1rem;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}