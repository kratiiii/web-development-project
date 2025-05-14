import React from 'react'

const contact = () => {
  return (
    <>
        <section className='contactus-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-10 mx-auto'>
                        <div className='row'>
                            <div className='contact-leftside col-12 col-lg-5'>
                                <h1 className='main-heading fw-bold'>
                                    Connect With Our<br />Sales Team.
                                </h1>
                                <p className='main-hero-para'>
                                    Contact with our team by filling this form. we wil reply you asap.
                                </p>
                                <figure>
                                    <img src="./images/contact.jpg" 
                                    alt='contactimg'
                                     className='img-fluid' />
                                </figure>
                            </div>
                            {/*right side contact form */ }
                            <div className='contact-rightside col-12 col-lg-7'>
                                <form method='POST'>
                                    
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact-input-field'>
                                               <input
                                                  type='text'
                                                  name=''
                                                  id=''
                                                  className='form-control'
                                                  placeholder='First Name'
                                                  />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-field'>
                                               <input
                                                  type='text'
                                                  name=''
                                                  id=''
                                                  className='form-control'
                                                  placeholder='Last Name'
                                                  />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 contact-input-field'>
                                               <input
                                                  type='text'
                                                  name=''
                                                  id=''
                                                  className='form-control'
                                                  placeholder='Phone No'
                                                  />
                                            </div>
                                            <div className='col-12 col-lg-6 contact-input-field'>
                                               <input
                                                  type='text'
                                                  name=''
                                                  id=''
                                                  className='form-control'
                                                  placeholder='EMail'
                                                  />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 contact-input-field'>
                                            <input
                                                  type='text'
                                                  name=''
                                                  id=''
                                                  className='form-control'
                                                  placeholder='Add Address'
                                                  />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 contact-input-field'>
                                            <input
                                                  type='text'
                                                  name=''
                                                  id=''
                                                  className='form-control'
                                                  placeholder='Enter Your Message'
                                                  />
                                            </div>
                                        </div>
                                        <div class="form-check form-checkbox-style contact-input-field">
                                           <input class="form-check-input"
                                            type="checkbox" value="" 
                                            id="flexCheckChecked" 
                                             />
                                              <label class="form-check-label" for="flexCheckChecked">
                                                Iagree that K-Pay can contact me at the email address or the phone number i provided above
                                              </label>
                                        </div>
                                        <button type='submit' className='btn btn-style w-100'>
                                            Submit
                                        </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default contact