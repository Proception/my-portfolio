import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Container, Row } from 'reactstrap';
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
import andela from '../assets/andela.png';
import teamapt from '../assets/teamapt.png';
import mcentric from '../assets/mcentric.jpeg';
import pearlsoft from '../assets/pearlsoft.png';

import getir from '../assets/getir-logo.png';
import noah from '../assets/noah-logo.png';
import clipboard from '../assets/clipboard-logo.jpeg';
import vendease from '../assets/vendease.png';


import './portfolio.scss';


export default class PortfolioView extends Component {

  state = {
    activeTab: 'Employment',
    articles: [
      {title: 'An Encounter with Travis CI', url: 'medium.com/@omasan.esimaje/an-encounter-with-travis-ci-dd50bfbd77a5', description: `This is the mid-week of the Andela Bootcamp and things are starting to get very interesting. 
        Amidst all the learning and collaboration, 
        I decided to take a few minutes to write about Travis CI....`, tags: ['Continous Integration', 'Travis'],
      createdAt: '10-12-2018'}, 
      {title: 'Adapting to Bootcamp challenges', url: 'medium.com/@omasan.esimaje/adapting-to-bootcamp-challenges-4b89aa42f7f2', description: `To overcome challenge 1, 
        I had to seek help from my internal group to know how they went about the writing commit messages and PR request. 
        I also consulted my LFA(Learning Facilitator Assistant) to review every commit message and PR comments....`, tags: ['learning', 'challenges', 'growth']}
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
    const mediumUrl = 'http://medium.com/@omasan.esimaje';
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
        companyName: 'Vendease',
        startDate: '2022',
        endDate: 'Present',
        jobTitle: 'Senior Software Engineer',
        jobDescription: `Design and Implementation of a multi tenant architecture. Led a team to design, develop and deploy a menu costing tool. 
        Led the core services team to centralize authentication and notification services for all apps.`,
        location: 'Lagos, Nigeria',
        imgUrl: vendease
      },
      {
        companyName: 'Getir',
        startDate: '2021',
        endDate: '2022',
        jobTitle: 'Backend Engineer',
        jobDescription: `Design, Implementation, and Monitoring of core and geolocation services. 
        The services were responsible for defining service availability areas, distance calculation using multiple map providers, providing country information, storing global and country specific configurations, and reverse geocoding.`,
        location: 'Istanbul, Turkey',
        imgUrl: getir
      },
      {
        companyName: 'Clipboard Health',
        startDate: '2020',
        endDate: '2021',
        jobTitle: 'Senior Software Engineer',
        jobDescription: `Part of a team transitioning the monolith app to a microservice architecture
        Remodelling the app for code quality and readability`,
        location: 'San Francisco, CA',
        imgUrl: clipboard
      },
      {
        companyName: 'Noah Homes',
        startDate: '2020',
        endDate: '2020',
        jobTitle: 'Software Developer',
        jobDescription: `I was part of the team that rolled out 4 new apps to support the core business in May 2020. 
        These apps were both customer-facing and for staff. 
        They were crucial to supporting the business process thereby making life easier for Home Owners and Home Advisors.`,
        location: 'San Francisco, CA',
        imgUrl: noah
      },
      {
        companyName: 'Andela',
        startDate: '2018',
        endDate: '2020',
        jobTitle: 'Software Developer',
        jobDescription: `I worked as a software engineer available to be outsourced to top companies around the world. 
          During my time with Andela, 
          I worked with the Travela and Merry-ah teams as a Fullstack Javascript Engineer.`,
        location: 'Lagos, Nigeria',
        imgUrl: andela
      },
      {
        companyName: 'TeamApt',
        startDate: '2018',
        endDate: '2018',
        jobTitle: 'Software Engineer',
        jobDescription: `I worked on the POS merchant application for Stanbic IBTC called OlymPOS and Aptent.
          The solution is meant to help POS merchants manage POS transactions carried out on their machines 
          and help with conflict resolution too. At the time, I served as Fullstack Java Engineer.`,
        location: 'Lagos, Nigeria',
        imgUrl: teamapt
      },
      {
        companyName: 'PearlSoft',
        startDate: '2017',
        endDate: '2018',
        jobTitle: 'Software Developer',
        jobDescription: `I worked on the Ecobank Email Campaign Manager. 
          The solution was meant to help the bank send personalized email campaigns to targeted customers 
          and automatically send personalized birthday email messages to customers based on configuration. I served as a Fullstack Java Engineer.`,
        location: 'Lagos, Nigeria',
        imgUrl: pearlsoft
      },
      {
        companyName: 'mCentric',
        startDate: '2016',
        endDate: '2018',
        jobTitle: 'Quality Assurance Analyst',
        jobDescription: `I worked on the SMMT(Smart Mobile Marketing Tool) solution for Glo and 9mobile. 
          I was part of the team that tested and deployed the 9Mobile SMMT solution.
          I also helped design, develop and monitor campaigns defined by the Glo marketing team such as Free Data Day and Double Data.`,
        location: 'Madrid, Spain',
        imgUrl: mcentric
      },
    ];
    return <div className={'employment-container'}>
      {
        employmentHistoryData.map( data => <EmploymentHistory {...data} /> )
      }
    </div>;
  }

  renderEducation = () => {
    const educationData = [
      {
        degree: 'Computer Science, MSc.',
        startDate: '2017',
        endDate: '2018',
        university: 'University of Lagos',
        description: `I carried out research in the area of Artificial intelligence and robotics.
          I worked with Dr. Chika Yinka-Banjo to design and create a self-driving car using a raspberry pi and an arduino chassis. 
          It was powered by a power bank and a set of batteries for the motors. 
          The car used Computer vision to navigate a controlled environment.`
      },
      {
        degree: 'Computer Science, BSc.',
        startDate: '2010',
        endDate: '2014',
        university: 'Benson Idahosa University',
        description: `I carried out research in the area of Artificial intelligence and robotics. 
          I worked with Dr. Maxwell to build an autonomous car powered by a set of batteries. 
          The car made use of infrared sensors and an ultrasonic sensor to detect obstacles in its path.`
      },
    ];
    return <div className={'employment-container'}>
      {
        educationData.map( data => <DisplayCard className = {'employment-history-card'}><Education {...data} /></DisplayCard> )
      }
    </div>;
  }

  renderArticles = () => {
    return <div className={'articles-container'}><Articles articlesData={this.state.articles} /></div>;
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
    return <div className={'project-container'}><Projects projects ={projectsData}/></div>;
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
