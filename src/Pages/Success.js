import React, { useState, useEffect }from 'react'
import {useDispatch, useSelector} from "react-redux";
import {runFireWorks} from '../utils/runFireWorks';
import {createUserOrder} from '../features/user/userSlice'


const Success = () => { 
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state?.auth?.userCart)
    useEffect(() => {
        runFireWorks();
    }, [])
    const [shippingInfo, setShippingInfo] = useState(null);
    const [totalprice, setTotalprice] = useState(null);

    useEffect(() => {
        // Retrieve shipping information from session storage
        const storedShippingInfo = sessionStorage.getItem('shippingInfo');
        if (storedShippingInfo) {
          setShippingInfo(JSON.parse(storedShippingInfo));
        }
      }, []);
    useEffect(() => {
    let sum = 0;
    for(let index = 0; index < cartItems?.length; index++) {
        sum = cartItems[index].quantity * cartItems[index].price;
        setTotalprice(sum);
    }
    
    }, [cartItems])
    // for(let i = 0; i<cartItems.length; i++){

    //     console.log(cartItems[i].totalprice)
    // }
    useEffect(() => {
        let data = [];
        for(let i = 0; i < cartItems?.length; i++){
            data.push({
                product: cartItems[i]?.productId?._id, 
                color: cartItems[i]?.color?._id, 
                quantity: cartItems[i]?.quantity, 
                price: cartItems[i]?.price,
            })
        }
        dispatch(createUserOrder({shippingInfo: shippingInfo, orderItems: data, totalprice: totalprice}))
    })
    return (
        <div className="success-box">
            <h1 style={{color: "green"}}>Payment Successful!</h1>
            <span style={{color: "#ea6b1d", margin: "60px"}}>Your order is in our system</span>
            <div className="success-img"> 
              <img src="../images/success.png" width="150px" height="150px" alt="success"/>
            </div>
            
            {shippingInfo && (
            <div>
            <h2>Shipping Information:</h2>
            <p>First Name: {shippingInfo.firstname}</p>
            {/* Other shipping details */}
            </div>
           )}
        </div>
    )
}

export default Success