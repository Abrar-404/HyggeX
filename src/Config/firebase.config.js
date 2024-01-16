// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD0JOEDJmbiV0RAruLgL9Ev2iszf5DIWPQ',
  authDomain: 'hyggex-b6690.firebaseapp.com',
  projectId: 'hyggex-b6690',
  storageBucket: 'hyggex-b6690.appspot.com',
  messagingSenderId: '1063415713112',
  appId: '1:1063415713112:web:ea672b2c8c84d6a065292d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
