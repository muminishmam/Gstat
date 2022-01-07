var users=[

    ["shams", "1234"],
    ["Laden","hi001"],
    ["john","911"]
];
function valEmail(){

    var email= document.querySelector('#usernameField').value ;
    var pwd=document.querySelector('#passwordField').value;

    if (email== "" || pwd=="" ) {
        window.alert("Please complete the sign-in fields with a valid user name or password ");
    }else if(email=="shams" || email=="Laden" || email=="john"){ 
        validateAccount(email,pwd);
    }else{
        window.alert("The user name is not in our database. Not a member, click Register to sign up!");
    }
}

function validateAccount(email,password){

    console.log("here")
    var valEmail= false;
    var storIndex= null;
    console.log(email);
    console.log(password);

        //////else do more work//////////
        for (let index = 0; index < users.length; index++) {
            if (email === users[index][0]){
                valEmail= true;
                storIndex= index;

               
            
                if(password === users[index][1]){
                    window.location.replace("index.html");
                }else{
                    //window.alert("The user name is not in our database. Please Register to sign in");
                    window.alert("The  password you've entered is incorrect")
                }

                
            }
        }


    


}

