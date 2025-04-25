import React from 'react';
import Webcam from 'react-webcam';

const WebCamMonitor = () => {
  return (
    <div>
      <h3>Webcam Monitoring Active</h3>
      <Webcam audio={false} />
    </div>
  );
};

export default WebCamMonitor;
