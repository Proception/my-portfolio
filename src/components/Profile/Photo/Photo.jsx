import React, { Component } from 'react';

const Photo = ({ imgUrl }) => {
  return (
    <div class={'profile-image'}>
      <img src={imgUrl ? imgUrl : 'https://picsum.photos/250'} alt="" />
    </div>
  );
};

export default Photo;
