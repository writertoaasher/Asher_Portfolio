import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import GoToTop from './GoToTop';



const Footer = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row ">
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget"
               data-aos="fade-in" data-aos-duration={1200} data-aos-delay={100}
              >
                <div className="logo">
                  <a href="/">
                    <img src="/images/icon.webp" alt="Logo"  style={{ width: '100px', height: '100px' }}/>
                  </a>
                </div>
                <p>As a React JavaScript GoHighLevel Developer, I specialize in crafting responsive and interactive user interfaces using React.js. Leveraging my expertise in JavaScript, I develop robust frontend logic to enhance user experiences. With proficiency in integrating with the GoHighLevel platform, I create seamless CRM and marketing automation solutions tailored to clients' needs..</p>
                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/asherii1" target="_blank">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/" target="_blank">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <GrInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget"
               data-aos="fade-in" data-aos-duration={1200} data-aos-delay={200} 
              >
                <h3>Explore</h3>
                <ul className="list">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <li><a href="#">Team</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget"
              data-aos="fade-in" data-aos-duration={1200} data-aos-delay={300}
              >
                <h3>Quick Links</h3>
                <ul className="list">
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Faq</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms &amp; Conditions</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget"
              data-aos="fade-in" data-aos-duration={1200} data-aos-delay={400}
              >
                <h3>Get in Touch</h3>
                <ul className="get-in-touch">
                  <li>
                    <IoLocationOutline className="hhh" style={{ marginTop: "4px" }} /> 2750 Quadra Street Punjab, Pakistan.
                  </li>
                  <li><FaHeadset className="hhh" style={{ marginTop: "8px" }} /><a href="tel:#">+098-7654-321</a><br /><a href="tel:#">+123-4567-890</a></li>
                  <li><BiEnvelope className="hhh" style={{ marginTop: "3px" }} /><a href="#"><span>bilal@pungent.com</span></a>
                    <a href="#"><span>support@pungent.com</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <p>Copyright © 2023 Pungent. All Rights Reserved By
              <a href="#" target="_blank" style={{ marginLeft: "4px" }}>Bilal</a>
            </p>
            <GoToTop />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
