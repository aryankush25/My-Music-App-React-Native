import React from 'react';
import styled from 'styled-components';
import { View, Text } from 'react-native';

const UserInfoView = styled(View)`
  padding: 30px 30px;
  align-items: flex-start;
`;

const UserInfoBlockContainer = styled(View)`
  display: flex;
  margin: 10px 0;
  width: 100%;
`;

const LabelText = styled(Text)`
  font-size: 14px;
  color: #bfbfbf;
  margin-bottom: 5px;
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

const UserInfoBlock = ({ label, value }) => {
  return (
    <UserInfoBlockContainer>
      <LabelText>{label}</LabelText>
      {value && <ValueText>{value}</ValueText>}
      {!value && <ErrorText>Not Provided</ErrorText>}
    </UserInfoBlockContainer>
  );
};

const UserInfo = props => {
  return (
    <UserInfoView>
      <UserInfoBlock label="Email" value={props.email} />
      <UserInfoBlock label="Phone Number" value={props.phoneNumber} />
      <UserInfoBlock label="Birthday" value={props.phoneNumber} />
      <UserInfoBlock label="Gender" value={props.phoneNumber} />
    </UserInfoView>
  );
};

export default UserInfo;
