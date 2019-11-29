import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Photo from './Photo/Photo.jsx';
import ContactInfo from './ContactInfo/ContactInfo.jsx';
import Summary from './Summary/Summary.jsx';

const summaryData = 'Fullstack web developer with experience working with Java, Javscript and Python. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';

const Profile = () => {
  return (
    <Row>
      <Col className={'photo-container'} sm="12" md="3" lg="3" xl="3"><Photo /></Col>
      <Col sm="12" md="9" lg="9" xl="9">
        <Row>
          <Col className={'name'} sm="12" md="12" lg="12" xl="12">{'Benedict Esimaje'}</Col>
          <Col sm="12" md="12" lg="12" xl="12">
            <Row><Summary summary={summaryData}/></Row>
            <Row><ContactInfo /></Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Profile;
