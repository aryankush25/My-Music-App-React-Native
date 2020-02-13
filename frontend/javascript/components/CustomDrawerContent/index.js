import React from 'react';
import styled from 'styled-components';
import { View, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSwitchNavigation } from '../../hooks/navigationHooks';
import UserProfile from './UserProfile';
import NavigationButton from './NavigationButton';
import { drawerNavigationObject } from '../../utils/helper';

const CustomDrawerContentContainer = styled(View)`
  padding: 20px 0;
  margin-bottom: 20px;
  flex: 1;
`;

const NavigationButtonWrapper = styled(View)`
  flex: 1;
`;

const CustomDrawerContent = props => {
  const dispatch = useDispatch();

  useSwitchNavigation();

  const signOutAsync = async () => {
    dispatch({ type: 'SIGN_OUT_REQUEST' });
  };

  const navigators = Object.keys(drawerNavigationObject);

  return (
    <CustomDrawerContentContainer>
      <SafeAreaView />

      <UserProfile />

      <NavigationButtonWrapper>
        {navigators.map((navigator, index) => {
          const { label, name, iconName } = drawerNavigationObject[navigator];
          return (
            <NavigationButton
              key={index}
              label={label}
              name={name}
              iconName={iconName}
              onPressAction={() => props.navigation.navigate(name)}
            />
          );
        })}
      </NavigationButtonWrapper>

      <NavigationButton
        label="Sign Out"
        iconName="power-settings-new"
        highlightedPink
        onPressAction={signOutAsync}
      />

      <SafeAreaView />
    </CustomDrawerContentContainer>
  );
};

export default CustomDrawerContent;
