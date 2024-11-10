import React from 'react';
import Svg, {Path} from 'react-native-svg';

const PrivacyPolicy = ({height, width, color}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    viewBox="0 0 640 512">
    <Path
      d="M224 256a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c1.8 0 3.5-.2 5.3-.5-76.3-55.1-99.8-141-103.1-200.2-16.1-4.8-33.1-7.3-50.7-7.3h-91.5zm308.8-78.3-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2 5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.8l95.4 38.2z"
      fill={color}
    />
  </Svg>
);
export default PrivacyPolicy;
