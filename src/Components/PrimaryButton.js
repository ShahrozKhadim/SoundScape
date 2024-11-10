/*
import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {buttonStyle, colors, smallTextStyle} from '../Assets/Styles';

const {white, green} = colors;

const PrimaryButton = ({
  text,
  handleSubmit,
  isLoading,
  buttonRef,
  textStyle,
  buttonStyles,
}) => (
  <TouchableOpacity
    ref={buttonRef}
    style={[buttonStyle, styles.container, buttonStyles]}
    disabled={isLoading}
    onPress={handleSubmit}>
    {isLoading ? (
      <ActivityIndicator color={white} size={'small'} />
    ) : (
      <Text style={[smallTextStyle, styles.text, textStyle]}>{text}</Text>
    )}
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: green,
  },
  text: {
    color: white,
  },
});
export default PrimaryButton;
*/

import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {buttonStyle, colors, smallTextStyle} from '../Assets/Styles';

const {white, green} = colors;
function LoaderComponent() {
  return <ActivityIndicator color={white} size={'small'} />;
}
function TextComponent(styles, text, textStyle) {
  return (
    <Text style={{...smallTextStyle, ...styles.text, ...textStyle}}>
      {text}
    </Text>
  );
}

const PrimaryButton = ({
  text = '',
  handleSubmit,
  isLoading = false,
  buttonRef,
  textStyle,
  buttonStyles,
}) => {
  const switchText = {
    true: LoaderComponent,
    false: () => TextComponent(styles, text, textStyle),
  };
  const ActiveText = switchText[isLoading];

  return (
    <TouchableOpacity
      ref={buttonRef}
      style={{...buttonStyle, ...styles.container, ...buttonStyles}}
      disabled={isLoading}
      onPress={handleSubmit}>
      <ActiveText />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: green,
  },
  text: {
    color: white,
  },
});
export default PrimaryButton;
