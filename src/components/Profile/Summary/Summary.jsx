import React, { Component } from 'react';

const Summary = ({ summary }) => {
  return (
    <div class={'summary'}>
      {
        summary ? summary : 'No Summary available'
      }
    </div>
  );
};

export default Summary;
