import React, { useState, useEffect }from 'react'
import axios from 'axios'
import { base_url } from "../utils/axiosConfig";
import {createUserOrder} from '../features/user/userSlice'
import {runFireWorks} from '../utils/runFireWorks';
import Checkout from './Checkout';

const Success = (props) => { 
    const {shippingInfo} = props
    console.log(shippingInfo)
    useEffect(() => {
        runFireWorks();
    }, [])
    return (
        <div className="success-box">
            <h1 style={{color: "green"}}>Payment Successful!</h1>
            <span style={{color: "#ea6b1d", margin: "60px"}}>Your order is in our system</span>
            <div className="success-img"> 
              <img src="../images/success.png" width="150px" height="150px"/>
            </div>
        </div>
    )
}

export default Success