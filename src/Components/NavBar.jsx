import React, { useEffect, useState } from "react"
import { FaAngleDown } from "react-icons/fa6"


const Navbar = () => {

  const [hamburgerList, setHamburgerList] = useState(false)
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 175);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    < >
      <div className={`navbar-area ${scrolling ? 'scrolled' : ''}`}>
        <nav className="navbar navbar-expand-md">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="images/icon.webp" alt="logo"  style={{ width: '40px', height: '40px' }} />
            </a>
            <button onClick={() => setHamburgerList(!hamburgerList)} 
            className="navbar-toggler collapsed" type="button">
              <span className="icon-bar top-bar" />
              <span className="icon-bar middle-bar" />
              <span className="icon-bar bottom-bar" />
            </button>     
            <div className={hamburgerList ? null : "collapse navbar-collapse" } id='okkk'>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home <FaAngleDown /></a>
                    <ul className="dropdown-menu mega-dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="/">Default Home</a>
                        <a className="nav-link" href="#">Creative Agency</a>
                        <a className="nav-link" href="#">IT Agency</a>
                        <a className="nav-link" href="#">Marketing Agency</a>
                        <a className="nav-link" href="#">Portfolio Agency</a>
                        <a className="nav-link" href="#">Studio Agency</a>
                        <a className="nav-link" href="#">Business Agency</a>
                        <a className="nav-link" href="#">Startup Agency</a>
                        <a className="nav-link" href="#">Software Startup 
                        <span className="new">New</span>
                        </a>
                        <a className="nav-link" href="#">Digital Marketing 
                        <span className="new">New</span>
                        </a>
                        <a className="nav-link" href="#">Business Consulting 
                        <span className="new">New</span>
                        </a>
                        <a className="nav-link" href="#">Freelancer Portfolio 
                        <span className="new">New</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Default Home Two</a>
                        <a className="nav-link" href="#">Creative Agency Two</a>
                        <a className="nav-link" href="#">IT Agency Two</a>
                        <a className="nav-link" href="#">Marketing Agency Two</a>
                        <a className="nav-link" href="#">Portfolio Agency Two</a>
                        <a className="nav-link" href="#">Studio Agency Two</a>
                        <a className="nav-link" href="#">Business Agency Two</a>
                        <a className="nav-link" href="#">Startup Agency Two</a>
                        <a className="nav-link" href="#">App Showcase 
                        <span className="new">New</span>
                        </a>
                        <a className="nav-link" href="#">Personal Portfolio 
                        <span className="new">New</span>
                        </a>
                        <a className="nav-link" href="#">SaaS Startup 
                        <span className="new">New</span>
                        </a>
                        <a className="nav-link" href="#">Cyber Security Agency 
                        <span className="new">New</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Services <FaAngleDown />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="#">Services Style 1</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Services Style 2</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Services Style 3</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Services Style 4</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Service Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Portfolio <FaAngleDown /></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio Details</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio Details 2</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Pages <FaAngleDown /></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Services Details</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio Details</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Team</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">FAQ</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">404 error</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Coming Soon</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" href="#">Blog <FaAngleDown /></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="#">Blog Grid</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Blog Right Sidebar</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Blog Left Sidebar</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                  </li>
                </ul>
                <div className="others-options">
                  <a className="btn btn-primary" href="#">Get Started</a>
                </div>
              </div>
          </div>
        </nav>
      </div>
      <div className="separate-border" />
    </>
  )
}

export default Navbar


// --------------------------------------------------------
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavBar() {
//   return (
//     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky="top">
//       <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;