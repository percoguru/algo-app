import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
import { labeledStatement } from '@babel/types';
import { Control, LocalForm, Errors } from 'react-redux-form';

class Contact extends Component {

  constructor(props) {
    super(props);


    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleSubmit(event) {
    console.log("Current State is: "+ JSON.stringify(this.state))
    alert("Current State is: "+ JSON.stringify(this.state))
    event.preventDefault();
  }

  render() {
    const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
    return(
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
          <div className="row row-content">
              <div className="col-12">
              <h3>Location Information</h3>
              </div>
              <div className="col-12 col-sm-4 offset-sm-1">
                      <h5>Our Address</h5>
                      <address>
                      121, Clear Water Bay Road<br />
                      Clear Water Bay, Kowloon<br />
                      HONG KONG<br />
                      <i className="fa fa-phone"></i>: +852 1234 5678<br />
                      <i className="fa fa-fax"></i>: +852 8765 4321<br />
                      <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                      </address>
              </div>
              <div className="col-12 col-sm-6 offset-sm-1">
                  <h5>Map of our Location</h5>
              </div>
              <div className="col-12 col-sm-11 offset-sm-1">
                  <div className="btn-group" role="group">
                      <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                      <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                      <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                  </div>
              </div>
          </div>

          <div className="row row-content">
            <div className ="col-12">
              <h3>Send us your feedback</h3>
            </div>
    
            <div className="col-12 col-md-9">
              <LocalForm onSubmit={(values) => this.handleSubmit(value)}>
                <Row className="form-group">
                  <Label htmlFor="firstname" md={2}>First Name</Label>
                  <Col md={10}>
                    <Input type="text" id="firstname" name="firstname" 
                      placeholder="First Name"
                      onBlur={this.handleBlur('firstname')}
                      value={this.state.firstname} 
                      valid = {errors.firstname === ''}
                      invalid = {errors.firstname !== ''}
                      onChange={this.handleInputChange}/>
                    <FormFeedback>
                      {errors.firstname}
                    </FormFeedback>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="lastname" md={2}>Last Name</Label>
                  <Col md={10}>
                    <Input type="text" id="lastname" name="lastname" 
                      placeholder="Last Name"
                      onBlur={this.handleBlur('lastname')}
                      value={this.state.lastname} 
                      valid = {errors.lastname === ''}
                      invalid = {errors.lastname !== ''}
                      onChange={this.handleInputChange}/>
                    <FormFeedback>
                      {errors.lastname}
                    </FormFeedback>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="telnum" md={2}>Contact Telephone Number</Label>
                  <Col md={10}>
                    <Input type="tel" id="telnum" name="telnum" 
                      placeholder="Tel. Number"
                      onBlur={this.handleBlur('telnum')}
                      value={this.state.telnum} 
                      valid = {errors.telnum === ''}
                      invalid = {errors.telnum !== ''}
                      onChange={this.handleInputChange}/>
                    <FormFeedback>
                      {errors.telnum}
                    </FormFeedback>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="email" md={2}>Email</Label>
                  <Col md={10}>
                    <Input type="email" id="email" name="email" 
                      placeholder="Email"
                      value={this.state.email}
                      valid = {errors.email === ''}
                      invalid = {errors.email !== ''}
                      onBlur={this.handleBlur('email')}
                      onChange={this.handleInputChange} />
                    <FormFeedback>
                      {errors.email}
                    </FormFeedback>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{size: 6, offset: 2}} >
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" name="agree" 
                          checked={this.state.agree}
                          onChange={this.handleInputChange} /> {' '}
                          <strong>May we contact you?</strong>
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={{size: 3, offset: 1}} >
                    <Input type="select" name="contactType" onChange={this.handleInputChange}
                      value={this.state.contacttype} >
                        <option>Tel.</option>
                        <option>Email</option>
                      </Input>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                  <Col md={10}>
                    <Input type="textarea" id="message" name="message" onChange={this.handleInputChange}
                      rows="12"
                      value={this.state.message} />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{size: 10, offset:2}}>
                      <Button type="submit" color="primary">
                        Send Feedback
                      </Button>
                  </Col>
                </Row>
              </LocalForm>
            </div>
          </div>
        </div>
    );
  }
    
}

export default Contact;
