import React from 'react';
import {SvgXml} from 'react-native-svg';

const Password = ({height, width, color}) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none">
      <path
      d="M15.8333 9.16666H4.16667C3.24619 9.16666 2.5 9.91286 2.5 10.8333V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V10.8333C17.5 9.91286 16.7538 9.16666 15.8333 9.16666Z" 
      stroke=${color} stroke-width="1.56522" stroke-linecap="round" stroke-linejoin="round"/>
      <path 

      d="M5.83331 9.16666V5.83333C5.83331 4.72826 6.2723 3.66845 7.0537 2.88705C7.8351 2.10565 8.89491 1.66666 9.99998 1.66666C11.105 1.66666 12.1649 2.10565 12.9463 2.88705C13.7277 3.66845 14.1666 4.72826 14.1666 5.83333V9.16666" 
      stroke=${color} stroke-width="1.56522" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
  return <SvgXml xml={xml} width={width} height={height} />;
};
export default Password;
