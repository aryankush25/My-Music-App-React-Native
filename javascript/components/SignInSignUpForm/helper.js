import MyTextInput from '../InputComponents/CustomTextInput';
import signInImage from '../../assets/images/signin-image.png';
import signUpImage from '../../assets/images/signup-image.png';
import musicAppLogo from '../../assets/images/music-app-icon.png';

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

export const signInObject = {
  bgImage: signInImage,
  header: {
    title: 'Sign In',
    label: 'LOVEMUSIC',
    labelImage: musicAppLogo,
  },
  form: {
    fields: signInFields,
    buttonLabel: 'Sign In',
    buttonColor: '#0076FF',
    buttonWidth: 250,
    forgotPassword: true,
  },
};

export const signUpObject = {
  bgImage: signUpImage,
  header: {
    title: 'Sign Up',
    label: 'Account Registration',
  },
  form: {
    fields: signUpFields,
    buttonLabel: 'Sign Up',
  },
};
