import firebase from 'firebase';
import { isPresent, isNilOrEmpty } from '../../utils/helper';

export const fetchCurrentUser = async () => {
  const currentUser = await firebase.auth().currentUser;
  return currentUser;
};

export const signInUser = async (email, password) => {
  await firebase.auth().signInWithEmailAndPassword(email, password);
  const currentUser = await fetchCurrentUser();
  return currentUser;
};

export const signUpUser = async (name, email, password) => {
  await firebase.auth().createUserWithEmailAndPassword(email, password);
  let currentUser = await fetchCurrentUser();
  if (currentUser) {
    currentUser = await updateUser({
      displayName: name
    });
  }

  return currentUser;
};

export const signOutUser = async () => {
  await firebase.auth().signOut();
  let currentUser = await fetchCurrentUser();
  return currentUser;
};

export const updateUser = async updatedData => {
  const { displayName, photoURL, email } = updatedData;

  const currentUser = await fetchCurrentUser();
  if (isPresent(displayName) || isPresent(photoURL)) {
    await currentUser.updateProfile({
      displayName: displayName,
      photoURL: photoURL || currentUser.photoURL
    });
  }

  if (isPresent(email)) {
    await currentUser.updateEmail(email);
  }

  const newCurrentUser = await fetchCurrentUser();
  return newCurrentUser;
};

export default {
  fetchCurrentUser,
  signInUser,
  signUpUser,
  signOutUser,
  updateUser
};
