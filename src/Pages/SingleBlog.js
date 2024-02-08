import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import Container from '../Components/Container';
import { getABlog } from '../features/blog/blogSlice';


const SingleBlog = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const blogId = location.pathname.split('/')[2];
  const getBlog = () => {
    dispatch(getABlog(blogId));
  }
  useEffect(() =>{
    getBlog();
  }, []);
  
  const singleBlogState = useSelector((state) => state.blog.singleBlog);

  return (
    <>
      <Meta title={singleBlogState?.title} />
      <BreadCrumb title={singleBlogState?.title}/>
      <Container class1="blog-wrapper home-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to='/blogs' className='d-flex align-items-center gap-10'> <HiOutlineArrowLeft className='fs-4'/>Go back to blogs</Link>
              <h3 className="title"> {singleBlogState?.title}</h3>
              <img src={singleBlogState?.images[0].url ? singleBlogState?.images[0].url :  "../images/main-banner-1.jpg"} className='img-fluid w-100 my-4' alt="blog" />
              <p dangerouslySetInnerHTML = {{__html: singleBlogState?.description}}></p>
            </div>             
          </div>
        </div>
      </Container>
    </>
  )
}

export default SingleBlog
