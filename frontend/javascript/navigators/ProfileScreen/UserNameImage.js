import React, { useCallback } from 'react';
import styled from 'styled-components';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { isPresent } from '../../utils/helper';
import userDefaultImage from '../../assets/icons/user-male.png';
import trashImage from '../../assets/icons/trash-white.png';
import uploadImage from '../../assets/icons/upload-white.png';

const ImageNameView = styled(View)`
  align-items: center;
  padding-top: 40px;
  padding-bottom: 10px;
`;

const UserImageView = styled(View)`
  margin: 10px;
  position: relative;
`;

const UserDefaultImage = styled(Image)`
  height: 200px;
  width: 200px;
  background-color: white;
  border-radius: 10;
`;

const ImageActionsButtonWrapper = styled(View)`
  height: 30px;
  width: 30px;
  position: absolute;
  top: -8;
  right: -8;
  background-color: #fe2851;
  border-radius: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageActionsButton = styled(Image)`
  height: 18px;
  width: 18px;
`;

const NameText = styled(Text)`
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
  font-style: italic;
  font-family: Georgia-Italic;
`;

const ImageActionButton = props => {
  const { photoURL } = props;

  const imageButtonAction = useCallback(
    () =>
      props.imageButtonAction(
        isPresent(photoURL) ? 'deleteMode' : 'uploadMode'
      ),
    [photoURL]
  );

  return (
    <ImageActionsButtonWrapper>
      <TouchableOpacity onPress={imageButtonAction}>
        <ImageActionsButton
          source={isPresent(photoURL) ? trashImage : uploadImage}
        />
      </TouchableOpacity>
    </ImageActionsButtonWrapper>
  );
};

const UserNameImage = props => {
  return (
    <ImageNameView>
      <UserImageView>
        <UserDefaultImage
          source={isPresent(props.photoURL) ? props.photoURL : userDefaultImage}
        />

        {props.isEditingModeEnable && (
          <ImageActionButton
            photoURL={props.photoURL}
            imageButtonAction={props.imageButtonAction}
          />
        )}
      </UserImageView>

      {!props.isEditingModeEnable && <NameText>{props.displayName}</NameText>}
    </ImageNameView>
  );
};

export default UserNameImage;
