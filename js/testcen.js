
function profileShow(){
    document.getElementById('profile').style.display='block';
    document.getElementById('myqr').style.display='none';
    document.getElementById('chkqr').style.display='none';
    document.getElementById('hist').style.display='none';
    document.getElementById('testrepo').style.display='none';
}

function qrShow(){
    document.getElementById('profile').style.display='none';
    document.getElementById('myqr').style.display='block';
    document.getElementById('chkqr').style.display='none';
    document.getElementById('hist').style.display='none';
    document.getElementById('testrepo').style.display='none';
}

function scanQrShow(){
    document.getElementById('profile').style.display='none';
    document.getElementById('myqr').style.display='none';
    document.getElementById('chkqr').style.display='block';
    document.getElementById('hist').style.display='none';
    document.getElementById('testrepo').style.display='none';
}

function histShow(){
    document.getElementById('profile').style.display='none';
    document.getElementById('myqr').style.display='none';
    document.getElementById('chkqr').style.display='none';
    document.getElementById('hist').style.display='block';
    document.getElementById('testrepo').style.display='none';
}


function testShow(){
    document.getElementById('profile').style.display='none';
    document.getElementById('myqr').style.display='none';
    document.getElementById('chkqr').style.display='none';
    document.getElementById('hist').style.display='none';
    document.getElementById('testrepo').style.display='block';
}


function getUpdate(){
    document.getElementById('patntDetl').style.display='block';  
}