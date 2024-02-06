import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <html>
        <link rel="stylesheet" href="/assets/css/contact.css" type="text/css" />
        <body>
          <div id="contact">
            <div className="p-left d-none d-lg-block">
              <div className="contact-strip">

                <div className="contact-box">

                  <div className="contact-left-side">
                    <div className="title pb-1 white-text">CONTACT US!</div>
                    <div className="contact-text pb-3 white-text">
                      Feel free to ask and we'll get back to you
                    </div>
                    <input type="text" id="name" nbrme="name" placeholder="Full Name" className="form-control mb-3" />
                    <input type="email" id="email" name="email" placeholder="Email Address" className="form-control mb-3" />
                    <input type="text" id="contact" name="contact" placeholder="Contact Number" className="form-control mb-3" />
                    <textarea type="text" id="message" name="message" className="form-control mb-3" />
                    <button className="button">Submit</button>

                  </div>

                  <div className="contact-right-side">
                    <div className="contact-text pb-3">Contact Information</div>
                    <div><strong>TELEPHONE </strong>+91 80 4160 2823</div>
                    <div><strong>MOBILE </strong>+91 74833 04583</div>
                    <div><strong>EMAIL </strong>hey@taomish.com</div>
                    <img src="assets/images/contact.svg" alt="img" className="contact-img pt-3" />
                  </div>

                </div>


              </div>

              <div>
                <div className="footer-cont">
                  <div className="footer-logo">
                    <a href='https://www.linkedin.com/company/taomish-india/about/' target="_blank" style={{ paddingRight: '20px' }}><svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg></a>
                    <a href="https://twitter.com/taomish" target="_blank" style={{ paddingRight: '20px' }}><svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg></a>
                    <a href="https://www.facebook.com/Taomish/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg></a>
                  </div>
                  <div className="footer1">© All rights reserved<span style={{ paddingRight: '10px' }}></span>|<span style={{ paddingRight: '10px' }}></span>Taomish Pte Ltd.</div>
                </div>
              </div>
            </div>

            {/* small view footer */}
            <div className="small-screen-cont d-lg-none">
              <div className="small-contact-strip">

                <div className="contact-small-side">
                  <div className="title pb-1 white-text">CONTACT US!</div>
                  <div className="contact-text pb-3 white-text">
                    Feel free to ask and we'll get back to you
                  </div>
                  <input type="text" id="name" name="name" placeholder="Full Name" className="form-control mb-3" />
                  <input type="email" id="email" name="email" placeholder="Email Address" className="form-control mb-3" />
                  <input type="text" id="contact" name="contact" placeholder="Contact Number" className="form-control mb-3" />
                  <textarea type="text" id="message" name="message" className="form-control mb-3" />
                  <button className="button">Submit</button>
                </div>

                <div className="contact-small-side1">
                  <div className="contact-text pb-3">Contact Information</div>
                  <div><strong>TELEPHONE </strong>+91 80 4160 2823</div>
                  <div><strong>MOBILE </strong>+91 74833 04583</div>
                  <div><strong>EMAIL </strong>hey@taomish.com</div>
                  <img src="assets/images/contact.svg" alt="img" className="contact-img pt-3" />
                </div>

                <div>
                  <div className="footer-cont">
                    <div className="footer-logo">
                      <a href='https://www.linkedin.com/company/taomish-india/about/' target="_blank" style={{ paddingRight: '20px' }}><svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg></a>
                      <a href="https://twitter.com/taomish" target="_blank" style={{ paddingRight: '20px' }}><svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg></a>
                      <a href="https://www.facebook.com/Taomish/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg></a>
                    </div>
                    <div className="footer1">© All rights reserved<span style={{ paddingRight: '10px' }}></span>|<span style={{ paddingRight: '10px' }}></span>Taomish India Pvt. Ltd.</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}
export default Contact;
