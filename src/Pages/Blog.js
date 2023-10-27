import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import BlogCard from '../Components/BlogCard';
import Container from '../Components/Container';
import { getAllBlogs } from '../features/blog/blogSlice';
import  moment  from 'moment';
const Blog = () => {
  const dispatch = useDispatch();
  const getBlogs = () => {
    dispatch(getAllBlogs());
  }
  useEffect(() =>{
    getBlogs();
  }, []);
  
  const blogState = useSelector((state) => state.blog.blogs);
  return (
    <>
      <Meta title='Blogs' />
      <BreadCrumb title='Blogs'/>
      <Container class1="blog-wrapper home-wrapper py-5">
        <div className="row">
          <div className="col-3">
            <div className='filter-card mb-3'>
              <h3 className="filter-title"> Find By Categories </h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camra</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              {blogState &&
               blogState?.map((item, index) => {
                return (
                  <div className="col-6 mb-3" key={index}>
                    <BlogCard 
                      id={item?._id} 
                      title={item?.title} 
                      description={item?.description} 
                      image={item?.images[0].url}
                      date={moment(item.createdAt).format("MMMM Do YYYY h:mm a")}
                    />  
                  </div> 
                )
               })
              }
              
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Blog
