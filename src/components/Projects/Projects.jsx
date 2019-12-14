import React, { Component } from 'react';
import ProjectCard from './ProjectCard.jsx';
import './projects.scss';

const Projects = ({projects}) => projects.map( project => <ProjectCard {...project}/>);

export default Projects;
