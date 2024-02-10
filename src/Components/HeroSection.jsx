import React from 'react'

const HeroSection = () => {
    return (
        <div>
            <div className="personal-portfolio-banner-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="personal-portfolio-banner-content">
                                <span className="sub-title"
                                data-aos="fade-in" data-aos-duration={1200} data-aos-delay={100}
                                >Hello I'm</span>
                                <h1
                                data-aos="fade-in"  data-aos-duration={1200} data-aos-delay={200}
                                >Asher Imtiaz</h1>
                                <h4
                                data-aos="fade-in" data-aos-duration={1200} data-aos-delay={300}
                                >MERN Stack Developer, GoHighLevel CRM Expert</h4>
                                <p
                                data-aos="fade-in" data-aos-duration={1200} data-aos-delay={400}
                                >                As a React , JavaScript, GoHighLevel Developer, I specialize in crafting responsive and interactive user interfaces using React.js. Leveraging my expertise in JavaScript, I develop robust frontend logic to enhance user experiences. With proficiency in integrating with the GoHighLevel platform, I create seamless CRM and marketing automation solutions tailored to clients' needs..</p>

                                <a className="default-btn-two"
                                    data-aos="fade-in" data-aos-duration={1200} data-aos-delay={400} 
                                    href="/contact/">Connect With Me</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="personal-portfolio-banner-image"
                            data-aos="fade-up" data-aos-duration={1200} data-aos-delay={600}
                            >
                                <img src="/images/banner-profile.webp" alt="image"   />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pp-shape1">
                    <img src="/images/shape1.webp" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection