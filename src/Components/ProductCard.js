import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import {AiOutlineHeart} from "react-icons/ai";
import { addTowishlist } from '../features/product/productSlice';

import eye from "./Assets/eye.png"
// import watch from "../images/watch.svg";
// import watch from "../images/watch.svg";
// import watch from "../images/watch.jpg";
// import watch from "../images/watch-1.avif";
// import watch from "../images/add-cart.svg";
// import watch from "../images/watch.svg";
const ProductCard = (props) => {
  const navigate = useNavigate();
  const {grid, data} = props;
  
  const dispatch = useDispatch();
  const wishlist = (id) => {
      dispatch(addTowishlist(id));
  }

  
  let location = useLocation();
  return (
   <>
      {
        data?.map((item, index) => {
          return(
            <div 
              key = {index}
              className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}
            >
              <div className="product-card position-relative">
                <div className="position-absolute wishlist heart-icon-box" >
                  <AiOutlineHeart 
                    className="bg-transparent fs-5" 
                    onClick={(e) => wishlist(item?._id)}/>
                </div>
                <div className={`${grid === 12 ? "grid-12-product-image" : "product-image"}`}>
                  <img src={item?.images[0]?.url} className="img-fluid d-flex mx-auto"  alt="product image"/>
                </div>
                <div className="product-details">
                  <h6 className="brand">{item?.brand}</h6>
                  <h5 className="product-title">{item?.title}</h5>
                  <ReactStars 
                    count={5} 
                    size={24} 
                    value={item.totalrating}
                    edit={false} 
                    activecolor="#ffd700"
                  />
                  <p dangerouslySetInnerHTML = {{__html: item?.description}}  >
                    {/* className={`description ${grid === 12 ? "d-block" : "d-none"}`} */}
                  
                  </p>
                  <p className="price">${item?.price}</p>
                </div>
                <div className={`position-absolute ${grid === 12 ? "grid-12-action-bar" : "action-bar"}`}>
                  <div className="d-flex flex-column gap-15">
                    <button className="border-0 bg-transparent">
                      <img src={eye} alt="view" width="25px" height="25px" onClick={() => navigate("/product/"+item?._id)}/>
                    </button>
                  </div>    
                </div>
              </div>
            </div>
          )
        })
      }      
    </>  
  )
}

export default ProductCard

