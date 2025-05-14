import React from 'react';
import howToUseApp from './API/howtouse';

const services = props => {
    
  return (
    <>
        <section className='common-section our-services'>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-12 col-lg-5 text-center our-service-leftside-img'>
                        <img src='./images/services.jpg' alt='aboutusimg' /> 
                                           </div>
                                           {/*section right side data */}
                                           <div className='col-12 col-lg-7 our-services-list'>
                                            <h3 className='mini-title'>
                                            --AVAILABLE @GOOGLE AND IOS APP STORE ONLY 
                                            </h3>
                                                 <h1 className='main-heading'>Services We Provide</h1>
                                                 
                                                    <div className='row our-services-info'>
                                                    <div className='col-1  our-services-number'>$</div>
                                                    <div className='col-10 our-services-data'>
                                                        <h2>Scan And Pay - Transfer Money - Recharge -  Pay Bills - Shop And Earn</h2>
                                                        <p className='main-hero-para'>
                                                            Easily scan and pay through QR codes. 
                                                            It is most convenient way to pay. Recharge your cable/Tv/Phones,
                                                            shop and earn so many exciting rewards.
                                                            pay bills easily in a singe click and so much more...
                                                        </p>
                                                    </div>
                                                 </div>
                                                 <br />
                                                 <button className='btn-style btn-style-border'>learn more</button>
                                           </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default services;