import React, { Component } from 'react';

const DisplayCard = (props) => {
  return (
    <div class= {props.class}>
      {props.children}
    </div>
  );
};

export default DisplayCard;
