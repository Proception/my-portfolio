import React, { Component } from 'react';

const DisplayCard = (props) => {
  return (
    <div class= {props.className}>
      {props.children}
    </div>
  );
};

export default DisplayCard;
