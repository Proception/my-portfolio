import React, { Component } from 'react';
import DisplayCard from '../../DisplayCard/DisplayCard.jsx';

const Soft = ({ skills }) => skills.map(({ skill, logo }) => <DisplayCard className={'soft-skills-card'}>
  <div className={'soft-skills-image'}>
    <img src={logo} alt="" />
  </div> 
  <div className={'soft-skills-title'}>
    {skill}
  </div>
</DisplayCard>
);

export default Soft;
