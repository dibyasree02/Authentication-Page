var newPass,confrPass;
function setnewPass(){
   newPass=document.querySelector('#setPass').value;
}
function setcnfrPass(){
    confrPass=document.querySelector('#cnfrPass').value;
}
function checkvalid(){
    if(newPass.length <8   || confrPass<8) {
        alert("Please enter password of minimum 8 length");
        return;
    }
    console.log(newPass);
    console.log(confrPass);
    if(newPass==confrPass){
        alert("signup successful");
    }
    else{
        alert("Password Mismatch");
    }
}
