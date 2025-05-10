// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const adminUsername = 'admin';
//     const adminPassword = 'admin123';

//     if (username === adminUsername && password === adminPassword) {
//       const expiryTime = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
//       localStorage.setItem('auth', JSON.stringify({ loggedIn: true, expiry: expiryTime }));
//       navigate('/');
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Admin Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={styles.input}
//         />
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button type="submit" style={styles.button}>Login</button>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: 400,
//     margin: '80px auto',
//     padding: 30,
//     textAlign: 'center',
//   },
//   input: {
//     display: 'block',
//     width: '100%',
//     padding: 10,
//     marginBottom: 15,
//   },
//   button: {
//     padding: 10,
//     width: '100%',
//     backgroundColor: '#2ecc71',
//     color: 'white',
//     border: 'none',
//   },
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const adminUsername = 'admin';
    const adminPassword = 'admin123';

    if (username === adminUsername && password === adminPassword) {
const expiryTime = Date.now() + 1 * 60 * 60 * 1000; // 1 hour
      localStorage.setItem('auth', JSON.stringify({ loggedIn: true, expiry: expiryTime }));
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
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
      alignItems: 'center',
      backgroundImage: 'url("login bg.jpg")', // Assuming the image is named 'background.jpg' in the public folder
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adding slight transparency
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        width: '90%',
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '25px', color: '#2c3e50' }}>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 15px',
              marginBottom: '20px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 15px',
              marginBottom: '20px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
          {error && <p style={{ color: 'red', marginBottom: '15px', fontSize: '14px' }}>{error}</p>}
          <button 
            type="submit" 
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#2c3e50',
              color: '#fff',
              fontSize: '16px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;