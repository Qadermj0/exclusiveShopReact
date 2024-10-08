import React, { useEffect, useState } from "react";
 import { Container, Row, Col, FormGroup, Form } from "reactstrap";
import { Link } from "react-router-dom";
 import signupImg from '../components/UI/images/login.jfif'
 import '../style/Signup.css';

  const Signup = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
       <section className="signup">
        <Container>
        <Row className="res_content">
           <Col lg='6' >
            <div className="img">
              <img src={signupImg} alt="" />
            </div>
           </Col>
              <Col lg="6"  >
               <div className="info  text-center">
               <h3  > Create an account</h3>
                <p>Enter your details below</p>
                <Form className="auth_form  " >
                  <FormGroup className="form_group">
                    <input
                      type="text"
                      placeholder="Name"
                      
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input
                      type="email"
                      placeholder="Email or Phone Number"
                      
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input
                      type="password"
                      placeholder="Password"
                      
                    />
                  </FormGroup>

                  <div className=" ">
                  <button type="submit" className="login_btn">
                    Create an account
                  </button>
                  <button type="submit" className="login_btn  google_btn">
                  <span ><i class="ri-google-fill"></i></span>

                  Sign up with Google                  </button>
                  <p className="text-center contect"> 
                  Already have account?
                  <span > <Link to="/login">Login</Link></span>
                 
                  </p>
                  </div>
                  
                 
                </Form>
               </div>
              </Col>
          
          </Row>
          </Container>   
       
 
       </section>
   );
};

export default Signup;
