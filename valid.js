

function validate(){
   var user = document.forms["myform"]["uname"].value;
    var pass = document.forms["myform"]["pass"].value;
    if (user=="user" && pass=="1234")
  {
    window.open('map.html', '_blank');
  }
    else
  {
    document.getElementById("msg").innerHTML = "ชื่อผู้ใช้ หรือรหัสผ่านไม่ถูกต้อง";
  }

}


