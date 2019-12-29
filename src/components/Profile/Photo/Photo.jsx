import React, { Component } from 'react';

import profilePhoto from '../../../assets/profile-photo-min.png';

const Photo = () => {
  return (
    <div class={'profile-image'}>
      <img src={profilePhoto ? profilePhoto : 'https://picsum.photos/250'} alt="" />
    </div>
  );
};

export default Photo;
