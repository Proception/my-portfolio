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
        img: '', 
        title: 'Cookstar',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 
        link: 'www.cookstar.com'
      },
      {
        img: '', 
        title: 'Email Campaign Manager',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 
        link: 'www.cookstar.com'
      },
      {
        img: '', 
        title: 'Travela',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 
        link: 'travela.andela.com'
      },
      {
        img: '', 
        title: 'Entraded',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 
        link: 'www.cookstar.com'
      },
      {
        img: '', 
        title: 'MainGate',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 
        link: 'www.cookstar.com'
      },
      {
        img: '', 
        title: 'Civic Genius',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 
        link: 'www.cookstar.com'
      },
      {
        img: '', 
        title: 'Clarep',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 
        link: 'www.cookstar.com'
      },
      {
        img: '', 
        title: 'Elsculture',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 
        link: 'www.cookstar.com'
      },
      {
        img: '', 
        title: 'NewDev',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 
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
