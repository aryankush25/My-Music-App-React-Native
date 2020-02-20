import React from 'react';
import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const GenderPicker = props => {
  return (
    <RNPickerSelect
      onValueChange={value => props.setGender(value)}
      items={[
        { label: 'Male', value: 'M' },
        { label: 'Female', value: 'F' },
        { label: 'Others', value: 'O' }
      ]}
      placeholder={{
        label: 'Select Gender'
      }}
      style={{
        ...pickerSelectStyles
      }}
      useNativeAndroidPickerStyle={false}
      value={props.gender}
    />
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderWidth: 0
  },
  inputAndroid: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderWidth: 0
  },
  placeholder: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  }
});

export default GenderPicker;
