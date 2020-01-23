import MyTextInput from '../InputComponents/CustomTextInput';

export const inputTypes = {
  name: {
    name: 'name',
    component: MyTextInput,
    placeholder: 'Full Name',
    secureTextEntry: false,
  },
  email: {
    name: 'email',
    component: MyTextInput,
    placeholder: 'Email Address',
    secureTextEntry: false,
  },
  password: {
    name: 'password',
    component: MyTextInput,
    placeholder: 'Password',
    secureTextEntry: true,
  },
};

export const signInFields = [inputTypes.email, inputTypes.password];

export const signUpFields = [
  inputTypes.name,
  inputTypes.email,
  inputTypes.password,
];
