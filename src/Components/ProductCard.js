import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation} from 'react-router-dom';
// import prodCompare from "../images/prodCompare.svg"
// import wish from "../images/wish.svg";
// import wishlist from "../images/wishlist.svg";
// import watch from "../images/watch.jpg";
// import watch2 from "../images/watch-1.avif";
// import addcart from "../images/add-cart.svg";
// import view from "../images/view.svg";
const ProductCard = (props) => {
  const {grid, data} = props;
  let location = useLocation();
  return (
   <>
     {
    //   data?.map((item, index) => {
    //     <div 
    //   key = {index}
    //   className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
    //   <Link to={`${
    //     location.pathname == "/" 
    //     ? "/product/:id" 
    //     : location.pathname == "/product/:id" 
    //     ? "/product/:id" 
    //     : ":id"
    //   }`}
    //     className="product-card position-relative">
    //     <div className="wishlist-icon position-absolute">
    //       <button>
    //         <img src={wish} alt="wishlist" />
    //       </button>
    //     </div>
    //     <div className="product-image">
    //       <img src={watch} className="img-fluid" alt="product image" />
    //       <img src={watch2} className="img-fluid" alt="product image" />
    //     </div>
    //     <div className="product-details">
    //         <h6 className="brand">{item?.brand}</h6>
    //         <h5 className="product-title">{itme?.title}</h5>
    //         <ReactStars 
    //           count={5} 
    //           size={24} 
    //           value={item?.totalRating.toString()} 
    //           edit={false} 
    //           activecolor="#ffd700"
    //         />
    //         <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
    //           dangerouslySetInnerHTML = {{__html: item?.description}}
    //         </p>
    //         <p className="price">${itme?.price}</p>
    //     </div>
    //     <div className="action-bar position-absolute">
    //       <div className="d-flex flex-column gap-15">
    //         <button calssName="border-0 bg-transparent">
    //           <img src={prodCompare} alt="compare" />
    //         </button>
    //         <button calssName="border-0 bg-transparent">
    //           <img src={view} alt="view" />
    //         </button>
    //         <button calssName="border-0 bg-transparent">
    //           <img src={addCart} alt="addcart" />
    //         </button>
    //       </div>    
    //     </div>
    //   </Link>
    // </div>
    //   })
     }
     {/* <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
      <Link to=':id' className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wishlist.png" alt="" />
          </Link>
        </div>
        <div className="product-image">
          <img src="../images/iPhone.jpg" alt="" />
        </div>
        <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">Kids headphones bulk 10 pack multi colored for students</h5>
            <ReactStars 
              count={5} 
              size={24} 
              value="3" 
              edit={false} 
              activecolor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos pariatur, sed illo eos nesciunt autem voluptate! 
            </p>
            <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/eye.png" width='30px' height='30px' alt="addcart" />
            </Link>
            <Link>
              <img src="images/eye.png" width='30px' height='30px' alt="addcart" />
            </Link>
            <Link>
              <img src="images/eye.png" width='30px' height='30px' alt="addcart" />
            </Link>
          </div>    
        </div>
      </Link>
    </div> */}
    
   </>
    
  )
}

export default ProductCard

