import React, { useEffect } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Container, Row, Col, Form,FormGroup } from "reactstrap";
import "../style/Contact.css";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return  <section>
 
<Container>
<Breadcrumb className='mb-5'>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      
      <Breadcrumb.Item active>Contact</Breadcrumb.Item>
    </Breadcrumb>
  <Row className='mt-5'>
    <Col lg='4'>
      <div className="contact_info info_top">
        <div className="title ">
        <i class="ri-phone-line"></i>
          <h1>Call To Us</h1>
        </div>
        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone: +8801611112222</p>
      </div>
      <div className="contact_info">
        <div className="title">
        <i class="ri-mail-line"></i>          <h1>Write To US</h1>
        </div>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Emails: customer@exclusive.com</p>
        <p>Emails: support@exclusive.com</p>
      </div>
    </Col>
    <Col lg='8' className='input_contact'>
      <Form>
      <div className="inputs"> 
      <FormGroup>
<input type="text" placeholder='Your Name ' />
</FormGroup>
<FormGroup>
<input type="text" placeholder='Your Email ' />
</FormGroup>
<FormGroup>
<input type="text" placeholder='Your Phone ' />
</FormGroup>
</div>
      
      <FormGroup>
        <textarea   placeholder='Your Massage' ></textarea>
      </FormGroup>
      <div className="btn_contact">
        <button className="contact_btn">Send Massage</button>
      </div>
      </Form>
     
    </Col>

  </Row>
</Container>
  </section>
}

export default Contact