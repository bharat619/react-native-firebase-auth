import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
  const { headerStyle, textStyle } = styles;
  return (
    <View style={headerStyle}>
      <Text style={textStyle}>Auth</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  headerStyle: {
    justfiContent: 'center',
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    height: 60,
    paddingTop: 35,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  }
};

export { Header };
