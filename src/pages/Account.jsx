import React, { useEffect } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Container, Row, Col, Form,FormGroup } from "reactstrap";
import "../style/Account.css";
const Account = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return  <section>

    <Container> 
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      
      <Breadcrumb.Item active>My Account</Breadcrumb.Item>
    </Breadcrumb>
      <Row className='account'>
        <Col lg='4' md='12' >
          <div className="content_account">
          <h4>Manage My Account</h4>
       <div className="into">
       <p className='para'>My Profile</p>
        <p>Address Book</p>
        <p>My Payment Options</p>
       </div>
          </div>
        
          <div className="content_account">
          <h4>My Orders</h4>
        <div className="into">
        <p>My Returns</p>
        <p>My Cancellations</p>
        </div>
           </div>
        
          <div className="content_account">
          <h4>My WishList</h4>
        
          </div>
        </Col>
       
        <Col lg='8' md='12' sm='12' xs='12' className='edit_input'>
          <div className="header_edit mb-2">
            <h2>Edit Your Profile</h2>
          </div>
          <Form>
            <div className="information">
              <FormGroup>
                <label >First Name</label><br />
                <input type="text"  placeholder='Md'/>
              </FormGroup>
              <FormGroup>
                <label >Last Name</label><br />
                <input type="text"  placeholder='Rimel'/>
              </FormGroup>
            </div>
            <div className="information">
              <FormGroup>
                <label >Email</label> <br />
                <input type="text"  placeholder='rimel1111@gmail.com'/>
              </FormGroup>
              <FormGroup>
                <label >Address</label><br />
                <input type="text"  placeholder='Kingston, 5236, United State'/>
              </FormGroup>
            </div>
<div className="password_change">
  <h2>Password Changes</h2>
  <FormGroup>
                 <input type="password"  placeholder='Current Password'/>
              </FormGroup>
              <FormGroup>
                 <input type="password"  placeholder='New Password'/>
              </FormGroup>
              <FormGroup>
                 <input type="password"  placeholder='Confirm New Password'/>
              </FormGroup>
</div>
           

<div className="btn_pass d-flex align-items-center  justify-content-end ">
  <span>Cancel</span>
        <button className="pass_btn">Save Change</button>
      </div>
          </Form>

        </Col>
      </Row>

      
    </Container>
  </section>
}

export default Account