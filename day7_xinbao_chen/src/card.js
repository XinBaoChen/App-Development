import React from 'react';

const Card = function(props) {
  return (
    <div className="card">
      <img src={props.picture} alt="Image 1" />
      <p className="title">{props.title}</p>
      <p className="description">
        {props.info} <span className="highlight">{props.msg}</span>
      </p>
    </div>
  );
};

export default Card;