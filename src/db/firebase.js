const fire = () => {
    const firebase = require('firebase')
  
    var firebaseConfig = {
      apiKey: "AIzaSyDqiF-WiBlVsflFygjxdyeqqCABkhBtQnU",
      authDomain: "axel-bdf8f.firebaseapp.com",
      databaseURL: "https://axel-bdf8f.firebaseio.com",
      projectId: "axel-bdf8f",
      storageBucket: "axel-bdf8f.appspot.com",
      messagingSenderId: "394839515183",
      appId: "1:394839515183:web:1a78342dd665696609a6da"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  
  module.exports = fire