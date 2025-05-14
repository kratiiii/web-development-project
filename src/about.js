import React from 'react';
import workapi from './API/workapi';

const about = () => {
  
  return (
    <>
        <section>
            <div className='work-container container'>
                <h1 className='main-heading text-center'>How does it Work</h1>
                <div className='row'>
                    <div className='col-12 col-lg-4 text-center work-container-subdiv'>
                        <i class='fas fa-download'></i>
                        <h2>Download App</h2>
                        <p className='main-hero-para w-100'>our app will make it eve easier for you and KPay will come handy for you to improve your daily life</p>
                    </div>
                    <div className='col-12 col-lg-4 text-center work-container-subdiv'>
                        <i class='fas fa-chalkboard-teacher'></i>
                        <h2>Complete The Instructions</h2>
                        <p className='main-hero-para w-100'>just a few steps to enhance your payment experiences</p>
                    </div>
                    <div className='col-12 col-lg-4 text-center work-container-subdiv'>
                        <i class='fas fa-donate'></i>
                        <h2>Receive your Funds</h2>
                        <p className='main-hero-para w-100'>you get funds here yayy!</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default about