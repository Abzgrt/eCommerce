import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../Components/Container';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { getUserOrders } from '../features/user/userSlice';
import Color from "../Components/Color";
const Order = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  },[])
  const orderState = useSelector((state) => state?.auth?.userOrder);
  return (
    <>
      <BreadCrumb title="My Orders" />
      <Meta title="My Orders"/>
      <Container class1="cart-wrapper home-wrapper-2 py-5 mb-5">
        <div className="row" style={{backgroundColor: "#febd69"}}>
          <div className="col-12">
            <div className='row'>
              <div className="col-3">
                <h5>Order Id</h5>

              </div>
              <div className="col-3">
                <h5>Total Amount</h5>
                
              </div>
              <div className="col-3">
                <h5>Total Amount After Discount</h5>
                
              </div>
              <div className="col-3">
                <h5>Status</h5>
                
              </div>

            </div>
            
          </div>
          <div className="col-12">
           {
            orderState && <>
            <div className='row pt-3 my-3'>
              <div className="col-3">
                <p>{orderState?._id}</p>
              </div>
              <div className="col-3">
                <p>{orderState?.totalprice}</p>   
              </div>
              <div className="col-3">
                <p>{orderState?.totalpriceAfterDiscount}</p>  
              </div>
              <div className="col-3">
                <p>{orderState?.orderStatus}</p>    
              </div>
            </div>
            </> 
           }
           
            
          </div>
          <div className="col-12 mt-3">
            <div className='row py-3' style={{backgroundColor: "#232f3e"}}>
              <div className="col-3">
                <h6 className='text-white'>Product Name</h6>
              </div>
              <div className="col-3">
                <h6 className='text-white'>Quantity</h6>
                
              </div>
              <div className="col-3">
                <h6 className='text-white'>Price</h6>
                
              </div>
              <div className="col-3">
                <h6 className='text-white'>Color</h6>
                
              </div>
              {
                orderState?.orderItems?.map((item, index) => {
                  return (
                    <div className="col-12 mt-3" key={index}>
                      <div className='row p-3' >
                        <div className="col-3">
                          <p className='text-white'>{item?.product?.title}</p>
          
                        </div>
                        <div className="col-3">
                          <p className='text-white'>{item?.product.quantity}</p>
                          
                        </div>
                        <div className="col-3">
                          <p className='text-white'>{item?.product?.price}</p>
                          
                        </div>
                        <div className="col-3" >
                          <ul className="colors">
                            <li className="background" style={{backgroundColor: item?.color?.title}}></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Order
