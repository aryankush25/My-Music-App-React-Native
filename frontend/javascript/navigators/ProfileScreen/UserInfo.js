import React from 'react';
import styled, { css } from 'styled-components';
import { View, Text, Image, TextInput } from 'react-native';
import { Field } from 'redux-form';
import editButtonImage from '../../assets/icons/edit-pencil.png';

const UserInfoView = styled(View)`
  padding: 30px 30px;
  align-items: flex-start;
`;

const UserInfoBlockContainer = styled(View)`
  display: flex;
  margin: 10px 0;
  width: 100%;
  ${props =>
    props.withBottomBorder &&
    css`
      border-bottom-width: 1;
      border-bottom-color: #bfbfbf;
      padding-bottom: 5px;
    `}
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

const UserInfoEditBlock = ({ label, component }) => {
  return (
    <UserInfoBlockContainer withBottomBorder>
      <LableEditView>
        <LabelText>{label}</LabelText>
        <EditImage source={editButtonImage} />
      </LableEditView>
      <View>{component}</View>
    </UserInfoBlockContainer>
  );
};

const UserInfo = props => {
  if (props.isEditingModeEnable) {
    return (
      <UserInfoView>
        <UserInfoEditBlock
          label="Name"
          component={<ValueText>{props.displayName}</ValueText>}
        />
        <UserInfoEditBlock
          label="Email"
          component={<ValueText>{props.email}</ValueText>}
        />
        <UserInfoEditBlock
          label="Phone Number"
          component={<ValueText>{props.phoneNumber}</ValueText>}
        />
        <UserInfoEditBlock
          label="Birthday"
          component={<ValueText>{props.birthday}</ValueText>}
        />
        <UserInfoEditBlock
          label="Gender"
          component={<ValueText>{props.gender}</ValueText>}
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
