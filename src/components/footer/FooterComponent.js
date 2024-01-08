import React from 'react'

const FooterComponent = () => {
  return (
    <div>
      <section className="">

        <footer className="bg-body-tertiary">

          <div className="container p-4">
          
            <div className="row">

              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">Address</h5>

                <p className='mb-0'>
                  Jamuna Future Park, Badda, Dhaka-1229
                </p>
                <span>Bangladesh</span>
                <p className='mb-0'>Phone: 01789654123, 0123654789</p>
                <p>Email: faisalh.tanjil@gmail.com</p>
              </div>
            
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Useful Links</h5>

                <ul className="list-unstyled mb-0 text-decoration-none">
                  <li>
                    <a href="#!" className="text-body text-decoration-none">Watch</a>
                  </li>
                  <li>
                    <a href="#!" className="text-body text-decoration-none">Wallet</a>
                  </li>
                  <li>
                    <a href="#!" className="text-body text-decoration-none">Sunglass</a>
                  </li>
                  <li>
                    <a href="#!" className="text-body text-decoration-none">Cart</a>
                  </li>
                </ul>
              </div>
            
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0">Social Media</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-body text-decoration-none">Facebook</a>
                  </li>
                  <li>
                    <a href="#!" className="text-body text-decoration-none">Instagram</a>
                  </li>
                  <li>
                    <a href="#!" className="text-body text-decoration-none">Twitter</a>
                  </li>
                  <li>
                    <a href="#!" className="text-body text-decoration-none">LinkedIn</a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        
          <div className="text-center" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
            © 2024 Copyright:
            <a className="text-body text-decoration-none" href="">Maccess</a>
          </div>
        
        </footer>
  
      </section>
    </div>
  )
}

export default FooterComponent