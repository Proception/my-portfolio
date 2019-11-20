import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab.jsx';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  componentDidUpdate(prevProps) {
    if(prevProps.activeTab !== this.props.activeTab){
      this.setState({ activeTab: this.props.activeTab });
    }
  }

  render() {
    const {
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div className="tabs">
        <ol className=" top-container tab-list">
          {children.map((child) => {
            if(child) {
              const { label, imgUrl, onClickTabItem } = child.props;
              return (
                <Tab
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  imgUrl={imgUrl}
                  onClick={onClickTabItem}
                />
              );
            }
          })}
        </ol>
      </div>
    );
  }
}

export default Tabs;
