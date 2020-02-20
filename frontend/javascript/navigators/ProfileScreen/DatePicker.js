import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { View, Text, Platform, TouchableOpacity, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { isPresent } from '../../utils/helper';

const ValueText = styled(Text)`
  font-size: 14px;
  color: white;
  font-weight: bold;
`;

const Container = styled.TouchableOpacity`
  background-color: ${Platform.OS === 'ios' ? '#00000066' : 'transparent'};
  position: absolute;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

const HeaderFooter = styled.View`
  min-height: 50px;
  max-height: 70px;
  width: 100%;
  background-color: white;
  border-color: #bfbfbf;
  justify-content: center;
  align-items: center;
  border-top-width: 1;
  border-bottom-width: 0;
  ${props =>
    props.borderBottom &&
    css`
      border-top-width: 0;
      border-bottom-width: 1;
    `}
`;

const DateDoneButton = styled(TouchableOpacity)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const DateDoneButtonText = styled(Text)`
  font-size: 18px;
  color: black;
  font-weight: bold;
`;

const DatePickerContainer = ({ isIos, date, onChange, setShow }) => {
  return (
    <Container>
      {isIos && (
        <HeaderFooter borderBottom>
          <DateDoneButtonText>Select Date</DateDoneButtonText>
        </HeaderFooter>
      )}

      <DateTimePicker
        testID="dateTimePicker"
        timeZoneOffsetInMinutes={0}
        value={date}
        mode={'date'}
        display="default"
        onChange={onChange}
        maximumDate={new Date()}
        style={{ backgroundColor: 'white' }}
      />

      {isIos && (
        <HeaderFooter>
          <DateDoneButton onPress={() => setShow(false)}>
            <DateDoneButtonText>Done</DateDoneButtonText>
          </DateDoneButton>
        </HeaderFooter>
      )}
    </Container>
  );
};

const DatePicker = props => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const isIos = Platform.OS === 'ios';

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setDate(currentDate);

    if (!isIos) {
      setShow(false);
    }
  };

  const value = isPresent(date) ? `${date}` : 'Select Date';

  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => setShow(true)}>
          <ValueText>{value}</ValueText>
        </TouchableOpacity>
      </View>

      {isIos && show && (
        <Modal animationType="fade" transparent={true} visible={true}>
          <DatePickerContainer
            isIos={isIos}
            date={date}
            onChange={onChange}
            setShow={setShow}
          />
        </Modal>
      )}

      {!isIos && show && (
        <DatePickerContainer
          isIos={isIos}
          date={date}
          onChange={onChange}
          setShow={setShow}
        />
      )}
    </View>
  );
};

export default DatePicker;
