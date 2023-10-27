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
  const dispatch = useDispatch();
 

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);


  // Filter states
  const [brand, setBrand] = useState(null);
  const [category, setCategory] = useState(null);
  const [tag, setTag] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [sort, setSort] = useState(null);


  useEffect(() =>{
    getProducts();
  }, [sort, tag, brand, category, minPrice, maxPrice]);
  const getProducts = () => {
    dispatch(getAllProducts({sort, tag, brand, category, minPrice, maxPrice}));
  }
  const productState = useSelector((state) => state.product.products);
  useEffect(() => {
    let newBrands = [];
    let newCategories = [];
    let newTags = [];
    for(let i = 0; i < productState.length; i++){
      const element = productState[i];
      newBrands.push(element.brand);
      newCategories.push(element.category);
      newTags.push(element.tags);
    }
    setBrands(newBrands);
    setCategories(newCategories);
    setTags(newTags);
  }, [productState]);
  
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
                  <li>
                    {
                    categories && [...new Set(categories)].map((item, index) => {
                    return (
                      <li key={index} onClick={() => setCategory(item)}>{item}</li>
                    )
                    })
                    }
                  </li>
                </ul>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className="filter-title"> Filter By </h3>
              <div>
                <h5 className="sub-title"> Availablity</h5>
                
                <h5 className="sub-title"> Price </h5>
                <div className='d-flex align-items-center gap-10'>
                  <div className="form-floating">
                      <input 
                      type="number"
                      className="form-control" 
                      id="floatingInput" 
                      placeholder="From" 
                      onChange={(e) => setMinPrice(e.target.value)}
                      />
                      <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                      <input 
                      type="email" 
                      className="form-control" 
                      id="floatingInput" 
                      placeholder="name@example.com" 
                      onChange={(e) => setMaxPrice(e.target.value)}
                      />
                      <label 
                      htmlFor="floatingInput">To</label>
                  </div>
                </div>
                
              </div>
              <div className=' mt-4 '>
              <h3 className="filter-title"> Product Tags </h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                {
                  tags && [...new Set(tags)].map((item, index) => {
                    return (
                      <span key={index} className="badge bg-light rounded-3 text-secondary text-capitalize" onClick={() => setTag(item)}>{item}</span>

                    )
                  })
                }
                </div>
              </div>
            </div>   
            <div className=' mt-4'>
              <h3 className="sub-title"> Product Brands </h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                {
                  brands && [...new Set(brands)].map((item, index) => {
                    return (
                      <span 
                        key={index} 
                        className="badge bg-light rounded-3 text-secondary text-capitalize" 
                        onClick={() => setBrand(item)}>{item}</span>
                    )
                  })
                }
                </div>
              </div>
            </div> 
            </div>
            
          </div>
          <div className="col-9">
            <div className="filter-short-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0" style={{width: "100px"}}> Sort By:</p>
                  <select name="" id="" className="form-control form-select" onChange={(e) => setSort(e.target.value)}>
                      <option value="title">Alphabetically, A-Z</option>
                      <option value="-title">Alphabetically, A-Z</option>
                      <option value="price">Price, low to high</option>
                      <option value="-price">Price, high to low</option>
                      <option value="createdAt">Date. old to new</option>
                      <option value="-createdAt">Date, new to old</option>
                  </select>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <p className="totalproducts mb-0">Adjust Product Size</p>
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
