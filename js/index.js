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
            document.getElementById("password").innerHTML = "mali ka "
      
    }
   if(input4.value == "Choose") {
        alert("Please specify your gender");
        return false;
    }
    if (input5.value == "") {
        alert("Please enter your email");
        return false;
    }


     else{
        document.getElementById("Submit").innerHTML = "";
        alert ("The Event Form has been successfully saved!");
        return true;

    }

    
}
checkPass();