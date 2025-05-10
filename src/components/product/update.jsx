// // import React, { useEffect, useState } from 'react';
// // import { useNavigate, useParams } from 'react-router-dom';
// // import axios from 'axios';

// // export default function Update() {
// //   const navigate = useNavigate();
// //   const { id } = useParams();
// //   const [product, setProduct] = useState({
// //     name: '',
// //     description: '',
// //     price: '',
// //     discountedPrice: '',
// //     images: [],
// //     sizes: [],
// //     categories: [],
// //     contact: '',
// //     upi: '',
// //   });
// //   const [selectedImages, setSelectedImages] = useState([]);
// //   const [sizes, setSizes] = useState(['S', 'M', 'L', 'XL']);
// //   const [categories, setCategories] = useState(['Dresses', 'Women', 'Men', 'Kids']);
// //   const [successMessage, setSuccessMessage] = useState('');

// //   useEffect(() => {
// //     fetchProduct();
// //   }, [id]);

// //   const fetchProduct = async () => {
// //     try {
// //       const url = `${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`;
// //       const res = await axios.get(url);
// //       setProduct(res.data.product);
// //     } catch (err) {
// //       console.error('Failed to fetch product:', err.message);
// //     }
// //   };

// //   const handleImageChange = (e) => {
// //     setSelectedImages(e.target.files);
// //   };

// //   const handleRemoveImage = (imageIndex) => {
// //     setProduct((prevProduct) => ({
// //       ...prevProduct,
// //       images: prevProduct.images.filter((_, index) => index !== imageIndex),
// //     }));
// //   };

// //   const handleUpdate = async (e) => {
// //     e.preventDefault();
// //     const formData = new FormData();
// //     formData.append('name', product.name);
// //     formData.append('description', product.description);
// //     formData.append('price', product.price);
// //     formData.append('discountedPrice', product.discountedPrice);
// //     formData.append('contact', product.contact);
// //     formData.append('upi', product.upi);
    
// //     // Append selected sizes and categories
// //     product.sizes.forEach((size) => formData.append('sizes[]', size));
// //     product.categories.forEach((category) => formData.append('categories[]', category));

// //     // Append new images if selected
// //     for (let i = 0; i < selectedImages.length; i++) {
// //       formData.append('images[]', selectedImages[i]);
// //     }

// //     try {
// //       const url = `${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`;
// //       await axios.put(url, formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });
// //       setSuccessMessage('Product updated successfully!');
// //       setTimeout(() => {
// //         navigate(`/display/${id}`);
// //       }, 1500); // Wait 1.5 seconds before navigating
// //     } catch (err) {
// //       console.error('Failed to update product:', err.message);
// //     }
// //   };

// //   const handleSizeChange = (e) => {
// //     const { value, checked } = e.target;
// //     if (checked) {
// //       setProduct((prevProduct) => ({
// //         ...prevProduct,
// //         sizes: [...prevProduct.sizes, value],
// //       }));
// //     } else {
// //       setProduct((prevProduct) => ({
// //         ...prevProduct,
// //         sizes: prevProduct.sizes.filter((size) => size !== value),
// //       }));
// //     }
// //   };

// //   const handleCategoryChange = (e) => {
// //     const { value, checked } = e.target;
// //     if (checked) {
// //       setProduct((prevProduct) => ({
// //         ...prevProduct,
// //         categories: [...prevProduct.categories, value],
// //       }));
// //     } else {
// //       setProduct((prevProduct) => ({
// //         ...prevProduct,
// //         categories: prevProduct.categories.filter((category) => category !== value),
// //       }));
// //     }
// //   };

// //   return (
// //     <div className="form-container">
// //       <h2 className="form-title">Update Product</h2>
// //       <form className="form" onSubmit={handleUpdate}>
// //         <div>
// //           <label className="form-label">Product Name</label>
// //           <input
// //             type="text"
// //             className="form-input"
// //             placeholder="Product Name"
// //             value={product.name}
// //             onChange={(e) => setProduct({ ...product, name: e.target.value })}
// //           />
// //         </div>

// //         <div>
// //           <label className="form-label">Description</label>
// //           <textarea
// //             className="form-input"
// //             placeholder="Description"
// //             value={product.description}
// //             onChange={(e) => setProduct({ ...product, description: e.target.value })}
// //           />
// //         </div>

// //         <div>
// //           <label className="form-label">Price</label>
// //           <input
// //             type="number"
// //             className="form-input"
// //             placeholder="Price"
// //             value={product.price}
// //             onChange={(e) => setProduct({ ...product, price: e.target.value })}
// //           />
// //         </div>

// //         <div>
// //           <label className="form-label">Discounted Price</label>
// //           <input
// //             type="number"
// //             className="form-input"
// //             placeholder="Discounted Price"
// //             value={product.discountedPrice}
// //             onChange={(e) => setProduct({ ...product, discountedPrice: e.target.value })}
// //           />
// //         </div>

// //         <div>
// //           <label className="form-label">Contact</label>
// //           <input
// //             type="text"
// //             className="form-input"
// //             placeholder="Contact"
// //             value={product.contact}
// //             onChange={(e) => setProduct({ ...product, contact: e.target.value })}
// //           />
// //         </div>

// //         <div>
// //           <label className="form-label">UPI</label>
// //           <input
// //             type="text"
// //             className="form-input"
// //             placeholder="UPI"
// //             value={product.upi}
// //             onChange={(e) => setProduct({ ...product, upi: e.target.value })}
// //           />
// //         </div>

// //         <div>
// //           <label className="form-label">Sizes</label>
// //           <div className="checkbox-group">
// //             {sizes.map((size) => (
// //               <label key={size} className="checkbox-label">
// //                 <input
// //                   type="checkbox"
// //                   value={size}
// //                   checked={product.sizes.includes(size)}
// //                   onChange={handleSizeChange}
// //                 />
// //                 {size}
// //               </label>
// //             ))}
// //           </div>
// //         </div>

// //         <div>
// //           <label className="form-label">Categories</label>
// //           <div className="checkbox-group">
// //             {categories.map((category) => (
// //               <label key={category} className="checkbox-label">
// //                 <input
// //                   type="checkbox"
// //                   value={category}
// //                   checked={product.categories.includes(category)}
// //                   onChange={handleCategoryChange}
// //                 />
// //                 {category}
// //               </label>
// //             ))}
// //           </div>
// //         </div>

// //         <div>
// //           <label className="form-label">Images</label>
// //           <input
// //             type="file"
// //             className="form-input"
// //             multiple
// //             onChange={handleImageChange}
// //           />
// //           <div className="image-preview">
// //             {product.images.map((img, index) => (
// //               <div key={index} className="image-container">
// //                 <img
// //                   src={img}
// //                   alt={`product-image-${index}`}
// //                   style={{ width: '100px', height: '100px', objectFit: 'cover' }}
// //                 />
// //                 <button
// //                   type="button"
// //                   className="remove-btn"
// //                   onClick={() => handleRemoveImage(index)}
// //                 >
// //                   Remove
// //                 </button>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {successMessage && <p className="success-message">{successMessage}</p>}

// //         <div className="button-group">
// //           <button type="button" className="btn cancel-btn" onClick={() => navigate(-1)}>
// //             Cancel
// //           </button>
// //           <button type="submit" className="btn submit-btn">
// //             Update
// //           </button>
// //         </div>
// //       </form>

// //       <style jsx="true">{`
// //         .form-container {
// //           width: 85%;
// //           margin-left: 20rem;
// //           margin-top: 2rem;
// //           margin-bottom: 2rem;
// //           margin-right: 0%;
// //           padding: 2rem;
// //           border-radius: 12px;
// //           box-shadow: 0 6px 50px rgba(98, 108, 156, 0.9);
// //           background: #f9f9f9;
// //           transition: box-shadow 0.3s ease;
// //         }
// //         .form-container:hover {
// //           box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
// //         }
// //         .form-title {
// //           text-align: center;
// //           margin-bottom: 1.5rem;
// //           font-size: 1.75rem;
// //           color: #333;
// //         }
// //         .form {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 1rem;
// //         }
// //         .form-input {
// //           padding: 0.75rem;
// //           font-size: 1rem;
// //           border: 1px solid #ccc;
// //           border-radius: 8px;
// //           transition: border-color 0.2s, box-shadow 0.2s;
// //         }
// //         .form-input:focus {
// //           outline: none;
// //           border-color: #4CAF50;
// //           box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.3);
// //         }
// //         .form-label {
// //           font-weight: bold;
// //           color: #555;
// //           margin-top: 1rem;
// //         }
// //         .checkbox-group {
// //           display: flex;
// //           flex-wrap: wrap;
// //           gap: 1rem;
// //         }
// //         .checkbox-label {
// //           display: flex;
// //           align-items: center;
// //           gap: 0.5rem;
// //           cursor: pointer;
// //           font-size: 0.95rem;
// //           color: #333;
// //         }
// //         .image-preview {
// //           display: flex;
// //           gap: 1rem;
// //           margin-top: 1rem;
// //         }
// //         .image-container {
// //           position: relative;
// //         }
// //         .remove-btn {
// //           position: absolute;
// //           top: 0;
// //           right: 0;
// //           background: rgba(255, 0, 0, 0.5);
// //           color: white;
// //           border: none;
// //           padding: 0.3rem 0.6rem;
// //           cursor: pointer;
// //           border-radius: 4px;
// //         }
// //         .success-message {
// //           color: #4CAF50;
// //           font-size: 1.2rem;
// //           text-align: center;
// //           margin-top: 1rem;
// //         }
// //         .button-group {
// //           display: flex;
// //           justify-content: space-between;
// //           margin-top: 1.5rem;
// //         }
// //         .btn {
// //           padding: 0.6rem 1.2rem;
// //           border: none;
// //           border-radius: 6px;
// //           font-size: 1rem;
// //           cursor: pointer;
// //           transition: background 0.3s, transform 0.2s;
// //         }
// //         .cancel-btn {
// //           background: #e0e0e0;
// //         }
// //         .cancel-btn:hover {
// //           background: #ccc;
// //           transform: scale(1.02);
// //         }
// //         .submit-btn {
// //           background: #4CAF50;
// //           color: white;
// //         }
// //         .submit-btn:hover {
// //           background: #45a049;
// //           transform: scale(1.02);
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// export default function Update() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [product, setProduct] = useState({
//     name: '',
//     description: '',
//     price: '',
//     discountedPrice: '',
//     images: [],
//     sizes: [],
//     categories: [],
//     contact: '',
//     upi: '',
//   });
//   const [selectedImages, setSelectedImages] = useState([]);
//   const [sizes, setSizes] = useState(['S', 'M', 'L', 'XL']);
//   const [categories, setCategories] = useState(['Dresses', 'Women', 'Men', 'Kids']);
//   const [successMessage, setSuccessMessage] = useState('');

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

//   const handleImageChange = (e) => {
//     setSelectedImages(e.target.files);
//   };

//   const handleRemoveImage = (imageIndex) => {
//     setProduct((prevProduct) => ({
//       ...prevProduct,
//       images: prevProduct.images.filter((_, index) => index !== imageIndex),
//     }));
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('name', product.name);
//     formData.append('description', product.description);
//     formData.append('price', product.price);
//     formData.append('discountedPrice', product.discountedPrice);
//     formData.append('contact', product.contact);
//     formData.append('upi', product.upi);
    
//     // Append selected sizes and categories
//     product.sizes.forEach((size) => formData.append('sizes[]', size));
//     product.categories.forEach((category) => formData.append('categories[]', category));

//     // Append new images if selected
//     for (let i = 0; i < selectedImages.length; i++) {
//       formData.append('images[]', selectedImages[i]);
//     }

//     try {
//       const url = `${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`;
//       await axios.put(url, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setSuccessMessage('Product updated successfully!');
//       setTimeout(() => {
//         navigate(`/display/${id}`);
//       }, 1500); // Wait 1.5 seconds before navigating
//     } catch (err) {
//       console.error('Failed to update product:', err.message);
//     }
//   };

//   const handleSizeChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setProduct((prevProduct) => ({
//         ...prevProduct,
//         sizes: [...prevProduct.sizes, value],
//       }));
//     } else {
//       setProduct((prevProduct) => ({
//         ...prevProduct,
//         sizes: prevProduct.sizes.filter((size) => size !== value),
//       }));
//     }
//   };

//   const handleCategoryChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setProduct((prevProduct) => ({
//         ...prevProduct,
//         categories: [...prevProduct.categories, value],
//       }));
//     } else {
//       setProduct((prevProduct) => ({
//         ...prevProduct,
//         categories: prevProduct.categories.filter((category) => category !== value),
//       }));
//     }
//   };

//   return (
//     <div className="form-container">
//       <div className="form-content">
//         <h2 className="form-title">Update Product</h2>
//         <form className="form" onSubmit={handleUpdate}>
//           <div className="form-group">
//             <label className="form-label">Product Name</label>
//             <input
//               type="text"
//               className="form-input"
//               placeholder="Product Name"
//               value={product.name}
//               onChange={(e) => setProduct({ ...product, name: e.target.value })}
//             />
//           </div>

//           <div className="form-group">
//             <label className="form-label">Description</label>
//             <textarea
//               className="form-input"
//               placeholder="Description"
//               value={product.description}
//               onChange={(e) => setProduct({ ...product, description: e.target.value })}
//             />
//           </div>

//           <div className="form-row">
//             <div className="form-group half-width">
//               <label className="form-label">Price</label>
//               <input
//                 type="number"
//                 className="form-input"
//                 placeholder="Price"
//                 value={product.price}
//                 onChange={(e) => setProduct({ ...product, price: e.target.value })}
//               />
//             </div>

//             <div className="form-group half-width">
//               <label className="form-label">Discounted Price</label>
//               <input
//                 type="number"
//                 className="form-input"
//                 placeholder="Discounted Price"
//                 value={product.discountedPrice}
//                 onChange={(e) => setProduct({ ...product, discountedPrice: e.target.value })}
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group half-width">
//               <label className="form-label">Contact</label>
//               <input
//                 type="text"
//                 className="form-input"
//                 placeholder="Contact"
//                 value={product.contact}
//                 onChange={(e) => setProduct({ ...product, contact: e.target.value })}
//               />
//             </div>

//             <div className="form-group half-width">
//               <label className="form-label">UPI</label>
//               <input
//                 type="text"
//                 className="form-input"
//                 placeholder="UPI"
//                 value={product.upi}
//                 onChange={(e) => setProduct({ ...product, upi: e.target.value })}
//               />
//             </div>
//           </div>

//           <div className="form-group">
//             <label className="form-label">Sizes</label>
//             <div className="checkbox-group">
//               {sizes.map((size) => (
//                 <label key={size} className="checkbox-label">
//                   <input
//                     type="checkbox"
//                     value={size}
//                     checked={product.sizes.includes(size)}
//                     onChange={handleSizeChange}
//                   />
//                   <span className="checkbox-text">{size}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="form-group">
//             <label className="form-label">Categories</label>
//             <div className="checkbox-group">
//               {categories.map((category) => (
//                 <label key={category} className="checkbox-label">
//                   <input
//                     type="checkbox"
//                     value={category}
//                     checked={product.categories.includes(category)}
//                     onChange={handleCategoryChange}
//                   />
//                   <span className="checkbox-text">{category}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="form-group">
//             <label className="form-label">Images</label>
//             <input
//               type="file"
//               className="form-input file-input"
//               multiple
//               onChange={handleImageChange}
//             />
//             <div className="image-preview">
//               {product.images.map((img, index) => (
//                 <div key={index} className="image-container">
//                   <img
//                     src={img}
//                     alt={`product-image-${index}`}
//                     className="preview-image"
//                   />
//                   <button
//                     type="button"
//                     className="remove-btn"
//                     onClick={() => handleRemoveImage(index)}
//                   >
//                     ×
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {successMessage && <p className="success-message">{successMessage}</p>}

//           <div className="button-group">
//             <button type="button" className="btn cancel-btn" onClick={() => navigate(-1)}>
//               Cancel
//             </button>
//             <button type="submit" className="btn submit-btn">
//               Update Product
//             </button>
//           </div>
//         </form>
//       </div>

//       <style jsx="true">{`
//         .form-container {
//           display: flex;
//           justify-content: center;
//           padding: 3rem 1rem;
//           background-color: #f8f9fa;
//           min-height: 100vh;
//         }
        
//         .form-content {
//           width: 100%;
//           max-width: 800px;
//           padding: 2.5rem;
//           border-radius: 16px;
//           box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
//           background: #ffffff;
//           transition: all 0.3s ease;
//         }
        
//         .form-title {
//           text-align: center;
//           margin-bottom: 2rem;
//           font-size: 2rem;
//           font-weight: 700;
//           color: #333;
//           position: relative;
//           padding-bottom: 1rem;
//         }
        
//         .form-title:after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 80px;
//           height: 4px;
//           background: linear-gradient(to right, #4CAF50, #8BC34A);
//           border-radius: 2px;
//         }
        
//         .form {
//           display: flex;
//           flex-direction: column;
//           gap: 1.5rem;
//         }
        
//         .form-group {
//           display: flex;
//           flex-direction: column;
//           gap: 0.5rem;
//         }
        
//         .form-row {
//           display: flex;
//           gap: 1.5rem;
//           flex-wrap: wrap;
//         }
        
//         .half-width {
//           flex: 1 1 calc(50% - 0.75rem);
//           min-width: 250px;
//         }
        
//         .form-label {
//           font-weight: 600;
//           color: #555;
//           font-size: 0.95rem;
//         }
        
//         .form-input {
//           padding: 0.85rem 1rem;
//           font-size: 1rem;
//           border: 1px solid #e0e0e0;
//           border-radius: 8px;
//           background-color: #f9f9f9;
//           transition: all 0.2s;
//           width: 100%;
//         }
        
//         .form-input:focus {
//           outline: none;
//           border-color: #4CAF50;
//           box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);
//           background-color: #fff;
//         }
        
//         .file-input {
//           padding: 0.75rem;
//           background-color: #f5f5f5;
//           cursor: pointer;
//         }
        
//         .checkbox-group {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 1rem;
//           margin-top: 0.5rem;
//         }
        
//         .checkbox-label {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           cursor: pointer;
//           padding: 0.5rem 1rem;
//           border-radius: 6px;
//           background-color: #f5f5f5;
//           transition: all 0.2s;
//         }
        
//         .checkbox-label:hover {
//           background-color: #e9e9e9;
//         }
        
//         .checkbox-label input[type="checkbox"] {
//           appearance: none;
//           -webkit-appearance: none;
//           width: 18px;
//           height: 18px;
//           border: 2px solid #4CAF50;
//           border-radius: 4px;
//           background-color: white;
//           cursor: pointer;
//           position: relative;
//         }
        
//         .checkbox-label input[type="checkbox"]:checked {
//           background-color: #4CAF50;
//         }
        
//         .checkbox-label input[type="checkbox"]:checked:after {
//           content: '';
//           position: absolute;
//           left: 5px;
//           top: 2px;
//           width: 5px;
//           height: 10px;
//           border: solid white;
//           border-width: 0 2px 2px 0;
//           transform: rotate(45deg);
//         }
        
//         .checkbox-text {
//           font-size: 0.95rem;
//           color: #333;
//         }
        
//         .image-preview {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 1rem;
//           margin-top: 1rem;
//         }
        
//         .image-container {
//           position: relative;
//           width: 120px;
//           height: 120px;
//           border-radius: 8px;
//           overflow: hidden;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         }
        
//         .preview-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }
        
//         .remove-btn {
//           position: absolute;
//           top: 5px;
//           right: 5px;
//           background: rgba(255, 0, 0, 0.7);
//           color: white;
//           border: none;
//           width: 24px;
//           height: 24px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 1.2rem;
//           cursor: pointer;
//           opacity: 0;
//           transition: opacity 0.2s;
//         }
        
//         .image-container:hover .remove-btn {
//           opacity: 1;
//         }
        
//         .success-message {
//           background-color: rgba(76, 175, 80, 0.1);
//           color: #4CAF50;
//           padding: 1rem;
//           border-radius: 8px;
//           font-size: 1rem;
//           text-align: center;
//           border-left: 4px solid #4CAF50;
//         }
        
//         .button-group {
//           display: flex;
//           justify-content: space-between;
//           margin-top: 1rem;
//           gap: 1rem;
//         }
        
//         .btn {
//           padding: 0.85rem 1.5rem;
//           border: none;
//           border-radius: 8px;
//           font-size: 1rem;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s;
//           flex: 1;
//         }
        
//         .cancel-btn {
//           background: #f0f0f0;
//           color: #555;
//         }
        
//         .cancel-btn:hover {
//           background: #e0e0e0;
//         }
        
//         .submit-btn {
//           background: linear-gradient(to right, #4CAF50, #8BC34A);
//           color: white;
//         }
        
//         .submit-btn:hover {
//           background: linear-gradient(to right, #43a047, #7cb342);
//           transform: translateY(-2px);
//           box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
//         }
        
//         @media (max-width: 768px) {
//           .form-content {
//             padding: 1.5rem;
//           }
          
//           .button-group {
//             flex-direction: column-reverse;
//           }
          
//           .form-row {
//             flex-direction: column;
//             gap: 1rem;
//           }
          
//           .half-width {
//             min-width: 100%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// export default function Update() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [product, setProduct] = useState({
//     name: '',
//     description: '',
//     price: '',
//     discountedPrice: '',
//     images: [],
//     sizes: [],
//     categories: [],
//     contact: '',
//     upi: '',
//   });
//   const [selectedImages, setSelectedImages] = useState([]);
//   const [sizes, setSizes] = useState(['S', 'M', 'L', 'XL']);
//   const [categories, setCategories] = useState(['Dresses', 'Women', 'Men', 'Kids']);
//   const [successMessage, setSuccessMessage] = useState('');

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

//   const handleImageChange = (e) => {
//     setSelectedImages(e.target.files);
//   };

//   const handleRemoveImage = (imageIndex) => {
//     setProduct((prevProduct) => ({
//       ...prevProduct,
//       images: prevProduct.images.filter((_, index) => index !== imageIndex),
//     }));
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('name', product.name);
//     formData.append('description', product.description);
//     formData.append('price', product.price);
//     formData.append('discountedPrice', product.discountedPrice);
//     formData.append('contact', product.contact);
//     formData.append('upi', product.upi);
    
//     // Append selected sizes and categories
//     product.sizes.forEach((size) => formData.append('sizes[]', size));
//     product.categories.forEach((category) => formData.append('categories[]', category));

//     // Append new images if selected
//     for (let i = 0; i < selectedImages.length; i++) {
//       formData.append('images[]', selectedImages[i]);
//     }

//     try {
//       const url = `${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`;
//       await axios.put(url, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setSuccessMessage('Product updated successfully!');
//       setTimeout(() => {
//         navigate(`/display/${id}`);
//       }, 1500); // Wait 1.5 seconds before navigating
//     } catch (err) {
//       console.error('Failed to update product:', err.message);
//     }
//   };

//   const handleSizeChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setProduct((prevProduct) => ({
//         ...prevProduct,
//         sizes: [...prevProduct.sizes, value],
//       }));
//     } else {
//       setProduct((prevProduct) => ({
//         ...prevProduct,
//         sizes: prevProduct.sizes.filter((size) => size !== value),
//       }));
//     }
//   };

//   const handleCategoryChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setProduct((prevProduct) => ({
//         ...prevProduct,
//         categories: [...prevProduct.categories, value],
//       }));
//     } else {
//       setProduct((prevProduct) => ({
//         ...prevProduct,
//         categories: prevProduct.categories.filter((category) => category !== value),
//       }));
//     }
//   };

//   return (
//     <div className="update-container">
//       <div className="update-form-wrapper">
//         <h2 className="update-title">Update Product</h2>
//         <form className="update-form" onSubmit={handleUpdate}>
//           <div className="form-group">
//             <label className="form-label">Product Name</label>
//             <input
//               type="text"
//               className="form-input"
//               placeholder="Product Name"
//               value={product.name}
//               onChange={(e) => setProduct({ ...product, name: e.target.value })}
//             />
//           </div>

//           <div className="form-group">
//             <label className="form-label">Description</label>
//             <textarea
//               className="form-input"
//               placeholder="Description"
//               rows="4"
//               value={product.description}
//               onChange={(e) => setProduct({ ...product, description: e.target.value })}
//             />
//           </div>

//           <div className="form-row">
//             <div className="form-group half-width">
//               <label className="form-label">Price</label>
//               <input
//                 type="number"
//                 className="form-input"
//                 placeholder="Price"
//                 value={product.price}
//                 onChange={(e) => setProduct({ ...product, price: e.target.value })}
//               />
//             </div>

//             <div className="form-group half-width">
//               <label className="form-label">Discounted Price</label>
//               <input
//                 type="number"
//                 className="form-input"
//                 placeholder="Discounted Price"
//                 value={product.discountedPrice}
//                 onChange={(e) => setProduct({ ...product, discountedPrice: e.target.value })}
//               />
//             </div>
//           </div>

//           <div className="form-row">
//             <div className="form-group half-width">
//               <label className="form-label">Contact</label>
//               <input
//                 type="text"
//                 className="form-input"
//                 placeholder="Contact"
//                 value={product.contact}
//                 onChange={(e) => setProduct({ ...product, contact: e.target.value })}
//               />
//             </div>

//             <div className="form-group half-width">
//               <label className="form-label">UPI</label>
//               <input
//                 type="text"
//                 className="form-input"
//                 placeholder="UPI"
//                 value={product.upi}
//                 onChange={(e) => setProduct({ ...product, upi: e.target.value })}
//               />
//             </div>
//           </div>

//           <div className="form-group">
//             <label className="form-label">Sizes</label>
//             <div className="size-selector">
//               {sizes.map((size) => (
//                 <label key={size} className={`size-option ${product.sizes.includes(size) ? 'selected' : ''}`}>
//                   <input
//                     type="checkbox"
//                     value={size}
//                     checked={product.sizes.includes(size)}
//                     onChange={handleSizeChange}
//                   />
//                   <span>{size}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="form-group">
//             <label className="form-label">Categories</label>
//             <div className="category-selector">
//               {categories.map((category) => (
//                 <label key={category} className={`category-option ${product.categories.includes(category) ? 'selected' : ''}`}>
//                   <input
//                     type="checkbox"
//                     value={category}
//                     checked={product.categories.includes(category)}
//                     onChange={handleCategoryChange}
//                   />
//                   <span>{category}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="form-group">
//             <label className="form-label">Images</label>
//             <input
//               type="file"
//               className="form-input file-input"
//               multiple
//               onChange={handleImageChange}
//             />
//             <div className="image-preview">
//               {product.images.map((img, index) => (
//                 <div key={index} className="image-item">
//                   <img
//                     src={img}
//                     alt={`product-image-${index}`}
//                     className="preview-image"
//                   />
//                   <button
//                     type="button"
//                     className="remove-image-btn"
//                     onClick={() => handleRemoveImage(index)}
//                   >
//                     ✕
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {successMessage && <div className="success-alert">{successMessage}</div>}

//           <div className="update-actions">
//             <button type="button" className="cancel-button" onClick={() => navigate(-1)}>
//               Cancel
//             </button>
//             <button type="submit" className="update-button">
//               Update Product
//             </button>
//           </div>
//         </form>
//       </div>

//       <style jsx="true">{`
//         .update-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           min-height: 100vh;
//           padding: 2rem;
//           background-color: #f0f2f5;
//         }
        
//         .update-form-wrapper {
//           width: 100%;
//           max-width: 800px;
//           background-color: white;
//           border-radius: 20px;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
//           padding: 2.5rem;
//           margin: 0 auto;
//         }
        
//         .update-title {
//           font-size: 2rem;
//           color: #333;
//           text-align: center;
//           margin-bottom: 2rem;
//           font-weight: 700;
//           position: relative;
//         }
        
//         .update-title:after {
//           content: "";
//           position: absolute;
//           bottom: -10px;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 60px;
//           height: 4px;
//           background: linear-gradient(90deg, #6371c7, #5563c1);
//           border-radius: 2px;
//         }
        
//         .update-form {
//           display: flex;
//           flex-direction: column;
//           gap: 1.5rem;
//         }
        
//         .form-group {
//           margin-bottom: 0.5rem;
//         }
        
//         .form-row {
//           display: flex;
//           gap: 1.5rem;
//           margin-bottom: 0.5rem;
//         }
        
//         .half-width {
//           flex: 1;
//         }
        
//         .form-label {
//           display: block;
//           font-weight: 600;
//           margin-bottom: 0.5rem;
//           color: #4a5568;
//           font-size: 0.95rem;
//         }
        
//         .form-input {
//           width: 100%;
//           padding: 0.75rem 1rem;
//           border: 1px solid #e2e8f0;
//           border-radius: 8px;
//           font-size: 1rem;
//           transition: all 0.3s;
//           background-color: #f9fafc;
//         }
        
//         .form-input:focus {
//           outline: none;
//           border-color: #6371c7;
//           box-shadow: 0 0 0 3px rgba(99, 113, 199, 0.15);
//           background-color: white;
//         }
        
//         .file-input {
//           padding: 0.6rem;
//           cursor: pointer;
//         }
        
//         .size-selector, .category-selector {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 0.8rem;
//           margin-top: 0.5rem;
//         }
        
//         .size-option, .category-option {
//           position: relative;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           padding: 0.5rem 1.2rem;
//           border-radius: 8px;
//           font-size: 0.9rem;
//           cursor: pointer;
//           background-color: #f1f5f9;
//           color: #4a5568;
//           border: 2px solid transparent;
//           transition: all 0.2s;
//         }
        
//         .size-option:hover, .category-option:hover {
//           background-color: #e2e8f0;
//         }
        
//         .size-option.selected, .category-option.selected {
//           border-color: #6371c7;
//           background-color: #eef1ff;
//           color: #6371c7;
//           font-weight: 600;
//         }
        
//         .size-option input, .category-option input {
//           position: absolute;
//           opacity: 0;
//           cursor: pointer;
//           height: 0;
//           width: 0;
//         }
        
//         .image-preview {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 1rem;
//           margin-top: 1rem;
//         }
        
//         .image-item {
//           position: relative;
//           width: 120px;
//           height: 120px;
//           border-radius: 10px;
//           overflow: hidden;
//           box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
//           border: 2px solid #f1f5f9;
//         }
        
//         .preview-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }
        
//         .remove-image-btn {
//           position: absolute;
//           top: 8px;
//           right: 8px;
//           width: 24px;
//           height: 24px;
//           border-radius: 50%;
//           background-color: rgba(255, 255, 255, 0.9);
//           color: #e53e3e;
//           border: none;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 12px;
//           cursor: pointer;
//           opacity: 0;
//           transition: opacity 0.2s;
//           box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//         }
        
//         .image-item:hover .remove-image-btn {
//           opacity: 1;
//         }
        
//         .success-alert {
//           background-color: #e6fffa;
//           color: #319795;
//           padding: 1rem;
//           border-radius: 8px;
//           font-weight: 500;
//           text-align: center;
//           border-left: 4px solid #38b2ac;
//           margin: 1rem 0;
//         }
        
//         .update-actions {
//           display: flex;
//           justify-content: flex-end;
//           gap: 1rem;
//           margin-top: 1.5rem;
//         }
        
//         .cancel-button {
//           padding: 0.75rem 1.5rem;
//           background-color: #f7fafc;
//           border: 1px solid #e2e8f0;
//           color: #4a5568;
//           border-radius: 8px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.2s;
//         }
        
//         .cancel-button:hover {
//           background-color: #edf2f7;
//         }
        
//         .update-button {
//           padding: 0.75rem 1.5rem;
//           background: linear-gradient(90deg, #6371c7, #5563c1);
//           color: white;
//           border: none;
//           border-radius: 8px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.2s;
//         }
        
//         .update-button:hover {
//           box-shadow: 0 4px 12px rgba(99, 113, 199, 0.3);
//           transform: translateY(-1px);
//         }
        
//         @media (max-width: 768px) {
//           .update-form-wrapper {
//             padding: 1.5rem;
//           }
          
//           .form-row {
//             flex-direction: column;
//             gap: 1rem;
//           }
          
//           .update-actions {
//             flex-direction: column-reverse;
//           }
          
//           .cancel-button, .update-button {
//             width: 100%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// src/components/product/UpdateProduct.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const SIZES = ['S', 'M', 'L', 'XL'];
const CATEGORIES = ['Dresses', 'Women', 'Men', 'Kids'];

export default function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    discountedPrice: '',
    sizes: [],
    categories: [],
    contact: '',
    upi: '',
    images: [],
  });

  useEffect(() => {
  const fetchProduct = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`);
      const product = res.data.product || res.data;

      setFormData({
        name: product.name || '',
        description: product.description || '',
        price: product.price ? String(product.price) : '',
        discountedPrice: product.discountedPrice ? String(product.discountedPrice) : '',
        sizes: Array.isArray(product.sizes) ? product.sizes : [],
        categories: Array.isArray(product.categories) ? product.categories : [],
        contact: product.contact || '',
        upi: product.upi || '',
        images: [],
      });
    } catch (err) {
      console.error('Error fetching product:', err);
      alert('Failed to fetch product data');
    }
  };

  fetchProduct();
}, [id]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e, field) => {
    const value = e.target.value;
    const checked = e.target.checked;
    setFormData(prev => {
      const updated = new Set(prev[field]);
      checked ? updated.add(value) : updated.delete(value);
      return { ...prev, [field]: [...updated] };
    });
  };

  const handleImageChange = (e) => {
    setFormData(prev => ({
      ...prev,
      images: Array.from(e.target.files)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('discountedPrice', formData.discountedPrice);
    data.append('contact', formData.contact);
    data.append('upi', formData.upi);
    formData.sizes.forEach(size => data.append('sizes', size));
    formData.categories.forEach(cat => data.append('categories', cat));
    formData.images.forEach(file => data.append('images[]', file));

    try {
      await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Product updated successfully!');
      navigate(-1); // or wherever you'd like to redirect
    } catch (err) {
      console.error('Update failed:', err);
      alert('Failed to update product');
    }
  };

  const handleCancel = () => {
    navigate(-1); // go back
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#f5f5f5',
      overflowY: 'auto'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '600px',
        margin: '40px 0'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '25px',
          color: '#2c3e50',
          fontSize: '24px'
        }}>Update Product</h2>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required style={styles.input} />
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" style={styles.input} />
          <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required style={styles.input} />
          <input type="number" name="discountedPrice" value={formData.discountedPrice} onChange={handleChange} placeholder="Discounted Price" style={styles.input} />
          <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact Number" style={styles.input} />
          <input type="text" name="upi" value={formData.upi} onChange={handleChange} placeholder="UPI ID" style={styles.input} />

          <div>
            <label style={styles.label}>Sizes:</label>
            <div style={styles.checkboxGroup}>
              {SIZES.map(size => (
                <label key={size} style={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    value={size}
                    checked={formData.sizes.includes(size)}
                    onChange={e => handleCheckbox(e, 'sizes')}
                    style={{ marginRight: '5px' }}
                  />
                  {size}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label style={styles.label}>Categories:</label>
            <div style={styles.checkboxGroup}>
              {CATEGORIES.map(cat => (
                <label key={cat} style={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    value={cat}
                    checked={formData.categories.includes(cat)}
                    onChange={e => handleCheckbox(e, 'categories')}
                    style={{ marginRight: '5px' }}
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label style={styles.label}>Upload New Images (optional):</label>
            <input type="file" multiple accept="image/*" onChange={handleImageChange} style={styles.input} />
          </div>

          <div style={styles.buttonGroup}>
            <button type="button" onClick={handleCancel} style={styles.cancelButton}>Cancel</button>
            <button type="submit" style={styles.submitButton}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  input: {
    width: '100%',
    padding: '12px 15px',
    marginBottom: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  label: {
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '10px',
    display: 'block',
  },
  checkboxGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    marginBottom: '10px',
  },
  checkboxLabel: {
    fontSize: '15px',
    color: '#333',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  cancelButton: {
    padding: '12px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#e0e0e0',
    color: '#333',
    border: 'none',
    fontSize: '16px',
  },
  submitButton: {
    padding: '12px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#2c3e50',
    color: '#fff',
    border: 'none',
    fontSize: '16px',
  },
};
