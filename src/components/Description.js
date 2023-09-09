import React from 'react';
import './description.css';

const Description = ({ views }) => {
  return (
    <div className="vid-des">
      <p>{views}</p>
      <p>Channel that makes learning easy</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore
        provident earum! Ut quo repudiandae dicta sit officiis! Veniam, soluta.
      </p>
      <hr />
    </div>
  );
};

export default Description;
