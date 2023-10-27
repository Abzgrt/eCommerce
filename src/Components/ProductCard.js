import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import {AiOutlineHeart} from "react-icons/ai";
import { addTowishlist } from '../features/product/productSlice';

// import watch from "images/watch.jpg"
// import watch from "../images/watch.svg";
// import watch from "../images/watch.svg";
// import watch from "../images/watch.jpg";
// import watch from "../images/watch-1.avif";
// import watch from "../images/add-cart.svg";
// import watch from "../images/watch.svg";
const ProductCard = (props) => {
  const navigate = useNavigate();
  const {grid, data, totalrating} = props;
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
                <div className="watch-icon position-absolute wishlist">
                  <AiOutlineHeart 
                    className="bg-transparent fs-5" 
                    onClick={(e) => wishlist(item?._id)}/>
                </div>
                <div className="product-image">
                  <img src="images/watch.jpg" className="img-fluid d-flex mx-auto" alt="product image" width={100}/>
                </div>
                <div className="product-details">
                  <h6 className="brand">{item?.brand}</h6>
                  <h5 className="product-title">{item?.title}</h5>
                  <ReactStars 
                    count={5} 
                    size={24} 
                    value={totalrating}
                    edit={false} 
                    activecolor="#ffd700"
                  />
                  <p dangerouslySetInnerHTML = {{__html: item?.description}}  >
                    {/* className={`description ${grid === 12 ? "d-block" : "d-none"}`} */}
                  
                  </p>
                  <p className="price">${item?.price}</p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-15">
                    <button className="border-0 bg-transparent">
                      <img src="images/eye.png" alt="view" onClick={() => navigate("/product/"+item?._id)}/>
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

