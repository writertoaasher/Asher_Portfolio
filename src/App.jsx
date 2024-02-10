import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection';
import MyExpertise from './Components/MyExpertise';
import MyEducation from './Components/MyEducation';
import MyAllProjects from './Components/MyAllProjects';
import Testimonials from './Components/Testimonials';
import MySkills from './Components/MySkills';
import MyBestClients from './Components/MyBestClients';
import LatestBlogPost from './Components/LatestBlogPost';
import HireMe from './Components/HireMe'
import GoToTop from "./Components/GoToTop";
import Footer from "./Components/Footer"
// import 'aos/dist/aos.css';
// import AOS from 'aos';
// import ConfettiAnimation from './Components/ConfettiAnimation';
const App = () => {

  // useEffect(() => {
  //   AOS.init({
  //     // duration: "1200",
  //     // easing: 'ease-in-sine',
  //     // delay: 100,
  //   })
  // }, []);

  return (
    <div>
      {/* <ConfettiAnimation></ConfettiAnimation> */}
     <NavBar></NavBar>
     <HeroSection></HeroSection>
     <MyExpertise></MyExpertise>
     <MyAllProjects></MyAllProjects>
     <MySkills></MySkills>
     <MyEducation></MyEducation>
     <Testimonials></Testimonials>
     <MyBestClients></MyBestClients>
     <LatestBlogPost></LatestBlogPost>
     <HireMe></HireMe>
     <GoToTop></GoToTop>
     <Footer></Footer>

     </div>
  )
}

export default App
