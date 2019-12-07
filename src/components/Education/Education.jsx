import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './education.scss';


const Education = ({ degree, startDate, endDate, university, description }) => {
  return (
    <Row className={'employment-row'}>
      <Col className={'company-column'} sm="12" md="3" lg="3" xl="3">
        <Row className={'company-row employment-title'} sm="6" md="6" lg="6" xl="6">{degree}</Row>
        <Row className={'company-row employment-time'} sm="6" md="6" lg="6" xl="6">{`${startDate} - ${endDate}`}</Row>
      </Col>
      <Col sm="12" md="9" lg="9" xl="9">
        <Row className={'employment-designation'}>
          <Col sm="12" md="12" lg="12" xl="12" >{university}</Col>
        </Row>
        <Row className={'employment-description'}>
          <Col sm="12" md="12" lg="12" xl="12">{description}</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Education;
