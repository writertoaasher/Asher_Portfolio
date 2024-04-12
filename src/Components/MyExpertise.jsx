import React from 'react'
import { FaClone, FaBandcamp } from "react-icons/fa";
import { FaDesktop, FaPrint, FaMobileScreenButton, FaChartArea } from "react-icons/fa6";


const MyExpertise = () => {
  return (
    <>
      <div className="pp-expertise-area pt-100 pb-70">
        <div className="container">
          <div className="section-title style-two">
            <h2>My Expertise</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="pp-expertise-box"
              data-aos="fade-up" data-aos-duration={1200} data-aos-delay={100}
              >
                <FaClone className='icon' />
                <h3>Funnel Builder</h3>
                <p>Crafting high-level funnels with precision, I architect pathways that seamlessly guide from interest to conversion, sculpting digital journeys that elevate engagement and drive results.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="pp-expertise-box"
              data-aos="fade-up" data-aos-duration={1200} data-aos-delay={200}
              >
                <FaDesktop className="icon" />
                <h3>Web Design</h3>
                <p>"Proficient Web Programmer experienced in leveraging the MERN (MongoDB, Express.js, React.js, Node.js) stack to develop dynamic and scalable web applications. Skilled in crafting responsive user interfaces, implementing robust backend solutions, and optimizing performance for seamless user experiences. Dedicated to staying current with emerging technologies and best practices in web development to deliver innovative solutions that meet client needs and exceed expectations.".</p>
              </div>
            </div>
       
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="pp-expertise-box"
              data-aos="fade-up" data-aos-duration={1200} data-aos-delay={500}
              >
                <FaMobileScreenButton className="icon bg-eaf6ff" />
                <h3>App Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="pp-expertise-box"
              data-aos="fade-up" data-aos-duration={1200} data-aos-delay={600}
              >
                <FaChartArea className="icon bg-faf2ff" />
                <h3>Motion &amp; Animation</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyExpertise