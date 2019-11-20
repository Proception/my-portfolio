import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';


const EmploymentHistory = ({ companyName, startDate, endDate, jobTitle, jobDescription, location }) => {
  return (
    <Row>
      <Col sm="12" md="3" lg="3" xl="3">
        <Row>
          <Col sm="12" md="12" lg="12" xl="12">{companyName}</Col>
        </Row>
        <Row>
          <Col sm="12" md="12" lg="12" xl="12">{`${startDate} - ${endDate}`}</Col>
        </Row>
      </Col>
      <Col sm="12" md="6" lg="6" xl="6">
        <Row>
          <Col sm="12" md="12" lg="12" xl="12">{jobTitle}</Col>
        </Row>
        <Row>
          <Col sm="12" md="12" lg="12" xl="12">{jobDescription}</Col>
        </Row>
      </Col>
      <Col sm="12" md="3" lg="3" xl="3">
        <Row>
          <Col sm="12" md="12" lg="12" xl="12">{location}</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default EmploymentHistory;
