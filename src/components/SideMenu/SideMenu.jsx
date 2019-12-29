import React, { Component } from 'react';
import DisplayCard from '../DisplayCard/DisplayCard.jsx';

import javaIcon from '../../assets/java-icon.png';
import javascriptIcon from '../../assets/javascript-icon.png';
import pythonIcon from '../../assets/python-icon.png';
import designIcon from '../../assets/paint-icon.png';
import settingsIcon from '../../assets/settings.png';
import './SideMenu.scss';



export default class SideMenu extends Component {

  componentDidMount() {
  }

  generateSideMenuItems = () => {
    const {
      displayStack,
      viewJava,
      viewPython,
      viewJavascript,
      viewDesign,
      viewWorkTools
    } = this.props;

    const  menuItems = [
      {
        imgUrl: javaIcon,
        menuValue: 'Java',
        menuId: 'java',
        action: viewJava,
      },
      {
        imgUrl: pythonIcon,
        menuValue: 'Python',
        menuId: 'python',
        action: viewPython
      },
      {
        imgUrl: javascriptIcon,
        menuValue: 'Javascript',
        menuId: 'javascript',
        action: viewJavascript
      },
      {
        imgUrl: designIcon,
        menuValue: 'UI/UX Design',
        menuId: 'design',
        action: viewDesign
      },
      {
        imgUrl: settingsIcon,
        menuValue: 'Work Tools',
        menuId: 'worktools',
        action: viewWorkTools
      }
    ];
    return menuItems.map(menuItem => <a className="side-menu-item-link" onClick={() => menuItem.action()} >
      <div className={`${displayStack === menuItem.menuId ? 'side-menu-item-active' : 'side-menu-item'}` }>
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
        <DisplayCard className={'side-menu-card'}>
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
