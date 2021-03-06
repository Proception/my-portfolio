import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import DisplayCard from '../DisplayCard/DisplayCard.jsx';
import './employmenthistory.scss';


const EmploymentHistory = ({ companyName, startDate, endDate, jobTitle, jobDescription, location, imgUrl }) => {
  return (
    <DisplayCard className = {'employment-history-card'}>
      <Row className={'employment-row'}>
        <Col className={'company-column'} sm="12" md="3" lg="3" xl="3">
          <Row className={'company-row employment-image'} sm="6" md="6" lg="6" xl="6"><img src={ imgUrl ? imgUrl : 'https://picsum.photos/id/1/60/60'} alt=""/></Row>
          <Row className={'company-row employment-title'} sm="6" md="6" lg="6" xl="6">{companyName}</Row>
          <Row className={'company-row employment-time'} sm="6" md="6" lg="6" xl="6">{`${startDate} - ${endDate}`}</Row>
        </Col>
        <Col sm="12" md="6" lg="6" xl="6">
          <Row className={'employment-designation'}>
            <Col sm="12" md="12" lg="12" xl="12" >{jobTitle}</Col>
          </Row>
          <Row className={'employment-description'}>
            <Col sm="12" md="12" lg="12" xl="12">{jobDescription}</Col>
          </Row>
        </Col>
        <Col sm="12" md="3" lg="3" xl="3">
          <Row className={'company-row employment-location'}  sm="6" md="6" lg="6" xl="6">{location}</Row>
        </Col>
      </Row>
    </DisplayCard>
  );
};

export default EmploymentHistory;
