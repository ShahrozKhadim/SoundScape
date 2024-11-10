import React from 'react';
import {colors} from '../Styles';
import Svg, {Path} from 'react-native-svg';

const {black} = colors;

function PayPal({height = '24', width = '24', color = black}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 24 24">
      <Path
        fill="#003087"
        d="M19.148 1.81C18.037.543 16.028 0 13.458 0H5.999c-.525 0-.973.382-1.055.901L1.84 20.598a.64.64 0 00.633.74h4.605l1.156-7.335-.036.23c.081-.518.527-.9 1.051-.901h2.188c4.299 0 7.664-1.746 8.647-6.797.029-.149.054-.295.076-.437.292-1.867-.002-3.137-1.012-4.288z"
      />
      <Path
        fill="#003087"
        d="M19.148 1.81C18.037.543 16.028 0 13.458 0H5.999c-.525 0-.973.382-1.055.901L1.84 20.598a.64.64 0 00.633.74h4.605l1.156-7.335-.036.23c.081-.518.527-.9 1.051-.901h2.188c4.299 0 7.664-1.746 8.647-6.797.029-.149.054-.295.076-.437.292-1.867-.002-3.137-1.012-4.288z"
      />
      <Path
        fill="#003087"
        d="M9.475 6.123a.934.934 0 01.922-.788h5.847c.692 0 1.338.045 1.929.139a8 8 0 01.956.214c.357.1.702.238 1.03.41.293-1.867-.001-3.137-1.011-4.289C18.036.543 16.028 0 13.458 0H5.999c-.525 0-.972.382-1.054.901L1.839 20.597a.64.64 0 00.632.74h4.605l1.156-7.336 1.243-7.878z"
      />
      <Path
        fill="#009CDE"
        d="M20.16 6.098c-.023.146-.048.292-.076.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.97.383-1.05.901l-1.121 7.105-.319 2.015a.56.56 0 00.554.647h3.882c.459 0 .85-.335.922-.788l.038-.198.732-4.636.046-.256a.934.934 0 01.923-.788h.581c3.76 0 6.704-1.527 7.565-5.946.358-1.846.173-3.388-.777-4.47a3.707 3.707 0 00-1.063-.82z"
      />
      <Path
        fill="#012169"
        d="M19.13 5.688a6.984 6.984 0 00-.464-.119 8.636 8.636 0 00-.493-.093 12.088 12.088 0 00-1.929-.141h-5.847a.931.931 0 00-.922.789l-1.243 7.88-.036.229c.08-.518.526-.9 1.05-.901h2.189c4.299 0 7.664-1.746 8.647-6.797.029-.149.054-.294.076-.437-.26-.136-.53-.25-.809-.341a4.027 4.027 0 00-.219-.069z"
      />
    </Svg>
  );
}

export default PayPal;
