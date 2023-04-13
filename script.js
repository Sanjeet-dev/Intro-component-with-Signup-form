const form = document.getElementById('form');
const fname = document.getElementById('f_name');
const lname = document.getElementById('l_name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    validate();
})

const validate = () => {
    const fnameVal = fname.value.trim();
    const lnameVal = lname.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();

    if(fnameVal===""){
        setErrorMsg(fname,'First Name cannot be empty');
    }

    if(lnameVal===""){
        setErrorMsg(lname, "Last Name cannot be empty");
    }

    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailVal===""){
        setErrorMsg(email,"Email cannot be empty");
    }
    else if(emailVal.match(pattern)){
        setErrorMsg(email,"This seems like a genuine email");
    }
    else{
        setErrorMsg(email,"Looks like not an email");
    }

    if(passwordVal === ""){
        setErrorMsg(password,"Password cannot be empty");
    }
}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const msg = formControl.querySelector('p');
    formControl.className = "form-control error";
    msg.innerText = errormsgs;
}