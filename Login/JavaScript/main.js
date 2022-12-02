
let btn = document.querySelector('#btn')

btn.onclick = function(e) {
  e.preventDefault();
  validateUserName();
  Email();
  Password(); 

  if(Password() && Email() && validateUserName()){
    AddUsers();
  }

}

// function Check() { 
// validateUserName();
// Email()
// Password() 
// AddUsers();
// }
function validateUserName(){
  
  var username=document.querySelector("#usrname").value;
  if ((username[0] === username[0].toUpperCase())  && username.length>6) {
    document.querySelector(".useralert").style.display = "none";
    return true;
    }
  else{
   document.querySelector(".useralert").innerHTML="Username min 6 elementden ibaret olmali ve ilk herfi boyuk olmalidi!"
  }
}

function Email()
  {
     var mail=document.querySelector("#mail").value
  var mailre = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (mail.match(mailre))
    {
      document.querySelector(".mailalert").style.display = "none";
      return (true)
    }
    else
   {console.log("HI")
    document.querySelector(".mailalert").innerHTML="Email sehvdir!"
  // alert("ghfrh");
    return (false);
    
  }
  }
  
function Password() {
  var psswrd = document.querySelector("#pswrd").value;
  var pswrdre=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (psswrd.match(pswrdre) ) {
   console.log("xxxx")
   document.querySelector(".pswrdalert").style.display = "none";

   return true;
  }
  else{
    document.querySelector(".pswrdalert").innerHTML="Password sehvdir!"
 
  }
}
if(localStorage.getItem('users') === null) {
  localStorage.setItem('users',JSON.stringify([]))
}
function AddUsers() {
  var psswrd = document.querySelector("#pswrd").value;
  var mail=document.querySelector("#mail").value
  var username=document.querySelector("#usrname").value;
  let userbox = JSON.parse(localStorage.getItem('users'));
  let newuser = userbox.find(user => user.mail === mail);

  if(newuser == undefined) {
    userbox.push({
          Password: psswrd,
          Mail: mail,
          Username: username,
         
      })
    localStorage.setItem('users',JSON.stringify(userbox))
  }
  else{
     alert("Bu adda istofadeci artiq movcuddur")
  }


}
