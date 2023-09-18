import React, {useState} from 'react';
import { Link } from "react-router-dom";
import ReactStars from 'react-rating-stars-component';
import {TbGitCompare} from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import ProductCard from '../Components/ProductCard';
import ReactImageZoom from 'react-image-zoom';
import Color from "../Components/Color"

const SingleProduct = () => {
  const props = {width: 400, height: 500, zoomwidth: 500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdP7coACNI1bDkkKvFpDXhL6P-jGPLyhlAw&usqp=CAU"}
  const [orderedProduct, setOrderedProduct] = useState(true);
  const copyClipboard = (text) =>{
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerHTML = text;
    document.body.appendChild(textField);
    document.execCommand("copy");
    textField.remove();
  }
  return (
    <>
      <Meta title='Product Name' />
      <BreadCrumb title='Product Name'/>
      {/* <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-img">
                <div>
                  <ReactImageZoom {...props}/>
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrapp gap-15">
                <div>
                  <img src="../images/watch.jpg" className='img-fluid' alt="" />
                </div>
                <div>
                  <img src="../images/watch.jpg" className='img-fluid' alt="" />
                </div>
                <div>
                  <img src="../images/watch.jpg" className='img-fluid' alt="" />
                </div>
                <div>
                  <img src="../images/watch.jpg" className='img-fluid' alt="" />
                </div>

              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className='title'>
                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                  </h3>
                  <div className="border-bottom py-3">
                    <p className="price"> $ 100</p>
                    <div className="d-flex align-items-center gap-10">
                    <ReactStars 
                      count={5} 
                      size={24} 
                      value="3" 
                      edit={false} 
                      activecolor="#ffd700"
                    />
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
                      <p className="product-data">Havels</p>
                    </div>
                    <div className='d-flex align-items-center gap-10 my-2'>
                      <h3 className='product-heading'>Category :</h3>
                      <p className="product-data">Watch</p>
                    </div>
                    <div className='d-flex align-items-center gap-10 my-2'>
                      <h3 className='product-heading'>Tags :</h3>
                      <p className="product-data">Watch</p>
                    </div>
                    <div className='d-flex align-items-center gap-10 my-2'>
                      <h3 className='product-heading'>Availability :</h3>
                      <p className="product-data"> In Stock</p>
                    </div>
                    <div className='d-flex flex-column gap-10 mt-2 mb-3'>
                      <h3 className='product-heading'>Size :</h3>
                      <div className="d-flex flex-wrap gap-15">
                        <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                        <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                        <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                        <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                      </div>
                    </div>
                    <div className='d-flex flex-column gap-10 mt-2 mb-3'>
                      <h3 className='product-heading'>Color :</h3>
                      <Color />
                    </div>
                    <div className='d-flex flex-row align-items-center gap-15 mt-2 mb-3'>
                      <h3 className='product-heading'>Quantity :</h3>
                      <div>
                        <input type="number" min={1} max={10} style={{width: "70px"}} classN ame="form-control"/>
                      </div>
                      <div className="d-flex align-items-center gap-30">
                        <button className="button border-0" type='submit'>Add to Cart</button>
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
                      <a href="javascript:void(0);" onClick = {() => {
                        copyClipboard("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdP7coACNI1bDkkKvFpDXhL6P-jGPLyhlAw&usqp=CAU")
                      }}>
                        Copy Product Link
                      </a>
                    </div>
                  </div>
                  
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugit asperiores impedit laudantium animi, est, quos dolorum reprehenderit sapiente, quibusdam explicabo autem dolorem error! Ipsa laudantium iure quaerat tenetur quos.</p>
              </div>
            </div> 
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className=".col-12">
              <h3 id="review" >Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                    <div>
                      <h4 className='mb-2'>Customer Reviews</ h4>
                      <div className="d-flex align-items-center gap-10">
                        <ReactStars 
                          count={5} 
                          size={24} 
                          value="3" 
                          edit={false} 
                          activecolor="#ffd700"
                        />
                        <p className="mb-0">Based on 2 Reviews</p>
                      </div>
                    </div>
                    {orderedProduct && (
                    <div>
                        <a href="" className='text-dark text-decoration-underline'> Write a Review</a>
                    </div>
                    )}
                </div>
                <div className="review-form py-4">
                    <h4>Write a Review</h4>
                  <form action="" className='d-flex flex-column gap-15'>
                    <ReactStars 
                        count={5} 
                        size={24} 
                        value="3" 
                        edit={true} 
                        activecolor="#ffd700"
                    />
                    <div>
                      <textarea name="" id="" className='w-100 form-control' cols="30" rows="4" placeholder='comment'></textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex align-items-center gap-10">
                      <h6 className='mb-0'>Abdi</h6>
                      <ReactStars 
                        count={5} 
                        size={24} 
                        value="3" 
                        edit={false} 
                        activecolor="#ffd700"
                      />
                    </div>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex enim suscipit alias dolor commodi. Quis repellendus sit dicta at. Iusto molestias maiores qui aliquid delectus saepe culpa sed ad consequatur?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>            
          </div>
          <div className="row">
            <ProductCard />
            
          </div>   
        </div>
      </section> */}
    </>
  )
}

export default SingleProduct
