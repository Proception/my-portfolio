import React from 'react';
import { Row, Col } from 'reactstrap';
import Photo from './Photo/Photo.jsx';
import ContactInfo from './ContactInfo/ContactInfo.jsx';
import Summary from './Summary/Summary.jsx';


const summaryData = 'Fullstack web developer with 7 years experience working with Java, Javascript and Python. I am very passionate about the quality of work I deliver and the impact it makes in the lives of the stakeholders. I have experience building machine learning and Big Data solutions with tools like tensorflow, raspberry pi, hadoop and pentaho.';

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
