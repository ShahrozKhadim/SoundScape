import React from 'react';
import {SvgXml} from 'react-native-svg';

const Menu = ({width, height, color}) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path d="M2.50001 10.5H17.5" 
        stroke="black" 
        stroke-width="1.4375" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
        <path d="M2.50001 5.5H13.3333" 
        stroke="black" 
        stroke-width="1.4375" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
        <path d="M2.50001 15.5H10" 
        stroke="black" 
        stroke-width="1.4375" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
      </svg>`;
  return <SvgXml xml={xml} width={width} height={height} />;
};

export default Menu;
