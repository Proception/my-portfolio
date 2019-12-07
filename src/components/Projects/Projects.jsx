import React, { Component } from 'react';
import ProjectCard from './ProjectCard.jsx';
import './projects.scss';

const Projects = ({projects}) => <ProjectCard {...projects}/>;

export default Projects;
