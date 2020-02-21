import React from 'react';
import styled, { css } from 'styled-components';
import { View, Text, Image } from 'react-native';
import { Field } from 'redux-form';
import DatePicker from './DatePicker';
import GenderPicker from './GenderPicker';
import CustomTextInput from '../../components/SharedComponents/CustomTextInput';
import editButtonImage from '../../assets/icons/edit-pencil.png';
import { isPresent } from '../../utils/helper';
import { required, email } from '../../utils/validations';

const UserInfoView = styled(View)`
  padding: 30px;
  align-items: flex-start;
`;

const wrapperCustomStyles = css`
  border-bottom-width: 1;
  border-bottom-color: #bfbfbf;
  padding: 0 0 5px 0;
  margin: 0;
`;

const textInputWrapperCustomStyles = css`
  font-size: 14px;
  color: white;
  font-weight: bold;
  height: 18;
  padding: 0;
`;

const errosCustomStyles = css`
  color: red;
  font-size: 12;
  position: absolute;
`;

const UserInfoBlockContainer = styled(View)`
  ${props => props.withBottomBorder && wrapperCustomStyles};
  display: flex;
  width: 100%;
  margin: 10px 0;
`;

const LabelText = styled(Text)`
  font-size: 12px;
  color: #bfbfbf;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

const ValueText = styled(Text)`
  font-size: 14px;
  color: white;
  font-weight: bold;
`;

const ErrorText = styled(Text)`
  font-size: 14px;
  color: #fe2851;
  font-weight: bold;
`;

const LableEditView = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const EditImage = styled(Image)`
  height: 10px;
  width: 10px;
  margin-left: 10px;
  margin-bottom: 3px;
`;

const UserInfoBlock = ({ label, value }) => {
  return (
    <UserInfoBlockContainer>
      <LabelText>{label}</LabelText>
      {value && <ValueText>{value}</ValueText>}
      {!value && <ErrorText>Not Provided</ErrorText>}
    </UserInfoBlockContainer>
  );
};

const UserInfoEditBlock = props => {
  return (
    <UserInfoBlockContainer withBottomBorder={props.withBottomBorder}>
      <LableEditView>
        <LabelText>{props.label}</LabelText>
        {props.editable !== false && <EditImage source={editButtonImage} />}
      </LableEditView>
      <View>
        {isPresent(props.component) ? (
          props.component
        ) : (
          <Field
            name={props.name}
            component={CustomTextInput}
            value={props.value}
            placeholder={props.placeholder}
            noWrapper
            autoCapitalize={props.autoCapitalize}
            keyboardType={props.keyboardType}
            maxLength={props.maxLength}
            returnKeyType={props.returnKeyType}
            validate={props.validate}
            editable={props.editable}
            customStyles={textInputWrapperCustomStyles}
            wrapperCustomStyles={wrapperCustomStyles}
            errosCustomStyles={errosCustomStyles}
          />
        )}
      </View>
    </UserInfoBlockContainer>
  );
};

const UserInfo = props => {
  if (props.isEditingModeEnable) {
    return (
      <UserInfoView>
        <UserInfoEditBlock
          label="Name"
          name="displayName"
          value={props.displayName}
          placeholder="Enter Name"
          autoCapitalize="words"
          keyboardType="default"
          validate={[required]}
        />
        <UserInfoEditBlock
          label="Email"
          name="email"
          value={props.email}
          placeholder="Enter Email"
          autoCapitalize="none"
          keyboardType="email-address"
          validate={[required, email]}
          editable={false}
        />
        <UserInfoEditBlock
          label="Phone Number"
          name="phoneNumber"
          value={props.phoneNumber}
          placeholder="Enter Phone Number"
          autoCapitalize="none"
          keyboardType="number-pad"
          maxLength={10}
          returnKeyType="done"
        />
        <UserInfoEditBlock
          label="Birthday"
          component={
            <DatePicker
              date={props.birthday}
              setDate={date => props.updateFormField('birthday', date)}
            />
          }
          withBottomBorder
        />
        <UserInfoEditBlock
          label="Gender"
          component={
            <GenderPicker
              gender={props.gender}
              setGender={gender => props.updateFormField('gender', gender)}
            />
          }
          withBottomBorder
        />
      </UserInfoView>
    );
  }

  return (
    <UserInfoView>
      <UserInfoBlock label="Email" value={props.email} />
      <UserInfoBlock label="Phone Number" value={props.phoneNumber} />
      <UserInfoBlock label="Birthday" value={props.birthday} />
      <UserInfoBlock label="Gender" value={props.gender} />
    </UserInfoView>
  );
};

export default UserInfo;
