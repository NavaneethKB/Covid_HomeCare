 
 //console.log(firebase);
//  firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//   } else {
//     location.replace("index.html");
//     break;
//   }
// });

function signin(){
    var email=document.getElementById("signin_email").value;
    var password=document.getElementById("signin_password").value;
    var button=document.getElementById("alert").classList;
    var close_button=document.getElementById("close_btn");

    function hide(){
      button.remove("show")
      button.add("hide")
    }
     close_button.onclick=hide
  
   

  
   if(!email || !password){
    document.getElementById("alert_message").innerHTML = "No credentials can be Left Empty";
     button.remove("hide")
     button.add("show")
     setTimeout(hide,200);
     
   }else{

    
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then( ()=> {
        document.getElementById("alert_message").innerHTML = "Sign-In Sucessful";
        button.remove("hide")
        button.add("show")
        setTimeout(hide,200);
        location.replace("index.html");
      
     
      })
      .catch((error) => {
        document.getElementById("alert_message").innerHTML = "Check Your Email And password";
        button.remove("hide")
        button.add("show")
        setTimeout(hide,200);
      });
    
    }


}
function signup(){
  var email=document.getElementById("signup_email").value;
  var password=document.getElementById("signup_password").value;
  var name=document.getElementById("signup_name").value;
  var button=document.getElementById("alert").classList;
  var close_button=document.getElementById("close_btn");
  function hide(){
    button.remove("show")
    button.add("hide")
  }
   close_button.onclick=hide

  if(!email || !password){
    document.getElementById("alert_message").innerHTML = "No credentials can be Left Empty";
    button.remove("hide")
    button.add("show")
    setTimeout(hide,200);
  }else if(password.length<6){
    document.getElementById("alert_message").innerHTML = "Password must minimum have 6 characters";
    button.remove("hide")
    button.add("show")
    setTimeout(hide,200);
  }
  else{

 
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(() => {
   
   
    document.getElementById("alert_message").innerHTML = "Sign-UP Sucessful";
    button.remove("hide")
    button.add("show")
    setTimeout(hide,200);
    
      location.replace("index.html");
      
  
  })
  .catch((error) => {
 
    document.getElementById("alert_message").innerHTML = error.message;
    button.remove("hide")
    button.add("show")
    setTimeout(hide,200);
  });
}
}