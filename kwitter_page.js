var firebaseConfig = {
      apiKey: "AIzaSyA17WZrg4wVZrYJECIcNA1L7XyY62OUDm0",
      authDomain: "kwitter-65523.firebaseapp.com",
      databaseURL: "https://kwitter-65523-default-rtdb.firebaseio.com",
      projectId: "kwitter-65523",
      storageBucket: "kwitter-65523.appspot.com",
      messagingSenderId: "435890733542",
      appId: "1:435890733542:web:e31f04c385a0517dd0d627",
      measurementId: "G-DCCRDK3TX4"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });

      document.getElementById("msg").value="";
}
function getData(){ firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
