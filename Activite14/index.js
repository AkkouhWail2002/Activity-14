document.getElementById("up").onclick=function(){
    document.getElementById("sign_in").style.visibility="hidden";
    document.getElementById("sign_up").style.visibility="visible";
    document.getElementById("dark").style.transform="rotate(-50deg)";
    document.getElementById("dark").style.left="-40%";  
}
document.getElementById("in").onclick=function(){
    document.getElementById("sign_in").style.visibility="visible";
    document.getElementById("sign_up").style.visibility="hidden";
    document.getElementById("dark").style.transform="rotate(50deg)";
    document.getElementById("dark").style.left="40%"; 
}
document.getElementById("in_us").onfocus=function(){
    document.getElementById("in_us_black").style.visibility="hidden";
}
document.getElementById("in_pass").onfocus=function(){
    document.getElementById("in_pass_black").style.visibility="hidden";
}
document.getElementById("up_us").onfocus=function(){
    document.getElementById("up_us_black").style.visibility="hidden";
}
document.getElementById("up_em").onfocus=function(){
    document.getElementById("up_em_black").style.visibility="hidden";
}
document.getElementById("up_pass").onfocus=function(){
    document.getElementById("up_pass_black").style.visibility="hidden";
}