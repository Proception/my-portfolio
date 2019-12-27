import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import TechSkills from './Tech/Tech.jsx';
import SoftSkills from './Soft/Soft.jsx';


import './skills.scss';

export default class Skills extends Component {

  state = {
    displayTab: '',
    selectedView: '',
    skillType: 'techSkills'
  }

  handleSkillTypeSelect = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => {
      return {
        ...prevState, [name]: value
      };
    }, () => {}
    );
  }


  techSkills = () => {
    this.setState({skillType: 'techSkills'});
  }

  softSkills = () => {
    this.setState({skillType: 'softSkills'});
  }

  displaySkillsBody = () => {
    const {skillType} = this.state;
    switch (skillType) {
    case 'softSkills':
      return this.renderSoftSkills();
    case 'techSkills':
      return this.renderTechSkills();
    default:
      return this.renderTechSkills();
    }
  }

  displaySkillsSelector = () => {
    return <div className={'skills-header-container'}>
      <label className={'skill-category-label'} htmlFor={'select'}>{'Select a skill category'}</label>
      <div className={'radio-container'} name="select">
        <input id="toggle-on" className="toggle toggle-left" checked={this.state.skillType == 'techSkills'} value="techSkills" onChange={this.handleSkillTypeSelect} name="skillType" type="radio" />
        <label htmlFor="toggle-on" className="btn1">Technical</label>
        <input id="toggle-off" className="toggle toggle-right" checked={this.state.skillType == 'softSkills'} value="softSkills" onChange={this.handleSkillTypeSelect} name="skillType" type="radio"/>
        <label htmlFor="toggle-off" className="btn2">People</label>
      </div>
    </div>;
  }

  renderSoftSkills = () => {
    const skills = [
      {logo: 'https://picsum.photos/70', skill: 'Team Player'},
      {logo: 'https://picsum.photos/70', skill: 'Adaptive Skills'},
      {logo: 'https://picsum.photos/70', skill: 'Communication Skills'},
      {logo: 'https://picsum.photos/70', skill: 'Cultural Awareness'},
      {logo: 'https://picsum.photos/70', skill: 'Cultural Awareness'},
    ];
    return <div className={'soft-skills-container'}><SoftSkills skills={skills}/></div>;
  }

  renderTechSkills = () => {
    const skills = [
      {logo: 'https://picsum.photos/70', skill: 'Java'},
      {logo: 'https://picsum.photos/70', skill: 'Python'},
      {logo: 'https://picsum.photos/70', skill: 'Javascript'}
    ];
    return <TechSkills skills={skills} />;
  }
  render() {
    return <div className={'skills-container'}>
      <div className={'skills-header'}>
        {
          this.displaySkillsSelector()
        }
      </div>
      <div className={'skills-body'}>
        {
          this.displaySkillsBody()
        }
      </div>
    </div>;
  }
}
