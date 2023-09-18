import React from 'react'
import { Link } from 'react-router-dom';

function BlogCard() {
  return (
    <>
      <div className="blog-card w-100">
        <div className="card-image">
          <img src="images/main-banner-1.jpg"className='img-fluid' alt="" />
        </div>
        <div className="blog-content">
          <p className='date'>1 Dec, 2023</p>
          <h5 className='title'>A bueutiful sunday morning reniassance</h5>
          <p className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <Link to='/blog/:id'className='button'>Read More</Link>
        </div>
    </div>
    </>
    
   
  )
}

export default BlogCard
