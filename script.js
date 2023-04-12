function myFunc(){
// console.log("working")

    let fname = document.getElementById("f_name").value;
    let lname = document.getElementById("l_name").value;
    let mail = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    var flag=true;
    // if(fname==="" && lname==="" && mail)

    if(fname === ""){
        document.getElementById("msg0").innerHTML="First Name cannot be empty";
    }


    if(lname === ""){
        document.getElementById("msg1").innerHTML="Last Name cannot be empty";

    }

    let pattern = "/^[a-zA-Z0-9]+[\._]?[a-z0-9]+[@]\w[.]\w{2,3}$/";
    
    if(mail.match(pattern)){
        true;
    }else{
        document.getElementById("msg2").innerHTML="Looks like this is not an email";

    }

    if(pass === ""){
        document.getElementById("msg3").innerHTML ="Password cannot be empty";
    }
    flag=false;
    return flag;
}