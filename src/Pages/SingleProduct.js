import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReactStars from 'react-rating-stars-component';
import {TbGitCompare} from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import ProductCard from '../Components/ProductCard';
import Marquee from 'react-fast-marquee';
import Container from '../Components/Container';
import ReactImageZoom from 'react-image-zoom';
import Color from "../Components/Color";
import {getAProduct, addRating} from '../features/product/productSlice';
import userSlice, { addProdToCart, getUserCart } from '../features/user/userSlice';
import {toast} from 'react-toastify';
import { getAllProducts } from '../features/product/productSlice';

const SingleProduct = () => {
  const [color, setColor] = useState(null);
  const [popularProduct, setPopularProduct] = useState([]);
  const [quantity, setQuantity]= useState(1)
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  
  const navigate = useNavigate();
  const [star, setStar] = useState(0);
  const [comment, setComment] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  
  const location = useLocation();
  const prodId = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  const addRatingToProduct = () => {
    if(star === null){
      toast.error("Please rate the product!");
      return false;
    }
    else if(comment === null){
      toast.error("Please write a comment about the product!");
      return false;
    }
    else{
      dispatch(addRating({star: star, comment: comment, prodId: prodId}));
      setTimeout(() => {
        dispatch(getAProduct(prodId));
      }, 100)
    }
    return false;
  }
  
  
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getUserCart());
    dispatch(getAProduct(prodId));
   
  }, []);
  const cartState = useSelector((state) => state?.auth?.userCart);
  const singleProductState = useSelector((state) => state?.product?.singleProduct);
  const rating = useSelector((state) => state?.product?.rating)
  const prodCategory = singleProductState?.category;
  
  const productState = useSelector((state) => state?.product?.products);
   
  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if(prodId === cartState[index]?.productId?._id) {
        setAlreadyAdded(true);
     }
  }
}, []);

useEffect(() => {
  let data = [];
  for(let i = 0; i < productState.length; i++) {
    const element = productState[i];
    if(element.tags === "popular"){
      
      data.push(element);
      setPopularProduct(data);
      
    }
}}, [productState]);
  const uploadCart = () => {
    if( color === null){
      toast.error("Please choose color!")
      return false
    }
    else{
      dispatch(addProdToCart({productId: singleProductState?._id,quantity,color,price:singleProductState?.price}));
      navigate('/cart');
    }
  }
  const props = {
    width: 400,
    height: 600, 
    zoomwidth: 600, 
    img:  singleProductState?.images[0]?.url ? singleProductState?.images[0]?.url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdP7coACNI1bDkkKvFpDXhL6P-jGPLyhlAw&usqp=CAU"}
  const [orderedProduct, setOrderedProduct] = useState(true);
  const copyToClipboard = (text) =>{
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }
  const handleButtonClick = (event) => {
    event.preventDefault();
    setIsButtonClicked(true);
  };
  return (
    <>
      <Meta title={singleProductState?.title} />
      <BreadCrumb title={singleProductState?.title}/>
      <Container class1="main-product-wrapper py-5 home-wrapper-2" >
        <div className="row">
          <div className="col-6">
            <div className="main-product-img">
              <img src={singleProductState?.images[0]?.url ? singleProductState?.images[0]?.url : "Product image"} />
              {/* <div>
                <ReactImageZoom {...props}/> 
              </div> */}
            </div>
            {/* <div className="other-product-images d-flex flex-wrapp mt-1 border-radius gap-15">
                {
                  singleProductState?.images.map((item, index) => {
                    return (
                      <div key={index} >
                        <img src={item?.url} 
                          className="img-fluid"
                          alt="product image"
                        />
                      </div>  
                    )
                  })
                }
            </div> */}
          </div>
            <div className="col-6">
              <div className="main-product-details border-radius">
                <div className="border-bottom">
                  <h3 className='title'>
                    {
                      singleProductState?.title
                    }
                  </h3>
                  <div className="border-bottom py-3">
                    <p className="price"> $ {singleProductState?.price}</p>
                    <div className="d-flex align-items-center gap-10">
                    
                    <p className="mb-0 t-review"> (2 Reviews)</p>
                    </div>
                    <a href="#review" className='review-btn'> Write a Review</a>
                  </div>
                  <div className=" py-3">
                    <div className='d-flex align-items-center gap-10 my-2'>
                      <h3 className='product-heading'>Type :</h3>
                      <p className="product-data">Watch</p>
                    </div>
                    <div className='d-flex align-items-center gap-10 my-2'>
                      <h3 className='product-heading'>Brand :</h3>
                      <p className="product-data">{singleProductState?.brand}</p>
                    </div>
                    <div className='d-flex align-items-center gap-10 my-2'>
                      <h3 className='product-heading'>Category :</h3>
                      <p className="product-data">{singleProductState?.category}</p>
                    </div>
                    <div className='d-flex align-items-center gap-10 my-2'>
                      <h3 className='product-heading'>Tags :</h3>
                      <p className="product-data">{singleProductState?.tags}</p>
                    </div>
                    <div className='d-flex align-items-center gap-10 my-2'>
                      <h3 className='product-heading'>Availability :</h3>
                      <p className="product-data"> In Stock</p>
                    </div>
                    {
                      prodCategory === "close" &&
                      <>
                        <div className='d-flex flex-column gap-10 mt-2 mb-3'>
                          <h3 className='product-heading'>Size :</h3>
                          <div className="d-flex flex-wrap gap-15">
                            <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                            <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                            <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                            <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                          </div>
                        </div>
                      </>
                    }
                    {
                      alreadyAdded === false && <>
                      <div className='d-flex gap-10 mt-2 mb-3'>
                        <h3 className='product-heading'>Color :</h3>
                        <Color setColor = {setColor} colorData={singleProductState?.color}/>
                      </div>
                      </>
                    }
                    <div className='d-flex flex-row align-items-center gap-15 mt-2 mb-3'>
                      {
                        alreadyAdded === false && <>
                        <h3 className='product-heading'>Quantity :</h3>
                        <div>
                          <input 
                            type="number" 
                            min={1} 
                            max={10} 
                            
                            className="form-control"
                            onChange={(e) => setQuantity(e.target.value)}
                            value={quantity}
                            />  
                          </div>
                        </>
                      }
                      <div className={alreadyAdded ?  "ms-0" : "mb-5" + `d-flex align-items-center gap-30` }>
                        <button 
                          className="button border-0" 
                          // data-bs-toggle="modal"
                          // data-bs-target="#staticbackdrop"
                          type='submit' 
                          onClick={() => { alreadyAdded ? navigate('/cart') : uploadCart();
                            
                        }}>
                          {alreadyAdded ? "Go to Cart" : "Add to Cart"}
                        </button>
                        <Link to='/signup' className='button signup'>Buy Now</Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-15">
                      <div>
                        <a href=""> <TbGitCompare className="fs-5 me-2"/> Add to Compare</a>
                      </div>
                      <div>
                        <a href=""> <TbGitCompare className="fs-5 me-2"/> Add to Wishlist</a>
                      </div>
                    </div>
                    <div className='d-flex flex-column  gap-10 my-2 my-3'>
                      <h3 className='product-heading'>Shipping  & Returns :</h3>
                      <p className="product-data">Free shipping and returns available on all orders! </p>
                    </div>
                    <div className='d-flex align-items-center gap-10 my-2 my-3'>
                      <h3 className='product-heading'>Copy Product Link :</h3>
                      <a 
                        href="" onClick = {() => {
                          copyToClipboard(window.location.href);
                         }}>
                        Copy Product Link
                      </a>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
        </div>
      </Container>   
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white border-radius p-3">
                <p dangerouslySetInnerHTML = {{__html: singleProductState?.description}}></p>
              </div>
            </div> 
          </div>
        </div>
      </Container>
      <Container className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="review" >Reviews</h3>
              <div className="review-inner-wrapper border-radius">
                <div className="review-head d-flex justify-content-between align-items-end">
                    <div>
                      <h4 className='mb-2'>Customer Reviews</ h4>
                      <div className="d-flex align-items-center gap-10">
                        {
                          singleProductState && (
                            <ReactStars 
                              count={5} 
                              size={24} 
                              value={singleProductState?.totalrating}
                              edit={false} 
                              activecolor="#ffd700"
                            />
                          )
                        }
                        <p className="mb-0">Based on {singleProductState?.ratings?.length} Reviews</p>
                      </div>
                    </div>
                    {orderedProduct && (
                    <div>
                        <a href="" className='text-dark text-decoration-underline' onClick={handleButtonClick}> Write a Review</a>
                    </div>
                    )}
                </div>
                {
                  isButtonClicked === true && <>
                  <div className="review-form py-4">
                    <h4>Write a Review</h4>
                    <div>
                      <ReactStars 
                            count={5} 
                            size={24} 
                            value={3} 
                            edit={true} 
                            activeColor="#ffd700"
                            onChange={(e) => {
                              
                              setStar(e)}
                            }
                        />
                    </div>
                    <div>
                      <textarea 
                        name="comment" 
                        id="" 
                        className='w-100 form-control' 
                        cols="30" 
                        rows="4" 
                        placeholder='comment' 
                        onChange={(e) => {
                          
                          setComment(e.target.value)
                        }}>
                      </textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className="button border-0 mt-3" type="button" onClick={addRatingToProduct}>Submit Review</button>
                    </div>
                  </div>
                </>
                } 
                <div className="reviews mt-4">
                {
                  rating && rating?.ratings?.map((item, index) => {
                      return (
                        <div className="review" key={index}>
                          <div className="d-flex align-items-center gap-10">
                            <h6 className='mb-0'>{item?.postedby?.firstname}</h6>
                            <ReactStars 
                              count={5} 
                              size={24} 
                              value={item?.star} 
                              edit={false} 
                              activecolor="#ffd700"
                            />
                          </div>
                    <p className='mt-3'>{item?.comment}</p>
                  </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">You may also like</h3>
            </div>            
          </div>
          <div className="row">
          {/* <Container class1="marque-wrapper py-5 home-wrapper-2">
            <div className='row'>
              <div className='col-9'>
                  <Marquee className="marque bg-white border-radius">
                    {
                      productState && productState.map((item, index) => {
                        return(
                          <div key={index}>
                            <Link to={productState?._id} className="d-flex gap-30"><img src={item?.images[0]?.url} width="100px"/></Link>
                          </div>
                        ) 
                      })
                    }
                  </Marquee>
               
              </div>
            </div>
          </Container> */}
            
          </div>   
        
      </Container>
    </>
  )
}

export default SingleProduct
