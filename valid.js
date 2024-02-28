

function validate(){
    var user = document.forms["myform"]["uname"].value;
    var pass = document.forms["myform"]["pass"].value;
    if (user=="user" && pass=="1234")
{
        alert("Login Successfully");
        window.location.replace("map.html");
        return false;
    }
    else{
        alert("Login Failed");
    }

}


