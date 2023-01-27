import { initializeApp } from 'firebase/app';
// Arquivo local de configuração (é ignorado via gitignore)
import firebaseConfig from './firebase-config';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from 'firebase/database';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const firebase_db = getDatabase(app);
