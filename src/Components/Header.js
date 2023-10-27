import React, {useState, useEffect} from 'react'
import {NavLink, Link, useNavigate} from  'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {BsSearch} from 'react-icons/bs';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { AiOutlineHeart,AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'

const  Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productOpt, setProductOpt] = useState([]);
  const [paginate, setPaginate ] = useState(true);
  const cartState = useSelector((state) => state?.auth?.userCart);
  
   
  const authState = useSelector((state) => state?.auth);
  const productState = useSelector((state) => state?.product?.products)
  
  let [total, setTotal ] = useState(null);

  const  handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  }
  useEffect(() => {
    let data = [];
    for (let i = 0; i < productState?.length; i++) {
      data.push({id:i, prod:productState[i]?._id, name:productState[i].title})
    }
    
    setProductOpt(data);
  }, [productState]);
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cartState?.length; i++) {
      sum = sum + (cartState[i]?.quantity * cartState[i]?.productId?.price);
      
    }
    setTotal(sum);
  }, [cartState]);
  return (
    <>
    <header className="header-top-strip py-3">
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <p className="text-white mb-0">
              Free Shiping Over $100 & Free Returns
            </p>
          </div>
          <div className='col-6'>
            <p className='text-end text-white mb-0'>hostline: <a className="text-white" href="tel:+251 915948189">
              +251 915948189</a>
            </p>
          </div>
        </div>
      </div>
    </header>
    <header className="header-upper py-3">
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-2'>
            <h2>
              <Link className='text-white'>MERN DEV</Link>
            </h2>
          </div>
          <div className='col-5'>
            <div className="input-group">
              <Typeahead 
                id="pagination-example"
                onPaginate={() => console.log("Results Paginated")}
                onChange={(selected) => {
                  navigate(`/product/${selected[0]?.prod}`)
                }}
                options={productOpt}
                paginate={paginate}
                labelkey={"name"}
                minLength={2}
                placeholder="Search products..."
              />
              <span className="input-group-text py-3" id="basic-addon2">
                <BsSearch className='fs-6'/>
              </span>
            </div>
          </div>
          <div className='col-5'>
            <div className='header-upper-links d-flex align-items-center justify-contetn-between gap-15'>
                <div>
                  <Link to='/compare-product' className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/compare.png" alt="compare" className="text-white"/>
                    <p className='mb-0'>Compare <br/> Products</p>
                  </Link>
                </div>
                <div>
                  <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
                    <AiOutlineHeart className='fs-4'/>
                    <p className='mb-0'>Favourite <br/> Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link to={authState?.user === null ? '/login' : "/profile" }className='d-flex align-items-center gap-10 text-white'>
                    <AiOutlineUser className='fs-4'/>
                    {
                      authState?.user === null ? <p className='mb-0'>Login</p>
                      : <p className='mb-0'>Welcome {authState?.user?.firstname + " !"}</p>
                    }
                  </Link>
                </div>
                <div>
                  <Link to='/cart' className='d-flex align-items-center gap-10 text-white'>
                    <AiOutlineShoppingCart className='fs-4'/>
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'>{cartState?.length}</span>
                      <p className='mb-0'> {total}</p>
                    </div>
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>  
    </header>
    <header className="header-bottom py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center gap-30">
              <div>
                <div className="dropdown">
                  <button 
                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-10 d-flex align-items-center" 
                    type="button" 
                    id="dropdownMenuButton1" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                  >
                    <img src="images/menu.png" width='25px' height='25px' alt="menu"/>
                    <span className="me-5 d-inline-block">Shop Categories</span>
                  </button>
                  <ul 
                    className="dropdown-menu" 
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item text-white" to="">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='menu-links'>
                <div className="d-flex align-items-center gap-15">
                  <NavLink  to="/">
                    Home
                  </NavLink>
                  <NavLink  to="/product">
                    Store
                  </NavLink>
                  <NavLink  to="/order">
                    My Orders
                  </NavLink>
                  <NavLink  to="/blog">
                    Blogs
                  </NavLink>
                  <NavLink  to="/contact">
                    Contact
                  </NavLink>
                  <button className='border border-0 bg-transparent text-white text-uppercase' onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </div>
          </div>    
        </div>
      </div>   
    </header>
    </>
  )
}

export default Header
