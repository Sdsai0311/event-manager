// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCmzviwm8MtRdg0z7L30G4K90DIbHvnsk",
  authDomain: "college-event-portal.firebaseapp.com",
  projectId: "college-event-portal",
  storageBucket: "college-event-portal.appspot.com",
  messagingSenderId: "1024567890123",
  appId: "1:1024567890123:web:a1b2c3d4e5f67890abcdef"
};

// Global Firebase instances
let auth;
let db;

// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
  auth = firebase.auth();
  db = firebase.firestore();
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Firebase initialization error:', error);
  if (error.code !== 'app/duplicate-app') {
    alert('Firebase initialization failed. Please check your configuration.');
  }
}
