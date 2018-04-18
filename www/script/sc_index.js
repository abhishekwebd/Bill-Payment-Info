$("#page-content-wrapper").css("padding","0px");
$("#menu-toggle").css("padding-left","25px");
$(window).load(function() {
	$(".loader").fadeOut("slow");
});


$("#loginbtn").click(function(){

  $(".loader").fadeIn("slow");
  var loginemail=$("#vendorno").val();
  var loginpassword = $("#loginpassword").val();
  var dataString="username="+loginemail+"&password="+loginpassword;

  $.ajax({
    type: "GET",
    url:localStorage.getItem("serverpath")+"billingdata.php",
    data: dataString,
    crossDomain: true,
    cache: false,
    beforeSend: function(){ $("#logintbtn").val('Validationg...');},
    success: function(data){
      var arr = JSON.parse(data);
    
      if(arr.d.length >0){

        localStorage.setItem("username", arr.d[0].username);
        localStorage.setItem("vendorname", arr.d[0].vendorname);
        localStorage.setItem("loginpassword", loginpassword);
        localStorage.setItem("stat", arr.d[0].stat);
        var cstat = sessionStorage.getItem("checkboxstat");
        if(cstat == "checked")
        {

         localStorage.setItem("loginstat","rememberit");
       }

       if( arr.d[0].stat == "1")
       {
        window.location = "main.html";
      }
      else if( arr.d[0].stat == "0")
      {
        window.location = "changepassword.html";
      }


    }else{

     document.getElementById("alert").innerText = "Invalid  Password";

   }


 }
});
});


$("#changebtn").click(function(){
  $(".loader").fadeIn("slow");
  var newpasscode=$("#newpass").val();
  var cnewpasscode = $("#cnewpass").val();

  if(newpasscode == cnewpasscode)
  { 
    var dataString="uname="+localStorage.getItem("username")+"&passtext="+newpasscode;
    $.ajax({
      type: "GET",
      url:localStorage.getItem("serverpath")+"billingdata.php",
      data: dataString,
      crossDomain: true,
      cache: false,
      beforeSend: function(){ $("#changebtn").val('Validationg...');},
      success: function(data){

        $("#changebtn").val(data);
        window.setTimeout(function(){

         localStorage.removeItem("username");
         localStorage.removeItem("vendorname");
         localStorage.removeItem("loginpassword");
         sessionStorage.removeItem("checkboxstat");
         localStorage.setItem("loginstat","userloggedout");
         window.location.href = "home.html";

       }, 2000);
      }
    });

  }
  else
  {
   document.getElementById("alert").innerText = "Password not matched";

 }

});



function loadrecord(billno)
{
   // alert(billno);
   var dataString="billnoseletced="+billno+"&vendorno="+localStorage.getItem("username");
   $.ajax({
    type: "GET",
    url:localStorage.getItem("serverpath")+"billingdata.php",
    data: dataString,
    crossDomain: true,
    cache: false,
    beforeSend: function(){ },
    success: function(data){
     var arr = JSON.parse(data);
    // $(".ak-table").empty();
     if(arr.length > 0)
  {
       document.getElementById("co6no").innerText = arr[0].co6_no;
      document.getElementById("co6date").innerText = arr[0].co6_date;
      document.getElementById("co7no").innerText = arr[0].co7_no;
      document.getElementById("co7date").innerText = arr[0].co7_date;
      document.getElementById("amtpsd").innerText = arr[0].amt_psd;
  }
  else
  { 
    $(".ak-table").append("<tr><td class='ak-hover-red'>No Record Found</td></tr>");
    
  }


}
});
 }



function loadbillno()
{

  var dataString="code=billno&vendorno="+localStorage.getItem("username");
  $.ajax({
    type: "GET",
    url:localStorage.getItem("serverpath")+"billingdata.php",
    data: dataString,
    crossDomain: true,
    cache: false,
    beforeSend: function(){ },
    success: function(data){
     var arr = JSON.parse(data);
     var options = "";
     if(arr.length > 0)
     {
       for(var i =0 ;i<arr.length;i++)
       {
         $("#billlist").append("<option>"+arr[i].bill_no+"</option>");

       }
       loadrecord(arr[0].bill_no);
     }
     else
     {
      $("#billlist").append("<option>No Record Found</option>");
    }
    

  }
});
}

function loadnote()
{
  var dataString="getnote=note";
  $.ajax({
    type: "GET",
    url:localStorage.getItem("serverpath")+"billingdata.php",
    data: dataString,
    crossDomain: true,
    cache: false,
    beforeSend: function(){ },
    success: function(data){

      $("#note").text(data);
    //document.getElementById("note").innerText = data;

  }
});
}

$( "#billlist" ).change(function() {
  var billno = $("#billlist").val(); 
  sessionStorage.setItem("billlist",billno);
  loadrecord(billno);
});

$("#logoutbtn").click(function(){

  localStorage.removeItem("username");
  localStorage.removeItem("vendorno");
  localStorage.removeItem("loginpassword");
  sessionStorage.removeItem("checkboxstat");
  localStorage.setItem("loginstat","userloggedout");
  window.location = "home.html";
});


