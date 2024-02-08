import React, { useState, useEffect }from 'react'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import Container from '../Components/Container';
import { useFormik } from 'formik';
import myContext from './myContext';

import * as yup from 'yup';
let shippingSchema = yup.object().shape({
  firstname: yup
    .string()
    .required("First name is Required"),
  lastname: yup
    .string()
    .required("Last name is Required"),
  address: yup
    .string()
    .required("Address is Required"),
  state: yup
    .string()
    .required("State is Required"),
  city: yup
    .string()
    .required("City is Required"),
  country: yup
    .string()
    .required("Country is Required"),
  pincode: yup
    .number()
    .required("Zipcode is Required"),
});

const Checkout = () => {
 
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth?.userCart);
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState({});
  const [showSusscess, setShowSusscess] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    let sum = 0;
    for(let index = 0; index < cartState?.length; index++) {
      sum += cartState[index].quantity * cartState[index].price;
      setTotalAmount(sum);
    }
  }, [cartState]);
 useEffect(() => {
  let items = [];
  for(let index = 0; index < cartState?.length; index++) {
    items.push({product:cartState[index]?.productId?._id, quantity: cartState[index]?.quantity, color: cartState[index]?.color?._id, price: cartState[index]?.price})
  }
  setCartProducts(items);
 },[cartState]);
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      address: "",
      state: "",
      city: "",
      country: "",
      pincode: "",
      other: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      setShippingInfo(values);
      sessionStorage.setItem('shippingInfo', JSON.stringify(values));
    }
  });
  
  const checkout = () => {
    fetch("http://localhost:5000/api/user/create-stripe-session", {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    mode: "cors",
    body: JSON.stringify(
      {cartItems: cartState}
    )
  })
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      return res.json().then(json => Promise.reject(json))
    })
    .then(({url}) => {
      window.location = url
      
    })
  }
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Abdisha</h3>
              <nav style={{"--bs-breadcrumb-divider": ">"}} aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className='text-dark total-price'>Cart</Link></li> &nbsp; / 
                  <li className="breadcrumb-item total-price active" aria-current="page">Information</li>&nbsp; /
                  <li className="breadcrumb-item total-price active">Shipping</li> &nbsp; /
                  <li className="breadcrumb-item total-price active" aria-current="page">Payment</li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">Abdi Bekele (abhope2022@gmail.com)</p>
              <h4 className='mb-3'>Shipping Address</h4>
              <form action="" className="d-flex gap-15 flex-wrap justify-content-between" onSubmit={formik.handleSubmit}>
                <div className="w-100">
                  <select name="country" value={formik.values.country} id="" className='form-control form-select' onChange={formik.handleChange("country")} onBlur={formik.handleBlur("country")}>
                    <option value="" selected disabled>Select Country</option>
                    <option value="Ethiopia" >Ethiopia</option>
                  </select>
                  <div className="errors mt-2 my-1">
                    {formik.touched.country && formik.errors.country }
                  </div>
                </div>
                <div className='flex-grow-1'>
                  <input 
                    type="text" 
                    name="firstname" 
                    placeholder="First Name" 
                    className="form-control" 
                    onChange={formik.handleChange("firstname")}
                    onBlur={formik.handleBlur("firstname")}/>
                  <div className="errors mt-2 my-1">
                    {formik.touched.firstname && formik.errors.firstname }
                  </div>
                </div>
                <div className='flex-grow-1'>
                <input 
                    type="text" 
                    name="lastname" 
                    placeholder="Last Name" 
                    className="form-control" 
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.handleBlur("lastname")}/>
                  <div className="errors mt-2 my-1">
                    {formik.touched.lastname && formik.errors.lastname }
                  </div>
                </div>
                <div className='w-100'>
                  <input 
                    type="text" 
                    name="address" 
                    placeholder="Address" 
                    className="form-control" 
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}/>
                  <div className="errors mt-2 my-1">
                    {formik.touched.address && formik.errors.address }
                  </div>
                </div>
                <div className='w-100'>
                <input 
                    type="text" 
                    name="other" 
                    placeholder="Appartment, Suite etc" 
                    className="form-control" 
                    onChange={formik.handleChange("other")}
                    onBlur={formik.handleBlur("other")}/>
                </div>
                <div className='flex-grow-1'>
                  <input 
                    type="text" 
                    name="city" 
                    placeholder="City" 
                    className="form-control" 
                    onChange={formik.handleChange("city")}
                    onBlur={formik.handleBlur("city")}/>
                  <div className="errors mt-2 my-1">
                    {formik.touched.city && formik.errors.city }
                  </div>
                </div>
                <div className='flex-grow-1'>
                <select name="state" id="" className='form-control form-select' onChange={formik.handleChange("state")} onBlur={formik.handleBlur("state")}>
                  <option value="" selected disabled>Select State</option>
                  <option value="Oromia" >Oromia</option>
                </select>
                <div className="errors mt-2 my-1">
                  {formik.touched.state && formik.errors.state }
                </div>
                </div>
                <div className='flex-grow-1'>
                  <input 
                    type="text" 
                    name="pincode" 
                    placeholder="Pincode" 
                    className="form-control" 
                    onChange={formik.handleChange("pincode")}
                    onBlur={formik.handleBlur("pincode")}/>
                  <div className="errors mt-2 my-1">
                    {formik.touched.pincode && formik.errors.pincode }
                  </div>
                </div>
                <div className="w-100 justify-content-between align-items-center ">
                  <div className="d-flex gap-30">
                      <Link to="/cart" className='text-dark mt-2'> <BiArrowBack /> Return to cart</Link>
                      <Link to="/product" className="button">Continue shopping</Link>
                      <button type="submit" className='button border-0' onClick={checkout}>Place Order</button>
                  </div>
                </div>
              </form>
            </div>
            
          </div>
          <div className="col-5">
            <div className='border-bottom py-4'>
            {
                cartState && cartState?.map((item, index) => {
                  return(
                    <div key={index} className="d-flex mb-2 gap-10 align-items-center">
                      <div className='w-75 d-flex gap-10'>
                        <div className='w-25 position-relative gb-dark cart-product-image'>
                          <span style={{top: "-20px", right: "-5px"}}className="badge bg-secondary text-white rounded-circle position-absolute p-2">
                            {item?.quantity}
                          </span>
                          <img src={item?.productId?.images[0]?.url? item.productId.images[0].url : "../images/watch.jpg"} alt="watch" className="img-fluid"/>
                        </div>
                        <div>
                          <h5 className=" total-price">{item?.productid?.title}</h5>
                          <p className='total-price'>{item?.color?.title}</p>
                        </div>
                      </div>
                      <div className='flex-grow-1'>
                        <h5 className='total'>$ {item?.price * item?.quantity}</h5>
                      </div>
                    </div>
                  )
                })
              }
              
            </div>
            <div className='border-bottom py-4'>
              {
                (totalAmount !== null || totalAmount !== 0) && 
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='total'>SubTotal</p>
                    <p className='total-price'>$ {totalAmount}</p>
                  </div>
              }
            </div>
            <div>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='mb-0 total'>Shipping</p>
                <p className='mb-0 total-price'>$ 5</p>
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
              <h4 className='total'>Total</h4>
              <h5 className='total-price'>$ {totalAmount? totalAmount + 5 : 0}</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Checkout
