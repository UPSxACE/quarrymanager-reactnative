# quarrymanager-reactnative
Back-end rep: https://github.com/UPSxACE/quarrymanager-reactfrontend
Web version rep: https://github.com/UPSxACE/quarrymanager-reactfrontend

# Prerequisites:
- A firebase account (this app uses the real-time database module for the chat)
- Expo CLI
- Expo APP

# How to setup the project and initialize it:
- Create a **firebase-config.js** file in root folder (see example below)
- Create a **api-config.js** file in root folder (see example below)
- Run ```npm install``` in the root folder
- Initialize the server with ```npx expo start```
- Copy the URL and paste it in the Expo APP (QR Code not working)

# Example of firebase-config.js
```
export default config = {
  apiKey: 'AIzaSyCjUyy2Qjh7REfDxASDHASASG3zs',
  authDomain: 'ds3-gestorapedreira.firebaseapp.com',
  databaseURL:
    'https://ds3-gestorapedreira-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'ds3-gestorapedreira',
  storageBucket: 'ds3-gestorapedreira.appspot.com',
  messagingSenderId: '1130039940',
  appId: '1:1236336:web:e949209429kre90329',
};
```

# Example of api-config.js
```
import { Buffer } from 'buffer';

export const encodeCredentials = (username, password) => {
  const credentials = password ? username + ':' + password : username + ':';
  return 'Basic ' + Buffer.from(credentials).toString('base64');
};

const apiconfig = {
  serverIP: '<IP_WHERE_THE_BACKEND_APP_IS_RUNNING>',
  adminToken: encodeCredentials('dC9VOjlGLSmsg6ZGkh7E0DJKz8G1K59O'),
};

export default apiconfig;
```
