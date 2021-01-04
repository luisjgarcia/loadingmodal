import React from 'react';
import './loading.css';
import { Label } from 'semantic-ui-react';

const Loading = () => {
  return (
    <div>
      <div className='background' />
      <lottie-player
        src='https://assets2.lottiefiles.com/packages/lf20_xRdmq3.json'
        background='transparent'
        speed='1'
        style={{
          width: '50vh',
          height: '50vh',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        loop
        autoplay
      ></lottie-player>
      <Label
        as='a'
        basic
        pointing
        style={{
          position: 'fixed',
          width: '25vh',
          'text-align': 'center',
          top: '60%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        color='teal'
      >
        saving changes
      </Label>
    </div>
  );
};

export default Loading;
