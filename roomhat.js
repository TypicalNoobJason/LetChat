
const firebaseConfig = {
      apiKey: "AIzaSyAYRFqvglcCUJ6Qji1lgFDBgRQWqsLEdWc",
      authDomain: "kwitter-176fc.firebaseapp.com",
      databaseURL: "https://kwitter-176fc-default-rtdb.firebaseio.com",
      projectId: "kwitter-176fc",
      storageBucket: "kwitter-176fc.appspot.com",
      messagingSenderId: "254711952163",
      appId: "1:254711952163:web:91ee4b0570b51d833dd296"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
