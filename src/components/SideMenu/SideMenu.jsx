import React, { Component } from 'react';
import DisplayCard from '../DisplayCard/DisplayCard.jsx';
import './SideMenu.scss';

export default class SideMenu extends Component {

  componentDidMount() {
  }

  generateSideMenuItems = () => {
    const {
      viewRequest,
      newRequest,
      browseChef,
      requestHistory,
      pendingRequest
    } = this.props;

    const  menuItems = [
      {
        imgUrl: addIcon,
        menuValue: 'New Request',
        action: newRequest
      },
      {
        imgUrl: viewIcon,
        menuValue: 'View Requests',
        action: viewRequest
      }
    ];
    return menuItems.map(menuItem => <a className="side-menu-item-link" onClick={() => menuItem.action()} >
      <div className="side-menu-item ">
        <div className="side-menu-item-image">
          <img src={menuItem.imgUrl} />
        </div>
        <div className="text-space">{menuItem.menuValue}</div>
      </div>
    </a>
    );
  }

  render() {
    return (
      <div className={'side-menu-card-container'}>
        <DisplayCard class={'side-menu-card'}>
          <div className="side-menu-content">
            <div className="side-menu-list">
              {
                this.generateSideMenuItems()
              }
            </div>
          </div>
        </DisplayCard>
      </div>
    );
  }
}
