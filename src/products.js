import React from 'react';
import howToUseApp from './API/howtouse';

const products = props => {
    
  return (
    <>
        <section className='common-section our-products'>
            <div className='container mb-5'>
                <div className='row'>
                   
                                           {/*section right side data */}
                                           <div className='col-12 col-lg-7  our-products-list'>
                                                 <h1 className='main-heading'><i>Products We Provide At A Discounted Price</i></h1>
                                                 
                                                    <div className='row our-products-info'>
                                                    <div className='col-10 our-products-data'>
                                                        <h2>Clothes</h2>
                                                        <p className='main-hero-para'>
                                                            You can shop for clothes from exclusive brands at a discounted rate.
                                                            yes save money and shop from kpay.
                                                        </p>
                                                    </div>
                                                 </div>
                                                 <div className='row our-products-info'>
                                                    <div className='col-10 our-products-data'>
                                                        <h2>Furniture</h2>
                                                        <p className='main-hero-para'>
                                                            We know how emotional of a moment it is for people to build a home for themselves
                                                            we provide top quality furniture to make your house look even more classy. 
                                                        </p>
                                                    </div>
                                                 </div>
                                                 <div className='row our-products-info'>
                                                    <div className='col-10 our-products-data'>
                                                        <h2>Groceries</h2>
                                                        <p className='main-hero-para'>
                                                            We provide groceries at your door steps.
                                                            forgot that imposrtant ingredient in your recie? dont worry we deliver within an hour for groceies.
                                                        </p>
                                                    </div>
                                                 </div>
                                           </div>
                                           <div className='col-12 col-lg-5 text-center our-products-leftside-img'>
                        <img src='./images/products.jpeg' alt='productsimg' /> 
                                           </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default products;