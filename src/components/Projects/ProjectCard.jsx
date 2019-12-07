import React, { Component } from 'react';
import './projects.scss';


const ProjectCard = ({ img, title, description, link }) => {
  return (
    <DisplayCard className={'project-card'}>
      <div className={'project-image'}></div>
      <div className={'project-title'}></div>
      <div className={'project-description'}></div>
      <div className={`button ${link ? 'button-active': 'button-disabled'}`}>view</div>
    </DisplayCard>
  );
};

export default ProjectCard;
