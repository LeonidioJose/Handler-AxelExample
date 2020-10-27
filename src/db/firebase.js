const fire = () => {
    const firebase = require('firebase')
  
    var firebaseConfig = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: ""
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  
  module.exports = fire
