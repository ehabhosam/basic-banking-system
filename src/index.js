import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotFound from './Components/notFound';
import Customers from './Components/customers';
import Transaction from './Components/transaction';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './Components/navbar';
import About from './Components/about';
import Footer from './Components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div> 
  <BrowserRouter>
  <Navbar></Navbar>
    <ToastContainer />
    <Routes>
      <Route path='/' element ={<App />}/>
      <Route path='/notfound' element ={<NotFound />}/>
      <Route path='/customers' element ={<Customers />}/>
      <Route path='/about' element ={<About />}/>
      <Route path='/transaction/:id' element ={<Transaction/>}/>
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem", marginTop: '8vh', display: 'flex', alignItems: 'center', justifyContent: "center", flexDirection: "column"}}>
          <p>There's nothing here!</p>
          <br></br>
          <Link to={'/'}>Return home</Link> 
        </main>
      }
    />
    </Routes>
    <Footer />
  </BrowserRouter>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
