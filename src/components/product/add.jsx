// // src/components/product/add.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const SIZES = ['S', 'M', 'L', 'XL'];
// const CATEGORIES = ['Dresses', 'Women', 'Men', 'Kids'];

// export default function AddProduct() {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     discountedPrice: '',
//     sizes: [],
//     categories: [],
//     contact: '',
//     upi: '',
//     images: []
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleCheckbox = (e, field) => {
//     const value = e.target.value;
//     const checked = e.target.checked;
//     setFormData(prev => {
//       const updated = new Set(prev[field]);
//       checked ? updated.add(value) : updated.delete(value);
//       return { ...prev, [field]: [...updated] };
//     });
//   };

//   const handleImageChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       images: Array.from(e.target.files)
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append('name', formData.name);
//     data.append('description', formData.description);
//     data.append('price', formData.price);
//     data.append('discountedPrice', formData.discountedPrice);
//     data.append('contact', formData.contact);
//     data.append('upi', formData.upi);
//     formData.sizes.forEach(size => data.append('sizes', size));
//     formData.categories.forEach(cat => data.append('categories', cat));
//     formData.images.forEach(file => data.append('images[]', file));

//     try {
//       await axios.post(
//         `${import.meta.env.VITE_BACKEND_URL}/api/product`, // <-- Added API route here
//         data,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
//       alert('Product added successfully!');
//       handleCancel();
//     } catch (err) {
//       console.error(err);
//       alert('Failed to add product');
//     }}
    


//   const handleCancel = () => {
//     setFormData({
//       name: '',
//       description: '',
//       price: '',
//       discountedPrice: '',
//       sizes: [],
//       categories: [],
//       contact: '',
//       upi: '',
//       images: []
//     });
//   };

//   return (
//     <div className="form-container">
//       <h2 className="form-title">Add Product</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <input className="form-input" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required />
//         <textarea className="form-input" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
//         <input className="form-input" type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
//         <input className="form-input" type="number" name="discountedPrice" value={formData.discountedPrice} onChange={handleChange} placeholder="Discounted Price" />
//         <input className="form-input" type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" />
//         <input className="form-input" type="text" name="upi" value={formData.upi} onChange={handleChange} placeholder="UPI ID" />

//         <label className="form-label">Sizes:</label>
//         <div className="checkbox-group">
//           {SIZES.map(size => (
//             <label key={size} className="checkbox-label">
//               <input type="checkbox" value={size} checked={formData.sizes.includes(size)} onChange={e => handleCheckbox(e, 'sizes')} />
//               {size}
//             </label>
//           ))}
//         </div>

//         <label className="form-label">Categories:</label>
//         <div className="checkbox-group">
//           {CATEGORIES.map(cat => (
//             <label key={cat} className="checkbox-label">
//               <input type="checkbox" value={cat} checked={formData.categories.includes(cat)} onChange={e => handleCheckbox(e, 'categories')} />
//               {cat}
//             </label>
//           ))}
//         </div>

//         <label className="form-label">Upload Images:</label>
//         <input className="form-input" type="file" multiple accept="image/*" onChange={handleImageChange} />

//         <div className="button-group">
//           <button type="button" onClick={handleCancel} className="btn cancel-btn">Cancel</button>
//           <button type="submit" className="btn submit-btn">Submit</button>
//         </div>
//       </form>

//       {/* Embedded CSS */}
//       <style jsx="true">{`
     
//         .form-container {
//         width:85%;
//           margin-left:20rem;
//           margin-top:2rem;
//           margin-bottom:2rem;
//           margin-right:0%;
//           padding: 2rem;
//           border-radius: 12px;
//           box-shadow: 0 6px 50px rgba(98, 108, 156, 0.9);
//           background: #f9f9f9;
//           transition: box-shadow 0.3s ease;
//         }
//         .form-container:hover {
//           box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
//         }
//         .form-title {
//           text-align: center;
//           margin-bottom: 1.5rem;
//           font-size: 1.75rem;
//           color: #333;
//         }
//         .form {
//           display: flex;
//           flex-direction: column;
//           gap: 1rem;
//         }
//         .form-input {
//           padding: 0.75rem;
//           font-size: 1rem;
//           border: 1px solid #ccc;
//           border-radius: 8px;
//           transition: border-color 0.2s, box-shadow 0.2s;
//         }
//         .form-input:focus {
//           outline: none;
//           border-color: #4CAF50;
//           box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.3);
//         }
//         .form-label {
//           font-weight: bold;
//           color: #555;
//           margin-top: 1rem;
//         }
//         .checkbox-group {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 1rem;
//         }
//         .checkbox-label {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           cursor: pointer;
//           font-size: 0.95rem;
//           color: #333;
//         }
//         .button-group {
//           display: flex;
//           justify-content: space-between;
//           margin-top: 1.5rem;
//         }
//         .btn {
//           padding: 0.6rem 1.2rem;
//           border: none;
//           border-radius: 6px;
//           font-size: 1rem;
//           cursor: pointer;
//           transition: background 0.3s, transform 0.2s;
//         }
//         .cancel-btn {
//           background: #e0e0e0;
//         }
//         .cancel-btn:hover {
//           background: #ccc;
//           transform: scale(1.02);
//         }
//         .submit-btn {
//           background: #4CAF50;
//           color: white;
//         }
//         .submit-btn:hover {
//           background: #45a049;
//           transform: scale(1.02);
//         }
//       `}</style>
//     </div>
//   );
// }
// src/components/product/add.jsx
import React, { useState } from 'react';
import axios from 'axios';

const SIZES = ['S', 'M', 'L', 'XL'];
const CATEGORIES = ['Dresses', 'Women', 'Men', 'Kids'];

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    discountedPrice: '',
    sizes: [],
    categories: [],
    contact: '',
    upi: '',
    images: []
  });

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
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/product`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      alert('Product added successfully!');
      handleCancel();
    } catch (err) {
      console.error(err);
      alert('Failed to add product');
    }
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      discountedPrice: '',
      sizes: [],
      categories: [],
      contact: '',
      upi: '',
      images: []
    });
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
      backgroundColor: '#f5f5f5',
      padding: '20px',
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
        }}>Add New Product</h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Product Name" 
            required 
            style={styles.input}
          />
          
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            placeholder="Description" 
            style={styles.input}
          />
          
          <input 
            type="number" 
            name="price" 
            value={formData.price} 
            onChange={handleChange} 
            placeholder="Price" 
            required 
            style={styles.input}
          />
          
          <input 
            type="number" 
            name="discountedPrice" 
            value={formData.discountedPrice} 
            onChange={handleChange} 
            placeholder="Discounted Price" 
            style={styles.input}
          />
          
          <input 
            type="text" 
            name="contact" 
            value={formData.contact} 
            onChange={handleChange} 
            placeholder="Contact Number" 
            style={styles.input}
          />
          
          <input 
            type="text" 
            name="upi" 
            value={formData.upi} 
            onChange={handleChange} 
            placeholder="UPI ID" 
            style={styles.input}
          />

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
            <label style={styles.label}>Upload Images:</label>
            <input 
              type="file" 
              multiple 
              accept="image/*" 
              onChange={handleImageChange} 
              style={styles.input}
            />
          </div>

          <div style={styles.buttonGroup}>
            <button 
              type="button" 
              onClick={handleCancel} 
              style={styles.cancelButton}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              style={styles.submitButton}
            >
              Submit
            </button>
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
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    '::placeholder': {
      color: '#fff', 
    },
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
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
  submitButton: {
    padding: '12px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#2c3e50',
    color: '#fff',
    border: 'none',
    fontSize: '16px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  }
};