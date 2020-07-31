import React from 'react';

const WaveFormStick = ({ height }) => {
  return (
    <div
      className="waveform__stick"
      style={{ height: `${height / 3}px` }}
    ></div>
  );
};

export default WaveFormStick;
