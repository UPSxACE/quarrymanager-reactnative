// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import 'firebase/database';
// Arquivo local de configuração (é ignorado via gitignore)
import config from './firebase-config';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
firebase.initializeApp(config);
export const firebase_db = firebase;
