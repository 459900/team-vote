import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
      apiKey: "AIzaSyCPGq-bcTU5EeXIIwe5b5_FElws7hB7aBM",
      authDomain: "vote-2e69c.firebaseapp.com",
      projectId: "vote-2e69c",
      storageBucket: "vote-2e69c.appspot.com",
      messagingSenderId: "737991868518",
      appId: "1:737991868518:web:48ff2b4e990ce0c7deada7"
    
    

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();