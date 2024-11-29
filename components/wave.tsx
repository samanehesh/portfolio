import React from 'react';
import Wavify from 'react-wavify';

interface WaveBackgroundProps {
  fill: string;
  height: number;
  amplitude: number;
  speed: number;
  points: number;
  style?: React.CSSProperties; // Add style prop
}

const WaveBackground: React.FC<WaveBackgroundProps> = ({
  fill,
  height,
  amplitude,
  speed,
  points,
  style
}) => (
  <div style={{ width: '100%', position: 'absolute', ...style }}>
    <Wavify
      fill={fill}
      paused={false}
      options={{
        height,
        amplitude,
        speed,
        points,
      }}
    />
  </div>
);

export default WaveBackground;
