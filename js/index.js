function checkPass(){
    let input1 = document.getElementById("login");
    let input2 = document.getElementById("password");
    let input3 = document.getElementById("confPass");
    let input4 = document.getElementById("genType");
    let input5 = document.getElementById("email");

    if (input1.value != "") {
        document.getElementById("login").style.backgroundColor = "#DFF2BF";
    }
    else if (input1.value == "") {
        document.getElementById("login").style.backgroundColor = "#FFD2D2";
    }

    if (input2.value == input3.value) {
        document.getElementById("password").style.backgroundColor = "#FFD2D2";
    }
    else  {
            
        document.getElementById("alert").innerHTML = "Passwords are not the same";
    }
   if(input4.value == "Choose") {
    document.getElementById("alert").innerHTML = "";
    }
    if (input5.value == "") {
        document.getElementById("email").style.backgroundColor = "#FFD2D2";
    }
    else if(email!=""){
        document.getElementById("password").style.backgroundColor = "#DFF2BF";
    }  
}
checkPass();