import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import EmploymentHistory from '../components/Employment/EmploymentHistory.jsx';
import Education from '../components/Education/Education.jsx';
import Profile from '../components/Profile/Profile.jsx';
import Tabs from '../components/TabView/Tabs.jsx';
import DisplayCard from '../components/DisplayCard/DisplayCard.jsx';
import Articles from '../components/Articles/Articles.jsx';
import Projects from '../components/Projects/Projects.jsx';
import Skills from '../components/Skills/Skills.jsx';

import cookstar from '../assets/cookstar.png';
import ecobank from '../assets/ecobank.png';
import travela from '../assets/travela.png';
import entraded from '../assets/entraded.png';
import maingate from '../assets/maingate.png';
import civicgenius from '../assets/civicgenius.png';
import clarep from '../assets/clarep.png';
import elsculture from '../assets/elsculture.gif';
import newdev from '../assets/newdev.png';

import './portfolio.scss';


export default class PortfolioView extends Component {

  state = {
    activeTab: 'Employment',
    articles: [
      {title: 'An Encounter with Travis CI', url: 'www.benedictesimaje.com', description: `Lorem ipsum dolor sit amet,
      consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...`, tags: ['Continous Integration', 'Travis'],
      createdAt: '10-12-2018'}, 
      {title: 'Adapting to Bootcamp challenges', url: 'www.benedictesimaje.com', description: `Lorem ipsum dolor sit amet,
      consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...`, tags: ['learning', 'challenges', 'growth']}
    ]
  }

  componentDidMount() {

  }

  setActiveTab = (activeTab) => {
    this.setState(prevState => {
      return {
        ...prevState, activeTab
      };
    }, () => { }
    );
  }

  getArticles = () => {
    const mediumUrl = 'https://medium.com/@omasan.esimaje/latest?format=json';
    axios.get(mediumUrl)
      .then( (response) => {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  renderEmploymentHistory = () => {
    const employmentHistoryData = [
      {
        companyName: 'Andela',
        startDate: '2018',
        endDate: 'Date',
        jobTitle: 'Software Developer',
        jobDescription: `Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        location: 'Lagos, Nigeria'
      },
      {
        companyName: 'TeamApt',
        startDate: '2018',
        endDate: '2018',
        jobTitle: 'Software Engineer',
        jobDescription: `Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        location: 'Lagos, Nigeria'
      },
      {
        companyName: 'PearlSoft',
        startDate: '2017',
        endDate: '2018',
        jobTitle: 'Software Developer',
        jobDescription: `Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        location: 'Lagos, Nigeria'
      },
      {
        companyName: 'mCentric',
        startDate: '2016',
        endDate: '2018',
        jobTitle: 'Quality Assurance Analyst',
        jobDescription: `Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        location: 'Madrid, Spain'
      },
    ];
    return <DisplayCard className = {'employment-history-card'}>
      {
        employmentHistoryData.map( data => <EmploymentHistory {...data} /> )
      }
    </DisplayCard>;
  }

  renderEducation = () => {
    const educationData = [
      {
        degree: 'Computer Science, MSc.',
        startDate: '2017',
        endDate: '2018',
        university: 'University of Lagos',
        description: `Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
      },
      {
        degree: 'Computer Science, BSc.',
        startDate: '2010',
        endDate: '2014',
        university: 'Benson Idahosa University',
        description: `Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
      },
    ];
    return <DisplayCard className = {'employment-history-card'}>
      {
        educationData.map( data => <Education {...data} /> )
      }
    </DisplayCard>;
  }

  renderArticles = () => {
    return <Articles articlesData={this.state.articles} />;
  }

  renderProjects = () => {
    const projectsData = [
      {
        img: cookstar, 
        title: 'Cookstar',
        description: 'A cook for hire service built with the following tools; Javascript, Node, Express, Postgres, React, Redux, and Sequelize', 
        link: 'www.cookstar.org'
      },
      {
        img: ecobank, 
        title: 'Email Campaign Manager',
        description: 'An email campaign manager built with the following tools; Java, Bootfaces, Primefaces, Java Server Faces, Hibernate, OracleDB,  and GrapeJS', 
        link: ''
      },
      {
        img: travela, 
        title: 'Travela',
        description: 'A travel management tool built to handle travel related requests within Andela. It was built with Javascript, Node, Express, Postgres, React, Redux, Python, Flask, and Sequelize', 
        link: 'travela.andela.com'
      },
      {
        img: entraded, 
        title: 'Entraded',
        description: 'A personal AI driven Crypto Trading platform was built with Javascript, Node, Express, Postgres, React, Redux, Python, Flask, and Sequelize', 
        link: 'www.entraded.com'
      },
      {
        img: maingate, 
        title: 'MainGate',
        description: 'A property web application built to help users find their desired homes and allow agents post houses. It was built with Python/Django, MySQL, HTML/CSS, Django Templating Language and Django ORM ', 
        link: 'www.maingate.ng'
      },
      {
        img: civicgenius, 
        title: 'Civic Genius',
        description: 'A  web app and android game built with Java/Spring, Vanilla Javascript, Java/Android, bootstrap and MySQL', 
        link: ''
      },
      {
        img: clarep, 
        title: 'Clarep',
        description: 'A Centre for Language Research and English Proficiency. It was built with Joomla, HTML/CSS, MySQL and PHP.', 
        link: 'www.clarep.org'
      },
      {
        img: elsculture, 
        title: 'Elsculture',
        description: 'A pan African organisation that aims to promote, foster, and celebrate the growth and diversity of contemporary African culture in the Nigerian Entertainment Industry. It was built with Joomla, HTML/CSS, MySQL and PHP.', 
        link: 'www.elsculture.com.ng'
      },
      {
        img: newdev, 
        title: 'NewDev',
        description: 'A web application meant to help new developers through a learning path. It was built with Javascript, Node, Express, Postgres, React, Redux, and Sequelize', 
        link: 'www.newdev.tech'
      }
    ];
    return <Projects projects ={projectsData}/>;
  }

  renderSkills = () => {
    return <Skills />;
  }

  renderTabContent = () => {
    switch (this.state.activeTab) {
    case 'Employment':
      return this.renderEmploymentHistory();
    case 'Education':
      return this.renderEducation();
    case 'Articles':
      return this.renderArticles();
    case 'Projects': 
      return this.renderProjects();
    case 'Skills':
      return this.renderSkills();
    default:
      return '';
    }
  }

  renderTabMenu = () => {
    const menuItems = ['Employment', 'Skills', 'Education', 'Projects', 'Articles'];
    return menuItems.map(menu => <div label={menu} onClickTabItem= {this.setActiveTab}></div>);
  }
  render() {
    return (
      <Fragment>
        <div className={'top-container'}>
          <Container>
            <Profile />
            <Row>
              <Tabs  activeTab={this.state.activeTab}>
                {
                  this.renderTabMenu()
                }
              </Tabs>
            </Row>
          </Container>
        </div>
        <div className={'bottom-container'}>
          <Container>
            <Row>
              {
                this.renderTabContent()
              }
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}
