import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import BlogCard from '../Components/BlogCard';
import Container from '../Components/Container';
const Blog = () => {
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
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Blog
