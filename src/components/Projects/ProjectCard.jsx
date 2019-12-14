import React, { Component } from 'react';
import DisplayCard from '../DisplayCard/DisplayCard.jsx';

import './projects.scss';


const ProjectCard = ({ img, title, description, link }) => {
  return (
    <DisplayCard className={'project-card'}>
      <div className={'project-image'}><img src={img ? img : 'https://picsum.photos/100'} alt="" /></div>
      <div className={'project-title'}>{title}</div>
      <div className={'project-description'}>{description}</div>
      <div onClick={() => window.open(`https://${link}`, '_blank')} className={`project-button ${link ? 'project-button-active': 'project-button-disabled'}`}>view</div>
    </DisplayCard>
  );
};

export default ProjectCard;
