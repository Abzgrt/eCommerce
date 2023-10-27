import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import {AiFillDelete} from "react-icons/ai";
import Container from '../Components/Container';
import { getUserCart, removeProdFromCart} from '../features/user/userSlice';


const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(null);

  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getUserCart());
    
  }, []);
const deleteCartProduct = (id) => {
  dispatch(removeProdFromCart(id));
  setTimeout(() =>{dispatch(getUserCart());
  }, 200)
}
const userCartState = useSelector((state) => state?.auth?.userCart);


  useEffect(() => {
    let sum = 0;
    for(let index = 0; index < userCartState?.length; index++) {
      sum = sum + userCartState[index].quantity * userCartState[index].price;
      setTotalAmount(sum);
    }
  }, [userCartState])

  return (
    <>
      <Meta title={'Cart'} />
      <BreadCrumb title='Cart'/>
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header d-flex py-3 justify-content-between align-items-center ">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {
            userCartState && userCartState.map((item, index) => {
              return (
                <div key={index} className="cart-data d-flex justify-content-between align-items-center">
                  <div className="cart-col-1  d-flex align-items-center" >
                      <div className="w-25">
                        <img src="../images/watch.jpg" alt="product image" className="img-fluid"/>
                      </div>
                      <div className="w-75 mx-2">  
                        <p>{item?.productId.title}</p>
                        <p className="d-flex gap-3">Color:<ul className="colors ps-0">
                          <li style={{backgroundColor: item?.color.title}}></li>
                         </ul> 
                        </p>
                      </div>
                    </div>
                  <div className="cart-col-2">
                    <h5 className="price"> $ {item?.price}</h5>
                  </div>
                  <div className="cart-col-3 d-flex align-items-center ">
                    <div className="d-flex align-items-center gap-15">
                      <input type="number" className="form-control" min={1} max={10} value={item?.quantity} onChange={(e) => ""}/>
                      <AiFillDelete className="text-danger fs-5" onClick={() => {deleteCartProduct(item?._id)}}/>
                    </div>
                  </div> 
                  <div className="cart-col-4">
                    <h5 className="price"> $ {item?.price * item?.quantity}</h5>
                  </div>
                </div>
              )
            })
            }                   
          </div>
          <div className="col-12 py-2 mt-4">
            <div className='d-flex justify-content-between align-items-baseline'>
              <Link to="/product" className="button mt-4"> 
                Continue To Shopping
              </Link>
               {
                (totalAmount !== null || totalAmount !== 0) && 
                  <div className='d-flex flex-column align-items-end'>
                    <h4> SubTotal: $ {totalAmount}</h4>
                    <p> Taxes and free shipping calculated at checkout</p>
                    <Link to="/checkout" className='button'>Checkout</Link>
                  </div>
               }
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Cart



