const firebaseConfig = {
    apiKey: "AIzaSyCbF9ysG1fXlI1pNewqp3nBIgOTH7QvAq4",
    authDomain: "maternity-management.firebaseapp.com",
    projectId: "maternity-management",
    storageBucket: "maternity-management.appspot.com",
    messagingSenderId: "286642929806",
    appId: "1:286642929806:web:4ca4c70eb51b07a6c809df",
    measurementId: "G-L3YVVG25BG",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
