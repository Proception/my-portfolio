import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import emailIcon from '../../../assets/email-icon.png';
import phoneIcon from '../../../assets/phone-icon.png';
import facebookIcon from '../../../assets/facebook-icon.png';
import linkedinIcon from '../../../assets/linkedin-icon.png';
import twitterIcon from '../../../assets/twitter-icon.png';

const ContactInfo = () => {
  return (
    <div>
      <div className={'social-icons'}>
        <img src={emailIcon} alt="" /> <span className={'contact-text'}>{'omasan.esimaje@gmail.com'}</span>
      </div>
      <div className={'social-icons'}>
        <img src={phoneIcon} alt="" /><span className={'contact-text'}>{'+234 70 622 57273'}</span>
      </div>
      <div className={'social-icons'}>
        <img src={linkedinIcon} alt="" /> <span className={'contact-text'}>{'LinkedIn'}</span> <img src={facebookIcon} alt="" /> <span className={'contact-text'}>{'Facebook'}</span> <img src={twitterIcon} alt="" /> <span className={'contact-text'}>{'Twitter'}</span>
      </div>
    </div>
  );
};

export default ContactInfo;
