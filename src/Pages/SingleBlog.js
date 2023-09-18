import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import Container from '../Components/Container'

const SingleBlog = () => {
  return (
    <>
      <Meta title='' />
      <BreadCrumb title=''/>
      <Container class1="blog-wrapper home-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to='/blog' className='d-flex align-items-center gap-10'> <HiOutlineArrowLeft className='fs-4'/>Go back to blogs</Link>
              <h3 className="title"> A Beautiful Sunday Morning Reniassance</h3>
              <img src="../images/main-banner-1.jpg" className='img-fluid w-100 my-4' alt="blog" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, maxime ipsam fuga corrupti blanditiis, velit, excepturi illo accusamus ab nobis nostrum quae ea dolore. Nesciunt veniam laborum sed pariatur nemo.</p>
            </div>             
          </div>
        </div>
      </Container>
    </>
  )
}

export default SingleBlog
