import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import EmploymentHistory from '../components/Employment/EmploymentHistory.jsx';
import Profile from '../components/Profile/Profile.jsx';
import Tabs from '../components/TabView/Tabs.jsx';
import DisplayCard from '../components/DisplayCard/DisplayCard.jsx';

import './portfolio.scss';


export default class PortfolioView extends Component {

  state = {
    activeTab: 'Employment'
  }

  setActiveTab = (activeTab) => {
    this.setState(prevState => {
      return {
        ...prevState, activeTab
      };
    }, () => { }
    );
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

  renderTabContent = () => {
    switch (this.state.activeTab) {
    case 'Employment':
      return this.renderEmploymentHistory();
    default:
      return '';
    }
  }

  renderTabMenu = () => {
    const menuItems = ['Employment', 'Skills', 'Education', 'Projects', 'About'];
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
