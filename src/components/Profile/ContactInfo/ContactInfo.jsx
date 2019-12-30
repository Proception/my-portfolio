import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import emailIcon from '../../../assets/email-icon.png';
import phoneIcon from '../../../assets/phone-icon.png';
import githubIcon from '../../../assets/github.png';
import linkedinIcon from '../../../assets/linkedin-icon.png';
import twitterIcon from '../../../assets/twitter-icon.png';

const copyToClipboard = (e, elementId) => {
  document.getElementById(elementId).innerText;
  document.execCommand('copy');
  // alert(`Copied ${document.getElementById(elementId).innerText}`)
};

const ContactInfo = () => {
  return (
    <div className={'contact-details'}>
      <div className={'social-icons'}>
        <img src={emailIcon} alt="" /> <span  className={'contact-text'} >{'omasan.esimaje@gmail.com'}</span>
      </div>
      <div className={'social-icons'} >
        <img src={phoneIcon} alt="" /><span className={'contact-text'} >{'+234 70 622 57273'}</span>
      </div>
      <div className={'social-icons'}>
        <a href="https://www.linkedin.com/in/benedict-esimaje-851093a0/" className={'icon-url'}>
          <img src={linkedinIcon} alt="" /> 
          <span className={'contact-text'}>{'LinkedIn'}</span>
        </a> 
        <a href="https://github.com/Proception" className={'icon-url'}>
          <img src={githubIcon} alt="" /> 
          <span className={'contact-text'}>{'Github'}</span>
        </a> 
        <a href="https://twitter.com/BenedictEsimaje" className={'icon-url'}>
          <img src={twitterIcon} alt="" /> 
          <span className={'contact-text'}>{'Twitter'}</span>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
