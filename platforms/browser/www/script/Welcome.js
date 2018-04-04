function checknull1() {

  
    if ($("#fname").val() == "") {
        $("#fname").addClass("ak-border-red");
        $("#fname").focus;
        return false;
    } else {
        $("#fname").removeClass("ak-border-red");
        $("#fname").addClass("ak-border-green");
    }
    if ($("#lname").val() == "") {
        $("#lname").addClass("ak-border-red");
        $("#lname").focus;
        return false;
    } else {
        $("#lname").removeClass("ak-border-red");
        $("#lname").addClass("ak-border-green");
    }
    if ($("#username").val() == "") {
        $("#username").addClass("ak-border-red");
        $("#username").focus;
        return false;
    }
    else {
        $("#username").addClass("ak-border-green");
        $("#username").focus;
    }
    if (checkemail() == false) {
        return false;
    }

    if ($("#dob").val() == "") {
        $("#dob").addClass("ak-border-red");
        return false;
    } else {
        $("#dob").removeClass("ak-border-red");
        $("#dob").addClass("ak-border-green");
    }

    if ($("#phone").val() == "") {
        $("#phone").addClass("ak-border-red");
        return false;
    } else {
        $("#phone").removeClass("ak-border-red");
        $("#phone").addClass("ak-border-green");
    }

   
    if ($("#pass").val() == "") {
        $("#pass").addClass("ak-border-red");
        return false;
    } else {
        $("#pass").removeClass("ak-border-red");
        $("#pass").addClass("ak-border-green");
    }
    if ($("#cpass").val() == "" || $("#pass").val() != $("#cpass").val()) {
        $("#cpass").addClass("ak-border-red");
        return false;
    } else {
        $("#cpass").removeClass("ak-border-red");
        $("#cpass").addClass("ak-border-green");
    }
 

    return true;
}

function checknull2() {

  
    if ($("#fname").val() == "") {
        $("#fname").addClass("ak-border-red");
        $("#fname").focus;
        return false;
    } else {
        $("#fname").removeClass("ak-border-red");
        $("#fname").addClass("ak-border-green");
    }
    if ($("#lname").val() == "") {
        $("#lname").addClass("ak-border-red");
        $("#lname").focus;
        return false;
    } else {
        $("#lname").removeClass("ak-border-red");
        $("#lname").addClass("ak-border-green");
    }
    if ($("#username").val() == "") {
        $("#username").addClass("ak-border-red");
        $("#username").focus;
        return false;
    }
    else {
        $("#username").addClass("ak-border-green");
        $("#username").focus;
    }
    if (checkemail() == false) {
        return false;
    }
    if ($("#dob").val() == "") {
        $("#dob").addClass("ak-border-red");
        return false;
    } else {
        $("#dob").removeClass("ak-border-red");
        $("#dob").addClass("ak-border-green");
    }
    if ($("#phone").val() == "") {
        $("#phone").addClass("ak-border-red");
        return false;
    } else {
        $("#phone").removeClass("ak-border-red");
        $("#phone").addClass("ak-border-green");
    }

  
    if ($("#pass").val() == "") {
        $("#pass").addClass("ak-border-red");
        return false;
    } else {
        $("#pass").removeClass("ak-border-red");
        $("#pass").addClass("ak-border-green");
    }
    if ($("#cpass").val() == "" || $("#pass").val() != $("#cpass").val()) {
        $("#cpass").addClass("ak-border-red");
        return false;
    } else {
        $("#cpass").removeClass("ak-border-red");
        $("#cpass").addClass("ak-border-green");
    }
    if ($("#wpass").val() == "") {
        $("#wpass").addClass("ak-border-red");
        return false;
    } else {
        $("#wpass").removeClass("ak-border-red");
        $("#wpass").addClass("ak-border-green");
    }
    if ($("#cwpass").val() == "" || $("#cwpass").val() != $("#wpass").val()) {
        $("#cwpass").addClass("ak-border-red");
        return false;
    } else {
        $("#cwpass").removeClass("ak-border-red");
        $("#cwpass").addClass("ak-border-green");
    }

    if ($("#sponserid").val() == "") {
        $("#sponserid").addClass("ak-border-red");
        return false;
    } else {
        $("#sponserid").removeClass("ak-border-red");
        $("#sponserid").addClass("ak-border-green");
    }


    return true;
}

function checkemail() {
    var email = document.getElementById("email").value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
        $("#email").removeClass("ak-border-red");
        $("#email").addClass("ak-border-green");

    } else {
        alert("Invalid Email");
        $("#email").addClass("ak-border-red");
        return false;
    }
}

       function sponser() {

           var aData = $("#sponserid").val();
if(aData !== ""){
      $("#sponsername").empty();
          
        $.ajax({
        type: "GET", 
        url: localStorage.getItem("serverpath")+"datalist.php",
        data: "code=autospill&sid= " + aData,
        crossDomain:true,
        cache:false,
        success:function(data){
           document.getElementById("sponsername").value = data;
        }
    });
}
else
{
    document.getElementById("sponsername").value = "Invalid Sponserid";
}
         
       };

function checkusername() {

   var aData = $("#username").val();
  var datastring = "code=checkusername&uname="+aData+"";
    $.ajax({
        type: "GET", 
        url: localStorage.getItem("serverpath")+"datalist.php",
        data: datastring,
        crossDomain:true,
        cache:false,
        success:function(data){
        $("#username").attr("class", data);
        }
    });

  
};


