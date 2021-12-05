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
firebase.initializeApp(firebaseConfig);
    
var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location ="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - "+ Room_names);
       row = "<div class='room_name' id="+Room_names+"onclick ='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
       document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
} 
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location ="index.html";
}
