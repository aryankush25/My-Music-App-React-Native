const CURRENT_BACKEND_SERVICE = 'firebase'; // This service can be Firebase or NodeJs with MongoDB

import firebaseServices from './firebaseServices';
import nodeJsServices from './nodeJsServices';

const services =
  CURRENT_BACKEND_SERVICE === 'firebase' ? firebaseServices : nodeJsServices;

export default services;
