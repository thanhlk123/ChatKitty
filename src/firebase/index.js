import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBCQ-3w7ixuKy3FNPmH_LnzPRvEaDpJpJw',
  authDomain: 'chatkitty-dc75f.firebaseapp.com',
  projectId: 'chatkitty-dc75f',
  storageBucket: 'chatkitty-dc75f.appspot.com',
  messagingSenderId: '359374129808',
  appId: '1:359374129808:web:9647bcd1294a9ec1326615',
  measurementId: 'G-QKKFDS2R2X',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
