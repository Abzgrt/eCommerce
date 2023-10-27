import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../Components/Container';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { getUserOrders } from '../features/user/userSlice';
const Order = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.auth.userOrder);
  useEffect(() => {
    dispatch(getUserOrders());
  })
  return (
    <>
      <BreadCrumb title="My Orders" />
      <Meta title="My Orders"/>
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
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
            orderState && orderState?.map((item, index) => {
              return (
                <div style={{backgroundColor: "#febd69"}}className='row pt-3 my-3' key={index}>
                  <div className="col-3">
                    <p>{item?._id}</p>
    
                  </div>
                  <div className="col-3">
                    <p>{item?.totalprice}</p>
                    
                  </div>
                  <div className="col-3">
                    <p>{item?.totalpriceAfterDiscount}</p>
                    
                  </div>
                  <div className="col-3">
                    <p>{item?.orderStatus}</p>
                    
                  </div>
                  <div className="col-12 mt-3">
                    <div className='row py-3' style={{backgroundColor: "#232f3e"}}>
                      <div className="col-3">
                        <h6>Product Name</h6>
        
                      </div>
                      <div className="col-3">
                        <h6>Quantity</h6>
                        
                      </div>
                      <div className="col-3">
                        <h6>Price</h6>
                        
                      </div>
                      <div className="col-3">
                        <h6>Color</h6>
                        
                      </div>
                      {
                        item?.orderItems?.map((item, index) => {
                          return (
                            <div className="col-12 mt-3">
                              <div className='row p-3' >
                                <div className="col-3">
                                  <p classNa='text-white'>{item?.product?.title}</p>
                  
                                </div>
                                <div className="col-3">
                                  <p classNa='text-white'>{item?.product.quantity}</p>
                                  
                                </div>
                                <div className="col-3">
                                  <p classNa='text-white'>{item?.product?.price}</p>
                                  
                                </div>
                                <div className="col-3">
                                  <ul className="colors-0"><li style={{backgroundClor: item?.color}}></li></ul>
                                </div>
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                </div>
              </div>
              )
            })
           }
            
            </div>
        </div>
      </Container>
    </>
  )
}

export default Order
