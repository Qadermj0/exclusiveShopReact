import React, { useEffect, useState } from "react";
 import { Container, Row, Col, FormGroup, Form } from "reactstrap";
import { Link } from "react-router-dom";
 import signupImg from '../components/UI/images/login.jfif'
 import '../style/Signup.css';

  const Login = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
       <section className="signup">
        <Container>
        <Row className="res_content">
           <Col lg='6'>
            <div className="img">
              <img src={signupImg} alt="" />
            </div>
           </Col>
              <Col lg="6"  >
               <div className="info login_info text-center ">
               <h3  > Log in to Exclusive</h3>
                <p>Enter your details below</p>
                <Form className="auth_form  " >
                  
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

                  <div className="btns ">
                  <button type="submit" className="login_btn login_click">
                  Log In
                  </button>
                   <span>Forget Password?</span>
                  </div>
                  
                 
                </Form>
               </div>
              </Col>
          
          </Row>
          </Container>   
       
 
       </section>
   );
};

export default Login;
