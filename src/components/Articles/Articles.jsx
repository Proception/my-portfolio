import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import DisplayCard from '../DisplayCard/DisplayCard.jsx';
import './articles.scss';


const Articles = ({ articlesData }) => {
  return articlesData.map(({title, description, url, tags, createdAt}) => <DisplayCard onClick={() => window.open(`https://${url}`, '_blank')} className = {'articles-card'}>  
    <Row >
      <Col className={'article-title'} sm="8" md="8" lg="8" xl="8">
        {
          title
        }
      </Col>
      {/* <Col className={'read-more'} sm="1" md="1" lg="1" xl="1">
      </Col>
      <Col className={'date-created'} sm="2" md="2" lg="2" xl="2">
        {
          createdAt
        }
      </Col> */}
    </Row>
    <Row>
      <Col className={'article-description'} sm="12" md="12" lg="12" xl="12">
        {
          description
        }
      </Col>
    </Row>
    <Row>
      <Col className={'article-tags'} sm="12" md="12" lg="12" xl="12">
        {
          tags.map( tag => <span className={'tags'}>{tag}</span>)
        }
      </Col>
    </Row>
    <Row>
      <Col className={'read-more'} sm="12" md="12" lg="12" xl="12">
        Read More
      </Col>
    </Row>
  </DisplayCard>
  )
};

export default Articles;
