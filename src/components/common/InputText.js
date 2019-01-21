import React from 'react';
import { View, Text, TextInput } from 'react-native';

const InputText = ({ label, onChangeText, value, placeholder, type }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        secureTextEntry={type && type.toLowerCase() === 'password'}
        onChangeText={text => onChangeText(text)}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    padding: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { InputText };
