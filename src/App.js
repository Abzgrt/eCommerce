import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Store from './Pages/Store';
import SingleProduct from './Pages/SingleProduct';
import Blog from './Pages/Blog';
import SingleBlog from './Pages/SingleBlog';
import CompareProduct from './Pages/CompareProduct';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword'
import Signup from './Pages/Signup';
import ResetPassword from './Pages/ResetPassword';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import ShippingPolicy from './Pages/ShippingPolicy';
import TermsAndConditions from './Pages/TermsAndConditions';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Success from './Pages/Success'
import Cancel from './Pages/Cancel'
import Order from './Pages/Order';
import Profile from './Pages/Profile';
import { PrivateRoute } from './routes/PrivateRoute';
import { OpenRoute } from './routes/OpenRoute';
 

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<Store />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="cart" element={<PrivateRoute><Cart /></PrivateRoute>} />  
            <Route path="order" element={<PrivateRoute><Order /></PrivateRoute>} />
            <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="checkout" element={<PrivateRoute><Checkout /></PrivateRoute>}  />
            <Route path="checkout/success" element={<PrivateRoute><Success /></PrivateRoute>}  />
            <Route path="checkout/cancel" element={<PrivateRoute><Cancel /></PrivateRoute>}  />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<PrivateRoute><Wishlist /></PrivateRoute>} />
            <Route path="login" element={<Login /> } />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="signup" element={<Signup /> } />
            <Route path="reset-password/:token" element={<ResetPassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-conditions" element={<TermsAndConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
