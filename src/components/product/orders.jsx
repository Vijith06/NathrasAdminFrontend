// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const IP_ADDRESS = import.meta.env.VITE_BACKEND_URL;

// // const Order = () => {
// //   const [orders, setOrders] = useState([]);
// //   const [filteredOrders, setFilteredOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [filter, setFilter] = useState('All');

// //   const fetchOrders = async () => {
// //     try {
// //       const response = await axios.get(`${IP_ADDRESS}/api/orders`);
// //       const data = response.data;
// //       setOrders(data);
// //       applyFilter(filter, data);
// //       setLoading(false);
// //     } catch (err) {
// //       setLoading(false);
// //       setError('Failed to fetch orders');
// //       console.error(err);
// //     }
// //   };

// //   const applyFilter = (status, data = orders) => {
// //     setFilter(status);
// //     if (status === 'All') {
// //       setFilteredOrders(data);
// //     } else {
// //       const result = data.filter((order) =>
// //         status === 'Processed'
// //           ? order.status === 'Order Processed'
// //           : order.status !== 'Order Processed'
// //       );
// //       setFilteredOrders(result);
// //     }
// //   };

// //   const updateOrderStatus = async (orderId) => {
// //     const confirmed = window.confirm('Are you sure you want to mark this order as processed?');
// //     if (!confirmed) return;

// //     try {
// //       await axios.put(`${IP_ADDRESS}/api/orders/status`, {
// //         orderId,
// //         status: 'Order Processed',
// //       });
// //       fetchOrders();
// //     } catch (err) {
// //       console.error('Failed to update order status:', err);
// //       setError('Failed to update order status');
// //     }
// //   };

// //   useEffect(() => {
// //     fetchOrders();
// //   }, []);

// //   const styles = {
// //     container: {
// //       padding: '2rem',
// //       maxWidth: '1000px',
// //       margin: '0 auto',
// //       fontFamily: 'Arial, sans-serif',
// //     },
// //     heading: {
// //       textAlign: 'center',
// //       fontSize: '2rem',
// //       marginBottom: '1.5rem',
// //       color: '#2c3e50',
// //     },
// //     filterButtons: {
// //       display: 'flex',
// //       justifyContent: 'center',
// //       gap: '1rem',
// //       marginBottom: '1.5rem',
// //     },
// //     filterBtn: (active) => ({
// //       padding: '0.6rem 1rem',
// //       border: 'none',
// //       borderRadius: '20px',
// //       backgroundColor: active ? '#1e90ff' : '#dfe4ea',
// //       color: active ? 'white' : '#2c3e50',
// //       fontWeight: '600',
// //       cursor: 'pointer',
// //     }),
// //     ordersList: {
// //       display: 'flex',
// //       flexDirection: 'column',
// //       gap: '1rem',
// //     },
// //     card: {
// //       backgroundColor: '#fff',
// //       padding: '1rem',
// //       borderRadius: '12px',
// //       boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// //     },
// //     title: {
// //       marginBottom: '0.5rem',
// //       fontSize: '1.2rem',
// //       color: '#34495e',
// //     },
// //     processBtn: {
// //       marginTop: '0.5rem',
// //       padding: '0.5rem 1rem',
// //       backgroundColor: '#27ae60',
// //       color: 'white',
// //       border: 'none',
// //       borderRadius: '6px',
// //       cursor: 'pointer',
// //     },
// //     centered: {
// //       display: 'flex',
// //       flexDirection: 'column',
// //       alignItems: 'center',
// //       marginTop: '2rem',
// //     },
// //     errorText: {
// //       color: 'red',
// //       fontWeight: 'bold',
// //     },
// //   };

// //   if (loading) {
// //     return (
// //       <div style={styles.centered}>
// //         <p>Loading orders...</p>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div style={styles.centered}>
// //         <p style={styles.errorText}>{error}</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div style={styles.container}>
// //       <h1 style={styles.heading}>Order Management</h1>

// //       {/* Filter Buttons */}
// //       <div style={styles.filterButtons}>
// //         {['All', 'Pending', 'Processed'].map((type) => (
// //           <button
// //             key={type}
// //             style={styles.filterBtn(filter === type)}
// //             onClick={() => applyFilter(type)}
// //           >
// //             {type}
// //           </button>
// //         ))}
// //       </div>

// //       {/* Orders List */}
// //       <div style={styles.ordersList}>
// //         {filteredOrders.map((order) => (
// //           <div key={order._id} style={styles.card}>
// //             <h3 style={styles.title}>{order.productName}</h3>
// //             <p>Qty: {order.quantity}</p>
// //             <p>Total: ₹{order.totalAmount}</p>
// //             <p>Address: {order.address}</p>
// //             <p>Payment Mode: {order.paymentMode}</p>
// //             <p>Order Date: {new Date(order.orderDate).toLocaleString()}</p>
// //             <p>Status: <strong>{order.status}</strong></p>
// //             {order.status !== 'Order Processed' && (
// //               <button style={styles.processBtn} onClick={() => updateOrderStatus(order._id)}>
// //                 Mark as Processed
// //               </button>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Order;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const IP_ADDRESS = import.meta.env.VITE_BACKEND_URL;

// const Order = () => {
//   const [orders, setOrders] = useState([]);
//   const [filteredOrders, setFilteredOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [filter, setFilter] = useState('All');

//   const fetchOrders = async () => {
//     try {
//       const response = await axios.get(`${IP_ADDRESS}/api/orders`);
//       const data = response.data;
//       setOrders(data);
//       applyFilter(filter, data);
//       setLoading(false);
//     } catch (err) {
//       setLoading(false);
//       setError('Failed to fetch orders');
//       console.error(err);
//     }
//   };

//   const applyFilter = (status, data = orders) => {
//     setFilter(status);
//     if (status === 'All') {
//       setFilteredOrders(data);
//     } else {
//       const result = data.filter((order) =>
//         status === 'Processed'
//           ? order.status === 'Order Processed'
//           : order.status !== 'Order Processed'
//       );
//       setFilteredOrders(result);
//     }
//   };

//   const updateOrderStatus = async (orderId) => {
//     const confirmed = window.confirm('Are you sure you want to mark this order as processed?');
//     if (!confirmed) return;

//     try {
//       await axios.put(`${IP_ADDRESS}/api/orders/status`, {
//         orderId,
//         status: 'Order Processed',
//       });
//       fetchOrders();
//     } catch (err) {
//       console.error('Failed to update order status:', err);
//       setError('Failed to update order status');
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const styles = {
//     container: {
//       padding: '2rem',
//       maxWidth: '1000px',
//       margin: '0 auto',
//       backgroundColor: '#f8f9fa',
//       minHeight: '100vh',
//       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     },
//     heading: {
//       textAlign: 'center',
//       fontSize: '2.5rem',
//       marginBottom: '2rem',
//       color: '#1a2b6d',
//       fontWeight: '700',
//     },
//     filterButtons: {
//       display: 'flex',
//       justifyContent: 'center',
//       gap: '1rem',
//       marginBottom: '2rem',
//     },
//     filterBtn: (active) => ({
//       padding: '0.6rem 1.2rem',
//       borderRadius: '30px',
//       border: active ? '2px solid #1a2b6d' : '2px solid #ccc',
//       backgroundColor: active ? '#1a2b6d' : '#fff',
//       color: active ? '#fff' : '#1a2b6d',
//       fontWeight: '600',
//       cursor: 'pointer',
//       transition: 'all 0.3s',
//     }),
//     ordersList: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '1.2rem',
//     },
//     card: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'flex-start',
//       backgroundColor: '#fff',
//       padding: '1.5rem',
//       borderRadius: '12px',
//       boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
//       borderLeft: '5px solid #1a2b6d',
//       gap: '2rem',
//       flexWrap: 'wrap', // Responsive for smaller screens
//     },
//     cardLeft: {
//       flex: '2',
//       minWidth: '250px',
//     },
//     cardRight: {
//       flex: '1',
//       minWidth: '200px',
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '0.5rem',
//     },
//     title: {
//       marginBottom: '0.5rem',
//       fontSize: '1.4rem',
//       color: '#1a2b6d',
//       fontWeight: '600',
//     },
//     info: {
//       marginBottom: '0.3rem',
//       color: '#333',
//     },
//     processBtn: {
//       marginTop: '0.8rem',
//       padding: '0.6rem 1.2rem',
//       backgroundColor: '#1a2b6d',
//       color: 'white',
//       border: 'none',
//       borderRadius: '6px',
//       cursor: 'pointer',
//       fontWeight: '600',
//       transition: 'background-color 0.3s',
//     },
//     centered: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       marginTop: '2rem',
//     },
//     errorText: {
//       color: '#e74c3c',
//       fontWeight: 'bold',
//     },
//   };

//   if (loading) {
//     return (
//       <div style={styles.centered}>
//         <p>Loading orders...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={styles.centered}>
//         <p style={styles.errorText}>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Order Management</h1>

//       <div style={styles.filterButtons}>
//         {['All', 'Pending', 'Processed'].map((type) => (
//           <button
//             key={type}
//             style={styles.filterBtn(filter === type)}
//             onClick={() => applyFilter(type)}
//           >
//             {type}
//           </button>
//         ))}
//       </div>

//       <div style={styles.ordersList}>
//         {filteredOrders.map((order) => (
//           <div key={order._id} style={styles.card}>
//             <div style={styles.cardLeft}>
//               <h3 style={styles.title}>{order.productName}</h3>
//               <p style={styles.info}>Qty: {order.quantity}</p>
//               <p style={styles.info}>Total: ₹{order.totalAmount}</p>
//               <p style={styles.info}>Address: {order.address}</p>
//               <p style={styles.info}>Payment Mode: {order.paymentMode}</p>
//               <p style={styles.info}>Order Date: {new Date(order.orderDate).toLocaleString()}</p>
//             </div>
//             <div style={styles.cardRight}>
//               <p style={styles.info}>
//                 Status: <strong>{order.status}</strong>
//               </p>
//               {order.status !== 'Order Processed' && (
//                 <button style={styles.processBtn} onClick={() => updateOrderStatus(order._id)}>
//                   Mark as Processed
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Order;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IP_ADDRESS = import.meta.env.VITE_BACKEND_URL;

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('All');

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${IP_ADDRESS}/api/orders`);
      const data = response.data;
      setOrders(data);
      applyFilter(filter, data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError('Failed to fetch orders');
      console.error(err);
    }
  };

  const applyFilter = (status, data = orders) => {
    setFilter(status);
    if (status === 'All') {
      setFilteredOrders(data);
    } else {
      const result = data.filter((order) =>
        status === 'Processed'
          ? order.status === 'Order Processed'
          : order.status !== 'Order Processed'
      );
      setFilteredOrders(result);
    }
  };

  const updateOrderStatus = async (orderId) => {
    const confirmed = window.confirm('Are you sure you want to mark this order as processed?');
    if (!confirmed) return;

    try {
      await axios.put(`${IP_ADDRESS}/api/orders/status`, {
        orderId,
        status: 'Order Processed',
      });
      fetchOrders();
    } catch (err) {
      console.error('Failed to update order status:', err);
      setError('Failed to update order status');
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const styles = {
    pageWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    container: {
      padding: '2rem',
      width: '100%',
      maxWidth: '1000px',
      backgroundColor: '#fff',
      borderRadius: '16px',
      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
      overflow: 'auto',
      maxHeight: '90vh',
    },
    heading: {
      textAlign: 'center',
      fontSize: '2.5rem',
      marginBottom: '2rem',
      color: '#1a2b6d',
      fontWeight: '700',
    },
    filterButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '2rem',
    },
    filterBtn: (active) => ({
      padding: '0.6rem 1.2rem',
      borderRadius: '30px',
      border: active ? '2px solid #1a2b6d' : '2px solid #ccc',
      backgroundColor: active ? '#1a2b6d' : '#fff',
      color: active ? '#fff' : '#1a2b6d',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
    }),
    ordersList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.2rem',
    },
    card: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      backgroundColor: '#fff',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.28)',
      borderLeft: '5px solid #1a2b6d',
      gap: '2rem',
      flexWrap: 'wrap', // Responsive for smaller screens
    },
    cardLeft: {
      flex: '2',
      minWidth: '250px',
    },
    cardRight: {
      flex: '1',
      minWidth: '200px',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    title: {
      marginBottom: '0.5rem',
      fontSize: '1.4rem',
      color: '#1a2b6d',
      fontWeight: '600',
    },
    info: {
      marginBottom: '0.3rem',
      color: '#333',
    },
    processBtn: {
      marginTop: '0.8rem',
      padding: '0.6rem 1.2rem',
      backgroundColor: '#1a2b6d',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'background-color 0.3s',
    },
    centered: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh',
    },
    errorText: {
      color: '#e74c3c',
      fontWeight: 'bold',
    },
  };

  if (loading) {
    return (
      <div style={styles.pageWrapper}>
        <div style={styles.centered}>
          <p>Loading orders...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.pageWrapper}>
        <div style={styles.centered}>
          <p style={styles.errorText}>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Order Management</h1>

        <div style={styles.filterButtons}>
          {['All', 'Pending', 'Processed'].map((type) => (
            <button
              key={type}
              style={styles.filterBtn(filter === type)}
              onClick={() => applyFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div style={styles.ordersList}>
          {filteredOrders.length === 0 ? (
            <div style={styles.centered}>
              <p>No orders found for this filter.</p>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div key={order._id} style={styles.card}>
                <div style={styles.cardLeft}>
                  <h3 style={styles.title}>{order.productName}</h3>
                  <p style={styles.info}>ProductId: {order.productId}</p>
                  <p style={styles.info}>Qty: {order.quantity}</p>
                  <p style={styles.info}>Size: {order.size}</p>
                  <p style={styles.info}>Total: ₹{order.totalAmount}</p>
                  <p style={styles.info}>Address: {order.address}</p>
                  <p style={styles.info}>Payment Mode: {order.paymentMode}</p>
                  <p style={styles.info}>Order Date: {new Date(order.orderDate).toLocaleString()}</p>
                </div>
                <div style={styles.cardRight}>
                  <p style={styles.info}>
                    Status: <strong>{order.status}</strong>
                  </p>
                  {order.status !== 'Order Processed' && (
                    <button style={styles.processBtn} onClick={() => updateOrderStatus(order._id)}>
                      Mark as Processed
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;