import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import SideMenu from '../../SideMenu/SideMenu.jsx';
import DisplayCard from '../../DisplayCard/DisplayCard.jsx';
import star from '../../../assets/star.png';

export default class Tech extends Component {
  state = {
    displayStack: 'java',
    java: [
      {title: 'Frontend', tools: [
        {skillName: 'Java Server Faces', rating: 4},
        {skillName: 'Bootfaces', rating: 3},
        {skillName: 'Prime Faces', rating: 3},
        {skillName: 'Thymeleaf', rating: 2}
      ]},
      {title: 'Backend', tools: [
        {skillName: 'Spring', rating: 4},
        {skillName: 'SpringBoot', rating: 4},
        {skillName: 'Java Servlet API', rating: 3}
      ]},
      {title: 'Database Tools', tools: [
        {skillName: 'Hibernate', rating: 4},
        {skillName: 'Java Persistence API', rating: 4},
        {skillName: 'Spring Data JPA', rating: 3},
      ]},
      {title: 'Testing Tools', tools: [
        {skillName: 'JUnit', rating: 4},
        {skillName: 'Selenium', rating: 4},
        {skillName: 'Mockito', rating: 4},
      ]}
    ],
    javascript: [
      {title: 'Frontend', tools: [
        {skillName: 'React', rating: 5},
        {skillName: 'Redux/Redux Saga', rating: 4},
        {skillName: 'SASS/CSS', rating: 3},
        {skillName: 'Angular', rating: 2},
        {skillName: 'GrapeJS', rating: 2}
      ]},
      {title: 'Backend', tools: [
        {skillName: 'Node', rating: 5},
          {skillName: 'NestJS', rating: 5},
        {skillName: 'Express', rating: 4},
        {skillName: 'Web Pack', rating: 3}
      ]},
      {title: 'Database Tools', tools: [
        {skillName: 'Sequelize', rating: 4},
        {skillName: 'Node Postgres', rating: 4},
      ]},
      {title: 'Testing Tools', tools: [
        {skillName: 'Jest', rating: 4},
        {skillName: 'Enzyme', rating: 4},
        {skillName: 'Mocha', rating: 4},
        {skillName: 'Chai', rating: 4},
      ]}
    ],
    python: [
      {title: 'Frontend', tools: [
        {skillName: 'Django Templating Language', rating: 4},
      ]},
      {title: 'Backend', tools: [
        {skillName: 'Django', rating: 5},
        {skillName: 'Flask', rating: 4},
        {skillName: 'Tensorflow', rating: 4}
      ]},
      {title: 'Database Tools', tools: [
        {skillName: 'Django ORM', rating: 4},
      ]},
      {title: 'Testing Tools', tools: [
        {skillName: 'Pytest', rating: 4},
      ]}
    ],
    design: [
      {title: 'Design Tools', tools: [
        {skillName: 'Figma', rating: 5},
        {skillName: 'Invision', rating: 3},
        {skillName: 'Microsoft Paint', rating: 5},
        {skillName: 'Adobe Photoshop', rating: 2},
          {skillName: 'Adobe XD', rating: 4},
      ]},
    ],
    worktools: [
      {title: 'Project Management', tools: [
        {skillName: 'Pivotal Tracker', rating: 5},
        {skillName: 'Redmine', rating: 3},
        {skillName: 'Jira', rating: 3},
        {skillName: 'Asana', rating: 3},
      ]},
      {title: 'Servers/Platforms', tools: [
        {skillName: 'Amazon Web Services', rating: 4},
        {skillName: 'Google Cloud Platform', rating: 3},
        {skillName: 'Apache Tomcat', rating: 5},
        {skillName: 'Nginx', rating: 3},
        {skillName: 'Glassfish', rating: 4},
        {skillName: 'Heroku', rating: 4},
      ]},
      {title: 'Workflow', tools: [
        {skillName: 'Git', rating: 4},
        {skillName: 'Gitlab', rating: 5},
        {skillName: 'Github', rating: 5},
        {skillName: 'Bitbucket', rating: 5},
        {skillName: 'Travis CI', rating: 3},
        {skillName: 'Circle CI', rating: 5},
        {skillName: 'Jenkins', rating: 3},
          {skillName: 'Docker', rating: 5},
          {skillName: 'Nx', rating: 5},
      ]},
      {title: 'Operating Systems', tools: [
        {skillName: 'Mac OS', rating: 4},
        {skillName: 'Centos', rating: 3},
        {skillName: 'Ubuntu', rating: 4},
        {skillName: 'Windows', rating: 5},
      ]},
      {title: 'IDEs', tools: [
        {skillName: 'IntelliJ', rating: 4},
        {skillName: 'Eclipse', rating: 3},
        {skillName: 'Netbeans', rating: 5},
        {skillName: 'VSCode', rating: 5},
      ]},
      {title: 'Caching/Messaging Tools', tools: [
          {skillName: 'Kafka', rating: 4},
          {skillName: 'NATS Jetstream', rating: 4},
          {skillName: 'Redis', rating: 5},
        ]},
      {title: 'Monitoring Tools', tools: [
          {skillName: 'New Relic', rating: 5},
          {skillName: 'Sentry', rating: 4},
          {skillName: 'Data dog', rating: 5},
          {skillName: 'AWS Lens', rating: 5},
          {skillName: 'AWS Logs', rating: 5},
        ]},
    ],
  }

  viewJava = () => {
    this.setState({displayStack: 'java'});
  }
  viewJavascript = () => {
    this.setState({displayStack: 'javascript'});
  }
  viewPython = () => {
    this.setState({displayStack: 'python'});
  }

  viewDesign = () => {
    this.setState({displayStack: 'design'});
  }

  viewWorkTools = () => {
    this.setState({displayStack: 'worktools'});
  }


  renderSideMenu = () => {
    return (
      <SideMenu 
        displayStack={this.state.displayStack}
        viewJava={this.viewJava} 
        viewJavascript={this.viewJavascript}
        viewPython={this.viewPython}
        viewDesign={this.viewDesign}
        viewWorkTools= {this.viewWorkTools}
      />
    );
  }

  displayRating = (rating) => {
    const fullStars = [];
    for (let index = 0; index < Math.floor(rating); index++) {
      fullStars.push(<img src={star} alt=""/>);
    }
    return fullStars;
  }

  displaySkills = () => {
    const {displayStack} = this.state;

    if (displayStack === 'java') {
      const {java} = this.state;

      return java.map(({title, tools}) => {
        return <div className={'skill-section'}>
          <div className={'skill-title'}>{title}</div>
          {
            tools.map(({skillName, rating})=> <div className={'skill-name'} >{skillName} <span>{this.displayRating(rating)}</span></div> )
          }
        </div>
      });
    }

    if (displayStack === 'javascript') {
      const {javascript} = this.state;

      return javascript.map(({title, tools}) => {
        return <div className={'skill-section'}>
          <div className={'skill-title'}>{title}</div>
          {
            tools.map(({skillName, rating})=> <div className={'skill-name'} >{skillName} <span>{this.displayRating(rating)}</span></div> )
          }
        </div>
      });
    }


    if (displayStack === 'python') {
      const {python} = this.state;

      return python.map(({title, tools}) => {
        return <div className={'skill-section'}>
          <div className={'skill-title'}>{title}</div>
          {
            tools.map(({skillName, rating})=> <div className={'skill-name'} >{skillName} <span>{this.displayRating(rating)}</span></div> )
          }
        </div>
      });
    }

    if (displayStack === 'design') {
      const {design} = this.state;

      return design.map(({title, tools}) => {
        return <div className={'skill-section'}>
          <div className={'skill-title'}>{title}</div>
          {
            tools.map(({skillName, rating})=> <div className={'skill-name'} >{skillName} <span>{this.displayRating(rating)}</span></div> )
          }
        </div>
      });
    }


    if (displayStack === 'worktools') {
      const {worktools} = this.state;

      return worktools.map(({title, tools}) => {
        return <div className={'skill-section'}>
          <div className={'skill-title'}>{title}</div>
          {
            tools.map(({skillName, rating})=> <div className={'skill-name'} >{skillName} <span>{this.displayRating(rating)}</span></div> )
          }
        </div>
      });
    }

  } 

  render () {
    return <div className={'tech-skills-container'}>
      <Row>
        <Col sm="12" md="3" lg="3" xl="3">
          {
            this.renderSideMenu()
          }
        </Col>
        <Col sm="12" md="8" lg="8" xl="8">
          <div>
            <DisplayCard className={'skills-content-card'}>
              <div className={'skills-wrapper'}>
                {
                  this.displaySkills()
                }
              </div>
            </DisplayCard>
          </div>
        </Col>
      </Row>
    </div>;
  }
}
