import React from 'react';
import './BotonOk.css';

const BotonOk = ({ onButtonClick }) => {
  return (
    <div>
      <button className='BotonOk'  onClick={onButtonClick}>
        OK
      </button>
    </div>
  );
};

export default BotonOk;
