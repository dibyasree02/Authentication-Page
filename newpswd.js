var newPass,confrPass;
function setnewpswd(){
   newPass=document.querySelector('#newPswd').value;
}
function setcnfrpswd(){
    confrPass=document.querySelector('#cnfswd').value;
}
function chkvalid(){
    if(newPass.length <8   || confrPass<8) {
        alert("Please enter password of minimum 8 length");
        return;
    }
    if(newPass!=confrPass){
        alert("Password Mismatch");
    }
    else{
        alert("Password changed successfully")
    }
}
