function userLogIn(){
    let uname=document.getElementById('lid').value;
    let pass=document.getElementById('lpass').value;
    alert("User Name "+uname + "Password Is "+pass);
    window.location.href='userprofile.html';
    
}


function userReg(){
    let uname=document.getElementById('uname').value;
    let uid=document.getElementById('uid').value;
    let icard=document.getElementById('icard').value;
    let upass=document.getElementById('upass').value;
    document.getElementById('logmsg').innerHTML="Registration Suceessfull Please Log In";

}


function testCLog(){
    let uname=document.getElementById('uname').value;
    let pass=document.getElementById('pass').value;
    alert("User Name "+uname + "Password Is "+pass);
    window.location.href='testcenterhome.html';

}

function testCreg(){
    let tname=document.getElementById('tname').value;
    let tid=document.getElementById('tid').value;
    let tregno=document.getElementById('tregno').value;
    let pass=document.getElementById('pass').value;
    document.getElementById('rmsg').innerHTML="Registration Suceessfull Please Log In";

}


function profileShow(){
    document.getElementById('profile').style.display='block';
    document.getElementById('myqr').style.display='none';
    document.getElementById('chkqr').style.display='none';
    document.getElementById('hist').style.display='none';
}

function qrShow(){
    document.getElementById('profile').style.display='none';
    document.getElementById('myqr').style.display='block';
    document.getElementById('chkqr').style.display='none';
    document.getElementById('hist').style.display='none';
}

function scanQrShow(){
    document.getElementById('profile').style.display='none';
    document.getElementById('myqr').style.display='none';
    document.getElementById('chkqr').style.display='block';
    document.getElementById('hist').style.display='none';
}

function histShow(){
    document.getElementById('profile').style.display='none';
    document.getElementById('myqr').style.display='none';
    document.getElementById('chkqr').style.display='none';
    document.getElementById('hist').style.display='block';
}