import React from 'react'
const header = () => {
  return (
    <>
        <header>
            <section className='container main-hero-container'>
                <div className='row'>
                    <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column  align-items-start'>
                       <h1 className='display-2'>
                       Online Payment Made<br/>
                       Easy For You
                       </h1>
                       <p className='main-hero-para'>
                       K-Pay provides you all sort of serivces. From transfering
                       money to your loved ones to shopping some gifts for them or better
                       YOURSELF! We believe in 100% commitment to our customers. We also suport small
                       businesses so dont feel shy in contacting us ;)
                       </p>
                           <h3>Get early access for you</h3>
                           <div className='input-group mt-3'>
                              <input type='text' className='rounded-pill w-75 me-3 p-2 form-control-text' placeholder='Enter your EMail'
                               />
                              <div className='input-group-button' >
                              Get It Now
                              </div>
                       </div>
                    </div>
                    {/*--------------------main header right side--------------*/}
                    <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images'>          
                        <img src='./images/payment.jpg'
                         alt='paymentimg'
                          className='img-fluid main-hero-img2'/>
                          <img src='./images/girlwithdc.jpg' 
                        alt='girlwithdcimg' 
                        className='img-fluid  '/>
                    </div>
                </div>
            </section>
        </header>
    </>
  )
}
export default header