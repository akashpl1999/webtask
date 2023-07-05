import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


























{/* <form className='myform' onSubmit={formik.handleSubmit}>

<img className='logo2' src="./logo.jpg" alt='logo' />

   <h1 className='title'>Welcome</h1>

   <p className='p'>Login to Labs Monitoring System</p>


<input type='text' className='input' name="username"
    onChange={formik.handleChange}
    value={formik.values.username} />

{formik.touched.username && formik.errors.username ? (
    <div style={{ fontSize: "28px", color: "red" }}>{formik.errors.username}</div>
) : null}


<input type='text' className='input' name="email"
    onChange={formik.handleChange}
    value={formik.values.email} />

{formik.touched.email && formik.errors.email ? (
    <div style={{ fontSize: "28px", color: "red" }}>{formik.errors.email}</div>
) : null}


<input type='text' className='input' name="password"
    onChange={formik.handleChange}
    value={formik.values.password} />


{formik.touched.password && formik.errors.password ? (
    <div style={{ fontSize: "28px", color: "red" }}>{formik.errors.password}</div>
) : null}





<button type='submit' className='input btn' >submit</button>


</form> */}
