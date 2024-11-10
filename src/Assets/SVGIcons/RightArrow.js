import React from 'react';
import Svg, {Path, SvgXml} from 'react-native-svg';

const LeftArrow = ({width, height, color}) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" 
xmlns:xlink="http://www.w3.org/1999/xlink" 
height="512px" 
id="Layer_1" 
style="enable-background:new 0 0 512 512;" 
version="1.1" viewBox="0 0 512 512" 
width="512px" xml:space="preserve">
<polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 "
stroke="${color}" fill="${color}" stroke-width="16"/>
</svg>`;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 15 15">
      <Path
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="square"
        d="m5 14 7-6.5L5 1"
      />
    </Svg>
  );
  // return <SvgXml xml={xml} width={width} height={height} />;
};

export default LeftArrow;
