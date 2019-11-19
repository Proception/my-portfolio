import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Photo from '../components/Profile/Photo/Photo.jsx';
import Summary from '../components/Profile/Summary/Summary.jsx';
import ContactInfo from '../components/Profile/ContactInfo/ContactInfo.jsx';


export default class PortfolioView extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md="4" lg="4" xl="4">photo</Col>
          <Col sm="12" md="8" lg="8" xl="8">
            <Row>
              <Col sm="12" md="12" lg="12" xl="12">{'sfdfdsfsdfs'}</Col>
              <Col sm="12" md="12" lg="12" xl="12">{'dssfsfsdfsdfsf'}</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs="2" sm="2" md="2" lg="2" xl="2">.col</Col>
          <Col xs="2" sm="2" md="2" lg="2" xl="2">.col</Col>
          <Col xs="2" sm="2" md="2" lg="2" xl="2">.col</Col>
          <Col xs="2" sm="2" md="2" lg="2" xl="2">.col</Col>
          <Col xs="2" sm="2" md="2" lg="2" xl="2">.col</Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
    );
  }
}
