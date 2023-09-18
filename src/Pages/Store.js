import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ReactStars from 'react-rating-stars-component';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import ProductCard from '../Components/ProductCard';
import Blog from '../Pages/Blog'
import Color from '../Components/Color'
import { getAllProducts } from "../features/product/productSlice";
import Container from '../Components/Container'


const Store = () => {
  const [grid, setGrid] = useState(4);
  const productState = useSelector((state) => state.product.products)
  const dispatch = useDispatch();
  const getProducts = () => {
    dispatch(getAllProducts());
  }
  useEffect(() =>{
    getProducts();
  }, [])
  return (
    <>
      <Meta title='Our Store' />
      <BreadCrumb title='Our Store'/>
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className='filter-card mb-3'>
              <h3 className="filter-title"> Shop By Categories </h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camra</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className="filter-title"> Filter By </h3>
              <div>
                <h5 className="sub-title"> Availablity</h5>
                <div>
                  <div className='form-check'>
                  <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id=''
                  />
                  <label 
                      className='form-check-label'
                      htmlFor=''
                  > In Stoke (1) </label>
                  </div>
                  <div className='form-check'>
                  <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id=''
                  />
                  <label 
                      className='form-check-label'
                      htmlFor=''
                      > Not In Stoke (0) </label>
                  </div>
                </div>
                <h5 className="sub-title"> Price </h5>
                <div className='d-flex align-items-center gap-10'>
                  <div className="form-floating">
                      <input 
                      type="email" 
                      className="form-control" 
                      id="floatingInput" 
                      placeholder="From" />
                      <label 
                      htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                      <input 
                      type="email" 
                      className="form-control" 
                      id="floatingInput" 
                      placeholder="name@example.com" />
                      <label 
                      htmlFor="floatingInput">To</label>
                  </div>
                </div>
                <h5 className="sub-title"> Colors </h5>
                <div>
                  <div>
                    <Color />
                  </div>
                  <h5 className="sub-title"> Size </h5>
                  <div>
                    <div className='form-check'>
                      <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id='color-1'
                      />
                      <label 
                          className='form-check-label'
                          htmlFor=''
                      > S (2) </label>
                    </div>
                    <div className='form-check'>
                      <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id='color-2'
                      />
                      <label 
                          className='form-check-label'
                          htmlFor=''
                      > M (2) </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className="filter-title"> Product Tags </h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light rounded-3 text-secondary">Headphone</span>
                  <span className="badge bg-light rounded-3 text-secondary">Laptop</span>
                  <span className="badge bg-light rounded-3 text-secondary">Moblie</span>
                  <span className="badge bg-light rounded-3 text-secondary">Wire</span>
                </div>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className="filter-title"> Random Products </h3>
              <div>
                <div className="random-products mb-5 d-flex">
                  <div className="w-50">
                    <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                  </div>
                  <div className="w-50">
                    <h5> Kids headphones bulk 10 pack Multi colored for students</h5>
                    <ReactStars 
                      count={5} 
                      size={24} 
                      value="3" 
                      edit={false} 
                      activecolor="#ffd700"
                    />
                    <p> <b>$ 300</b> </p>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                  </div>
                  <div className="w-50">
                    <h5> Kids headphones bulk 10 pack Multi colored for students</h5>
                    <ReactStars 
                      count={5} 
                      size={24} 
                      value="3" 
                      edit={false} 
                      activecolor="#ffd700"
                    />
                    <p> <b>$ 300</b> </p>
                  </div>
                </div>
              </div>
            </div>    
          </div>
          <div className="col-9">
            <div className="filter-short-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0" style={{"width": "100px"}}> Sort By:</p>
                  <select name="" id="" className="form-control form-select">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">Best Selling</option>
                      <option value="title-descending">Alphabetically, A-Z</option>
                      <option value="price-ascending">Price, low to high</option>
                      <option value="price-descending">Price, high to low</option>
                      <option value="created-ascending">Date. old to new</option>
                      <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className='d-flex gap-10 align-items-center grid'>
                    <img src="images/watch.jpg" className='d-flex img-fluid' alt="grid" onClick={()=>setGrid(3)}/>
                    <img src="images/watch.jpg" className='d-flex img-fluid' alt="grid" onClick={()=>setGrid(4)}/>
                    <img src="images/watch.jpg" className='d-flex img-fluid' alt="grid" onClick={()=>setGrid(6)}/>
                    <img src="images/watch.jpg" className='d-flex img-fluid' alt="grid" onClick={()=>setGrid(12)}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard data = {productState} grid={ grid }/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
    
  )
}

export default Store
