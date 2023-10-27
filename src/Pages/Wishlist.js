import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import Container from '../Components/Container';
import { getUserProductWishlist } from '../features/user/userSlice';
import { addTowishlist } from '../features/product/productSlice'

const Wishlist = () => {
  useEffect(() =>{
    getWishlistFromDb();
  }, []);
  const dispatch = useDispatch();
  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  }
  const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);
  

   const removeFromWishlist =  (id) => {
    dispatch(addTowishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
   }
  return (
    <>
      <Meta title='Wishlist' />
      <BreadCrumb title='Wishlist' />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {
            wishlistState?.length === 0 && <div className="text-center fs-3">No Data Found!</div>
          }
          {
            wishlistState && wishlistState?.map((item,index) => {
              return (
                <div className="col-3" key={index}>
                  <div className="wishlist-card w-100 position-relative" >
                    <img src="images/watch.jpg" alt="cross" className='position-absolute cross img-fluid' onClick ={() => {removeFromWishlist(item?._id)}}/>
                    <div className="wishlist-card-image">
                      <img src={item?.images[0]?.url ? item?.images[0].url : "images/watch.jpg" } alt="watch" className='img-fluid d-block  mx-auto' width={160}/>
                    </div>
                    <div className="py-3">
                      <h5 className="title"> {item?.title} </h5>
                      <h6 className="price">$ {item?.price} </h6>
                    </div>
                  </div>
                </div>
              )
            })
          }  
        </div>
      </Container>
    </>
  )
}

export default Wishlist
