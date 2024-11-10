import React from 'react';
import {SvgXml} from 'react-native-svg';

const Filter = ({height, width, color}) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
   <path d="M3.33331 18V12.1667" stroke='${color}' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.33331 8.83333V3" stroke='${color}' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 18V10.5" stroke='${color}' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 7.16667V3" stroke='${color}' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.6667 18V13.8333" stroke='${color}' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.6667 10.5V3" stroke='${color}' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0.833313 12.1667H5.83331" stroke='${color}' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 7.16667H12.5" stroke='${color}' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.1667 13.8333H19.1667" stroke='${color}' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>`;
  return <SvgXml xml={xml} width={width} height={height} />;
};
export default Filter;
