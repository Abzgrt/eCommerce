import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from 'react-router-dom';
import moment from 'moment';
import BlogCard from '../Components/BlogCard';
import ProductCard from '../Components/ProductCard';
import SpecialProduct from '../Components/SpecialProduct';
import Container from '../Components/Container';
import Services from '../utils/Data';
import { getAllProducts } from '../features/product/productSlice';
import { getAllBlogs } from '../features/blog/blogSlice';
import ReactStars from 'react-rating-stars-component';
import {AiOutlineHeart} from "react-icons/ai";
import { addTowishlist } from '../features/product/productSlice';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getBlogs = () => {
    dispatch(getAllBlogs());
  }
  useEffect(() =>{
    getBlogs();
  }, []);
  
  const blogState = useSelector((state) => state.blog.blogs);

  const getProducts = () => {
    dispatch(getAllProducts());
  }
  useEffect(() =>{
    getProducts();
  }, []);
  const productState = useSelector((state) => state?.product?.products);
  
    
  
  const wishlist = (id) => {
    
    dispatch(addTowishlist(id));
  }
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img src="images/main-banner.jpg" alt="main banner" className='img-fluid rounded-3'style={{height: "72vh"}}/>
                <div className="main-banner-content position-absolute" style={{top: "50%", left: "1%"}}>
                  <h4>SUPER CHARGED FOR PROS.</h4>
                  <h5>AirPods Pro.</h5>
                  <p>from $45.00 or $41.62/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-30 justify-content-between align-items-center">
                <div>
                  <div className="small-banner position-relative mb-4">
                    <img src="images/laptop.jpg" alt="main banner" className='img-fluid rounded-3'/>
                    <div className="small-banner-content position-absolute" style={{right: '40%'}}>
                      <h4>New Arrival</h4>
                      <h5>iPad S13+ Pro.</h5>
                      <p>from $45.00 or $41.62/mo.</p>
                    </div>
                  </div>
                  <div className="small-banner position-relative mb-4">
                    <img src="images/laptop.jpg" alt="main banner" className='img-fluid rounded-3'/>
                    <div className="small-banner-content position-absolute" style={{right: '40%'}}>
                      <h4>NEW ARRIVAL</h4>
                      <h5>iPad S13+ Pro.</h5>
                      <p>from $45.00 or $41.62/mo.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="small-banner position-relative mb-4">
                    <img src="images/laptop.jpg" alt="main banner" className='img-fluid rounded-3'/>
                    <div className="small-banner-content position-absolute" style={{right: '40%'}}>
                      <h4>BEST SALE</h4>
                      <h5>iPad S13+ Pro.</h5>
                      <p>from $45.00 or $41.62/mo.</p>
                    </div>
                  </div>
                  <div className="small-banner position-relative mb-4">
                    <img src="images/laptop.jpg" alt="main banner" className='img-fluid rounded-3'/>
                    <div className="small-banner-content position-absolute" style={{right: '40%'}}>
                      <h4>BEST SALE</h4>
                      <h5>iPad S13+ Pro.</h5>
                      <p>from $999.00 or $41.62/mo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {
                Services?.map((i, j) => {
                  return (
                    <div key={j} className="d-flex align-items-center gap-15">
                      <img src={i.images} alt="Services" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                    </div>
                  );
                })
              }
              </div>
            </div>
          </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between gap-30 align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6> Smart Cameras </h6>
                  <p> 10 Items </p>
                </div>
                <img src="images/camera.jpg" width="100px" height="100px" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6> Smart Tv </h6>
                  <p> 10 Items </p>
                </div>
                <img src="images/camera.jpg" width="100px" height="100px" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6> Smart Watches </h6>
                  <p> 10 Items </p>
                </div>
                <img src="images/camera.jpg" width="100px" height="100px" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6> Cameras </h6>
                  <p> 10 Items </p>
                </div>
                <img src="images/camera.jpg" width="100px" height="100px" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6> Smart Cameras </h6>
                  <p> 10 Items </p>
                </div>
                <img src="images/camera.jpg" width="100px" height="100px" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6> Smart Tv </h6>
                  <p> 10 Items </p>
                </div>
                <img src="images/camera.jpg" width="100px" height="100px" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6> Smart Watches </h6>
                  <p> 10 Items </p>
                </div>
                <img src="images/camera.jpg" width="100px" height="100px" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6> Cameras </h6>
                  <p> 10 Items </p>
                </div>
                <img src="images/camera.jpg" width="100px" height="100px" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          {
            productState && 
            productState?.map((item, index) => {
              if(item.tags === "featured") {
                return (
                  <div key={index} className={"col-3"}>
                    <div className="product-card position-relative">
                      <div className="heart-icon-box position-absolute wishlist">
                        <AiOutlineHeart 
                          className="heart-icon bg-transparent fs-5" 
                          onClick={(e) => wishlist(item?._id)}/>
                      </div>
                      <div className="product-image p-1">
                        <img src={item?.images[0]?.url} className="img-fluid d-flex mx-auto" alt="product image" />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">{item?.title}</h5>
                        <ReactStars 
                          count={5} 
                          size={24} 
                          value={1}
                          edit={false} 
                          activecolor="#ffd700"
                        />
                        <p dangerouslySetInnerHTML = {{__html: item?.description}}  >
                          {/* className={`description ${grid === 12 ? "d-block" : "d-none"}`} */}
                        
                        </p>
                        <p className="price">${item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <button className="border-0 bg-transparent">
                          <img src="images/eye.png" alt="view product" width="25px" height="25px" onClick={() => navigate("product/"+item?._id)}/>
                        </button>    
                      </div>
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
      </Container>
      {/* <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card bg-dark position-relative">
              <img src="images/computer.jpg" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $999.00 or $41.62/mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card bg-dark position-relative">
              <img src="images/computer.jpg" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Studio Display</h5>
                <h6>600 nits of brightness</h6>
                <p>27-inch 5% Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card bg-dark position-relative">
              <img src="images/computer.jpg" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Smartphones</h5>
                <h6>Smartphones 14 Pro.</h6>
                <p>Now in black from $999.000 or 4162/mo</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card bg-dark position-relative">
              <img src="images/computer.jpg" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Home Speakers</h5>
                <h6>Room-filling Sound</h6>
                <p>From $699 or %116.58/mo. fro 12 mo.</p>
              </div>
            </div>
          </div>
        </div>
      </Container> */}
      <Container class1="special-wraper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className='section-heading'>Special Products</h3>
          </div>
          <div className="row">
            {
              productState && productState?.map((item, index) =>{
                if(item.tags === "special"){
                  return(
                    <SpecialProduct
                      key={index} 
                      title={item?.title} 
                      brand={item?.brand} 
                      totalrating={item?.totalrating} 
                      price={item?.price}
                      quantity={item?.quantity}
                      sold={item?.sold}
                      id={item?._id}
                      img={item.images[0]?.url}
                    />
                  )
                }
              })
            }
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>            
        </div>
        <div className="row">
        {
          productState && productState?.map((item, index) =>{
            if(item.tags === "popular"){
              return(
                <div key = {index} className="col-3">
                  <div className="product-card position-relative">
                    <div className="heart-icon-box position-absolute wishlist">
                      <AiOutlineHeart 
                        className="bg-transparent fs-5"
                        onClick={(e) => wishlist(item?._id)}/>
                    </div>
                    <div className="product-image">
                      <img src={item?.images[0]?.url} className="img-fluid d-flex mx-auto p-1" alt="product image"/>
                    </div>
                    <div className="product-details">
                      <h6 className="brand">{item?.brand}</h6>
                      <h5 className="product-title">{item?.title}</h5>
                      <ReactStars 
                        count={5} 
                        size={24} 
                        value={item?.totalrating}
                        edit={false} 
                        activecolor="#ffd700"
                      />
                      <p dangerouslySetInnerHTML = {{__html: item?.description}}  >
                        {/* className={`description ${grid === 12 ? "d-block" : "d-none"}`} */}
                      
                      </p>
                      <p className="price">${item?.price}</p>
                    </div>
                    <div className="action-bar position-absolute">
                      <button className="border-0 bg-transparent">
                        <img src="images/eye.png" alt="view" width="25px" height="25px" onClick={() => navigate("product/"+item?._id)}/>
                      </button>    
                    </div>
                  </div>
                </div>
              )
            }
          })
        }
        </div> 
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="row">
            {blogState &&
                blogState?.map((item, index) => {
                  if(index < 3 ){
                    return (
                      <div className="col-6 mb-3" key={index}>
                        <BlogCard 
                          id={item?._id} 
                          title={item?.title} 
                          description={item?.description} 
                          image={item?.images[0]?.url}
                          date={moment(item.createdAt).format("MMMM Do YYYY h:mm a")}
                        />  
                      </div> 
                    )
                  }
                })
                }
          </div>
        </div>
      </Container>
     </>
  )
}

export default Home
