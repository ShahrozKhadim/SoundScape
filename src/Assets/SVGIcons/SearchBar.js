import React from 'react';
import Svg, {Path, SvgXml} from 'react-native-svg';

const SearchBar = ({height, width, color}) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="21" 
        viewBox="0 0 20 21" 
        fill="none">
        <path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48478 3 2.50001 5.98477 2.50001 9.66667C2.50001 13.3486 5.48478 16.3333 9.16667 16.3333Z" 
        stroke=${color} 
        stroke-width="1.5" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
        <path d="M17.5 18L13.875 14.375" 
        stroke=${color} 
        stroke-width="1.5" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
</svg>`;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 512 512">
      <Path
        d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
        fill={color}
      />
    </Svg>
  );
  // return <SvgXml xml={xml} width={width} height={height} />;
};
export default SearchBar;
