import React from 'react';
import {Link} from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../Components/BlogCard';
import ProductCard from '../Components/ProductCard';
import SpecialProduct from '../Components/SpecialProduct';
import Container from '../Components/Container';
import Services from '../utils/Data';
function Home() {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
      <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img src="images/main-banner.jpg" alt="main banner" className='img-fluid rounded-3'/>
                <div className="main-banner-content position-absolute">
                  <h4>SUPER CHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>from $999.00 or $41.62/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-30 justify-content-between align-items-center">
                <div>
                  <div className="small-banner position-relative mb-4">
                    <img src="images/images.jpg" alt="main banner" className='img-fluid rounded-3'/>
                    <div className="small-banner-content position-absolute">
                      <h4>SUPER CHARGED PROS</h4>
                      <h5>iPad S13+ Pro.</h5>
                      <p>from $999.00 or $41.62/mo.</p>
                    </div>
                  </div>
                  <div className="small-banner position-relative mb-4">
                    <img src="images/laptop.jpg" alt="main banner" className='img-fluid rounded-3'/>
                    <div className="small-banner-content position-absolute">
                      <h4>NEW ARRIVAL</h4>
                      <h5>iPad S13+ Pro.</h5>
                      <p>from $999.00 or $41.62/mo.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="small-banner position-relative mb-4">
                    <img src="images/laptop.jpg" alt="main banner" className='img-fluid rounded-3'/>
                    <div className="small-banner-content position-absolute">
                      <h4>BEST SALE</h4>
                      <h5>iPad S13+ Pro.</h5>
                      <p>from $999.00 or $41.62/mo.</p>
                    </div>
                  </div>
                  <div className="small-banner position-relative mb-4">
                    <img src="images/laptop.jpg" alt="main banner" className='img-fluid rounded-3'/>
                    <div className="small-banner-content position-absolute">
                      <h4>BEST SALE</h4>
                      <h5>iPad S13+ Pro.</h5>
                      <p>from $999.00 or $41.62/mo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {
                Services?.map((i, j) => {
                  return (
                    <div className="d-flex align-items-center gap-15 key={j}">
                      <img src={i.images} alt="Services" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                    </div>
                  );
                })
              }
              </div>
            </div>
          </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between gap-30 align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6> Smart Cameras </h6>
                  <p> 10 Items </p>
                </div>
                <img src="images/camera.jpg" width="100px" height="100px" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6> Smart Tv </h6>
                  <p> 10 Items </p>
                </div>
                <img src="images/camera.jpg" width="100px" height="100px" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6> Smart Watches </h6>
                  <p> 10 Items </p>
                </div>
                <img src="images/camera.jpg" width="100px" height="100px" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6> Cameras </h6>
                  <p> 10 Items </p>
                </div>
                <img src="images/camera.jpg" width="100px" height="100px" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6> Smart Cameras </h6>
                  <p> 10 Items </p>
                </div>
                <img src="images/camera.jpg" width="100px" height="100px" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6> Smart Tv </h6>
                  <p> 10 Items </p>
                </div>
                <img src="images/camera.jpg" width="100px" height="100px" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6> Smart Watches </h6>
                  <p> 10 Items </p>
                </div>
                <img src="images/camera.jpg" width="100px" height="100px" alt="" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6> Cameras </h6>
                  <p> 10 Items </p>
                </div>
                <img src="images/camera.jpg" width="100px" height="100px" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card bg-dark position-relative">
              <img src="images/computer.jpg" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $999.00 or $41.62/mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card bg-dark position-relative">
              <img src="images/computer.jpg" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Studio Display</h5>
                <h6>600 nits of brightness</h6>
                <p>27-inch 5% Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card bg-dark position-relative">
              <img src="images/computer.jpg" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Smartphones</h5>
                <h6>Smartphones 14 Pro.</h6>
                <p>Now in black from $999.000 or 4162/mo</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card bg-dark position-relative">
              <img src="images/computer.jpg" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Home Speakers</h5>
                <h6>Room-filling Sound</h6>
                <p>From $699 or %116.58/mo. fro 12 mo.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wraper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className='section-heading'>Special Products</h3>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>            
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div> 
      </Container>
      <Container class1="marquee-wrapper py-5 home-wrapper-2">
        <div className='row'>
          <div className='col-12'>
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src="images/brand-3.jpg" width='110px' height='100px' alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-4.jpg" width='110px' height='100px' alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-5.jpg" width='110px' height='100px' alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-6.jpg" width='110px' height='100px' alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-7.jpg" width='110px' height='100px' alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-3.jpg" width='110px' height='100px' alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-4.jpg" width='110px' height='100px' alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-5.jpg" width='110px' height='100px' alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </Container>
     </>
  )
}

export default Home
