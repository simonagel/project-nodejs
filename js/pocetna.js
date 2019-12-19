

function pocetnaStrana() {
  
   //povikuva f-ja so koja se polni local storage so odnapred definirani useri za bibliotekari

     var userLibs = new Userlibs();

   if (!JSON.parse(localStorage.getItem('userStudent'))) {
      userLibs.openUserLib();
      userLibs.setReservedBooks();
      userLibs.setStudentReservedBooks();
      userLibs.setUsers();
   }

   let body = $("body");
   //let spanAlert = $("<div>").addClass("alert");
   //body.append(spanAlert);
   let divLogin = $("<div>").attr("id", "divLogin");
   body.append(divLogin);
   let divImg = $("<div>").attr({ "id": "divImg", "class": "divPocetna" });
   body.append(divImg);
   let divTitle = $("<h1>").html("Ova e mojot JS proekt");
   divTitle.addClass("firsTitle");
   divLogin.append(divTitle);
   let btnLog = $("<button>").attr({ "id": "btnLog", "class": "btnLog" });
   let btnReg = $("<button>").attr({ "id": "btnReg", "class": "btnLog" });
   btnLog.text("Login");
   btnReg.text("Register");
   let divRegLog = $("<div>").attr("id", "divRegLog");
   divLogin.append(divRegLog);
   divRegLog.append(btnLog);
   divRegLog.append(btnReg);
   let spanLyb = $("<div>").text("e-Library").addClass("spane");
   divImg.append(spanLyb);
   let spanQuote = $("<div>").addClass("quote");
   divImg.append(spanQuote);
   spanQuote.append("<img id='quoteImg' src='css/imgs/quote.jpg'/>");


   // forma za registracija

   let divRegForm = $("<form>").attr("id", "divRegForm");
   divRegLog.append(divRegForm);
   divRegForm.append("<h3>Register</h3><p>Please fill in this form to create an account.</p><hr>");

   let divInp1 = $("<div>").attr({ "class": "inpsec", "id": "inpsec" });
   divRegForm.append(divInp1)

   divInp1.append('<label for="name"><b>First Name</b></label>');
   let inpName = $('<input type="text" placeholder="Enter First Name" id="form_fname" name="" required="">');
   var spanErr = $("<span>").attr({ "class": "error_form", "id": "fname_error_message" })
   divInp1.append(inpName);
   divInp1.append(spanErr);

   let divInp2 = $("<div>").attr({ "class": "inpsec", "id": "inpsec" });
   divRegForm.append(divInp2)

   divInp2.append('<label for="name"><b>Second name</b></label>');
   let inpSname = $('<input type="text" placeholder="Enter Second Name" id="form_sname" name="" required="">');
   var spanErr = $("<span>").attr({ "class": "error_form", "id": "sname_error_message" })
   divInp2.append(inpSname);
   divInp2.append(spanErr);

   let divInp3 = $("<div>").attr({ "class": "inpsec", "id": "inpsec" });
   divRegForm.append(divInp3)

   divInp3.append('<label for="email"><b>Email</b></label>');
   let input1 = $('<input type="text" placeholder="Enter Email" name="email" required>');
   input1.attr({ "class": "impEmail", "id": "form_email" });
   divInp3.append(input1);
   var spanErr = $("<span>").attr({ "class": "error_form", "id": "email_error_message" })
   divInp3.append(spanErr);

   let divInp4 = $("<div>").attr({ "class": "inpsec", "id": "inpsec" });
   divRegForm.append(divInp4)

   divInp4.append('<label for="psw"><b>Password</b></label');
   let input2 = $('<input type="password" placeholder="Enter Password" name="psw" required>');
   input2.attr("id", "form_password");
   divInp4.append(input2);
   var spanErr = $("<span>").attr({ "class": "error_form", "id": "password_error_message" })
   divInp4.append(spanErr);

   let divInp5 = $("<div>").attr({ "class": "inpsec", "id": "inpsec" });
   divRegForm.append(divInp5)


   divInp5.append('<label for="psw-repeat"><b>Repeat Password</b></label>');
   let input3 = $('<input type="password" placeholder="Repeat Password" name="psw-repeat" required>');
   input3.attr("id", "form_retype_password");
   divInp5.append(input3);
   var spanErr = $("<span>").attr({ "class": "error_form", "id": "retype_password_error_message" })
   divInp5.append(spanErr);

   divRegForm.append('<p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>');

   let divRegFormBtn = $('<button type="submit" text ="REGISTER">');
   divRegFormBtn.text("REGISTER");
   divRegFormBtn.addClass("btnReg");
   divRegFormBtn.attr("id", "btnValidate");
   divRegForm.append(divRegFormBtn);

   let divSubmit = $("<div>").attr({ "class": "divSubmit", "id": "idSubmit" });
   divRegForm.append(divSubmit);
   divSubmit.append('<p>Already have an account? <a href="#">Sign in</a>.</p><br>');



   //

   //Forma za najava
   let divLogForm = $("<form>").attr("id", "divLogForm");
   divRegLog.append(divLogForm);
   divLogForm.append("<h3>Login</h3><p>Please fill in this form to login.</p><hr>");

   let divInp11 = $("<div>").attr({ "class": "inpsec", "id": "inpsec" });
   divLogForm.append(divInp11);
   let divInp22 = $("<div>").attr({ "class": "inpsec", "id": "inpsec" });
   divLogForm.append(divInp22);

   divInp11.append('<label for="email"><b>Email</b></label>');
   let input11 = $('<input type="text" placeholder="Enter Email" name="email" required>');
   input11.attr({ "class": "impEmail", "id": "form_email_1" });
   divInp11.append(input11);
   var spanErr = $("<span>").attr({ "class": "error_form", "id": "email_error_message_1" });
   divInp11.append(spanErr);

   divInp22.append('<label for="psw"><b>Password</b></label');
   let input22 = $('<input type="password" placeholder="Enter Password" name="psw" required>');
   input22.attr("id", "form_password_1");
   divInp22.append(input22);
   var spanErr = $("<span>").attr({ "class": "error_form", "id": "password_error_message_1" });
   divInp22.append(spanErr);

   let divLogFormBtn = $('<button type="submit" text ="LOGIN">');
   divLogFormBtn.text("LOGIN");
   divLogFormBtn.addClass("btnLog");
   divLogFormBtn.attr("id", "btnValidate_1");
   divLogForm.append(divLogFormBtn);

   let divSubmit1 = $("<div>").attr({ "class": "divSubmit", "id": "idSubmit" });
   divLogForm.append(divSubmit1);
   divSubmit1.append('<p> Incorrect account? <a href="#">Register</a>.</p><br>');
   //

   // na clik na kopce za registracija(login) se pojavuva formata za registracija(login)

   $("#btnReg").click((e) => {
      // console.log($("#divRegForm").css("display"));
      if ($("#divRegForm").css("display") == "none") {
         $("#divRegForm").css("display", "block");
      } else {
         $("#divRegForm").trigger("reset");
         $("#divRegForm").css("display", "none");
      }

      if ($("#divLogForm").css("display") == "block") {
         $("#divLogForm").css("display", "none");
      }
   });

   $("#btnLog").click((e) => {
      
      if ($("#divLogForm").css("display") == "none") {
         $("#divLogForm").css("display", "block");
      } else {

         $("#divLogForm").trigger("reset");
         $("#divLogForm").css("display", "none");
      }

      if ($("#divRegForm").css("display") == "block") {
         $("#divRegForm").css("display", "none");
      }
   });
   ///na click na button proverka , smestuvawe na podatoci (mail i passw) vo lokal storage

   $(function () {
      $("#fname_error_message").hide();
      $("#sname_error_message").hide();
      $("#email_error_message").hide();
      $("#password_error_message").hide();
      $("#retype_password_error_message").hide();
      $("#email_error_message_1").hide();
      $("#password_error_message_1").hide();

      var error_fname = false;
      var error_sname = false;
      var error_email = false;
      var error_password = false;
      var error_retype_password = false;

      $("#form_fname").focusout(function () {
         check_fname();
      });
      $("#form_sname").focusout(function () {
         check_sname();
      });
      $("#form_email").focusout(function () {
         check_email();
      });
      $("#form_password").focusout(function () {
         check_password();
      });
      $("#form_retype_password").focusout(function () {
         check_retype_password();
      });

      $("#form_email_1").focusout(function () {
         check_email_1();
      });
      $("#form_password_1").focusout(function () {
         check_password_1();
      });
   });

   function check_fname() {
      var pattern = /^[a-zA-Z]*$/;
      var fname = $("#form_fname").val();
      if (pattern.test(fname) && fname !== '') {
         $("#fname_error_message").hide();
         $("#form_fname").css("border-bottom", "2px solid #34F458");
         return corr_fname = fname
      } else {
         $("#fname_error_message").html("Should contain only Characters");
         $("#fname_error_message").show();
         $("#form_fname").css("border-bottom", "2px solid #F90A0A");
         error_fname = true;
      }

   }


   function check_sname() {
      var pattern = /^[a-zA-Z]*$/;
      var sname = $("#form_sname").val()
      if (pattern.test(sname) && sname !== '') {
         $("#sname_error_message").hide();
         $("#form_sname").css("border-bottom", "2px solid #34F458");
         return corr_sname = sname
      } else {
         $("#sname_error_message").html("Should contain only Characters");
         $("#sname_error_message").show();
         $("#form_sname").css("border-bottom", "2px solid #F90A0A");
         error_fname = true;
      }

   }

   function check_password() {
      var password = $("#form_password").val();
      var password_length = password.length;
      if (password_length < 8) {
         $("#password_error_message").html("Atleast 8 Characters");
         $("#password_error_message").show();
         $("#form_password").css("border-bottom", "2px solid #F90A0A");
         error_password = true;
      } else {
         $("#password_error_message").hide();
         $("#form_password").css("border-bottom", "2px solid #34F458");
         corr_password = password;

      }


   }

   function check_password_1() {
      var password_1 = $("#form_password_1").val();
      var password_length = password_1.length;
      if (password_length < 8) {
         $("#password_error_message_1").html("Atleast 8 Characters");
         $("#password_error_message_1").show();
         $("#form_password_1").css("border-bottom", "2px solid #F90A0A");
         error_password = true;
      } else {
         $("#password_error_message_1").hide();
         $("#form_password_1").css("border-bottom", "2px solid #34F458");
         corr_password_1 = password_1
      }
   }

   function check_retype_password() {
      var password = $("#form_password").val();
      var retype_password = $("#form_retype_password").val();
      if (password !== retype_password) {
         $("#retype_password_error_message").html("Passwords Did not Matched");
         $("#retype_password_error_message").show();
         $("#form_retype_password").css("border-bottom", "2px solid #F90A0A");
         error_retype_password = true;
      } else {
         $("#retype_password_error_message").hide();
         $("#form_retype_password").css("border-bottom", "2px solid #34F458");
      }
   }

   function check_email() {
      var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      var email = $("#form_email").val();
      if (pattern.test(email) && email !== '') {
         $("#email_error_message").hide();
         $("#form_email").css("border-bottom", "2px solid #34F458");
         corr_email = email;
       //  alert("tuka da se proveri");
      } else {
         $("#email_error_message").html("Invalid Email");
         $("#email_error_message").show();
         $("#form_email").css("border-bottom", "2px solid #F90A0A");
         error_email = true;
      }

   }
   function check_email_1() {
      var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      var email_1 = $("#form_email_1").val();

      if (pattern.test(email_1) && email_1 !== '') {
         $("#email_error_message_1").hide();
         $("#form_email_1").css("border-bottom", "2px solid #34F458");
         corr_email_1 = email_1;
      } else {
         $("#email_error_message_1").html("Invalid Email");
         $("#email_error_message_1").show();
         $("#form_email_1").css("border-bottom", "2px solid #F90A0A");
         error_email = true;
      }
   }


   $("#divRegForm").submit((e) => {
      error_fname = false;
      error_sname = false;
      error_email = false;
      error_password = false;
      error_retype_password = false;
      check_fname();
      check_sname();
      check_email();
      check_password();
      check_retype_password();

      if (error_fname === false && error_sname === false && error_email === false && error_password === false && error_retype_password === false) {
         var userStudentReg = new Object(); 
         userStudentReg.firstName = corr_fname;
         userStudentReg.lastName = corr_sname;
         userStudentReg.eMail = corr_email;
         userStudentReg.role = 's';
         userStudentReg.isActive = '1';
         userStudentReg.passw = corr_password
        // userStudentReg.dateOfCreating = ''
       const user = userStudentReg;
                          
         postRegUser = (user) => {
            return new Promise((resolve,reject) => {
               $.ajax({
                   url: "http://localhost:8080/api/user",
                   type: "POST",
                   data: user,
                   success: function (data) {
                      alert('success');
                     resolve(data);
                   },
                   statusCode: {
                     404: function() {
                       alert( "page not found" );
                     }
                   },
                   error: function (error) {
                     alert('error');
                     reject(error);
                   }
               
               });
   
            });             
         }
   
       postRegUserAction = async() => {
           try{
               await postRegUser(user);
               alert('user is created');
           }catch(error){
              alert(error.message);
   
            }
         }

         postRegUserAction(user);
         
         return true;
      
      } else {
         alert("Please Fill the form Correctly");
         return false;
      }
   });

   $("#divLogForm").submit((e) => {
      error_fname = false;
      error_sname = false;
      error_email = false;
      error_password = false;
      error_retype_password = false;
      check_email_1();
      check_password_1();

      if (error_email === false && error_password === false) {
         var userStudentLog = new Object(); 
         userStudentLog.eMail = corr_email_1;
         userStudentLog.passw = corr_password_1;

         const user = userStudentLog;
                          
         postLogUser = (user) => {
            console.log(user);
            return new Promise((resolve,reject) => {
               $.ajax({
                   url: "http://localhost:8080/api/user/login",
                   type: "POST",
                   data: user,
                   success: function (data) {
                    
                     alert('success');
                     resolve(data);
                     
                   },
                   statusCode: {
                     403: function() {
                      
                       window.alert( "Wrong password" );
                     },
                     402: function() {
                  
                        window.alert( "User does not exist");
                      },
                     200: function() {
     
                        alert( "Password match");
                        
                      }
                   },
                   error: function (error) {
                      console.log('error');
                     window.alert('error');
                     reject(error);
                   }
               
               });
   
            });             
         }
   
         postLogUserAction = async() => {
            try{
               await postLogUser(user);
               postLoggedUserAction(user);
               window.alert('Login Successfull ama stvarno');
               window.location = "student/student.html";
             }catch(error){
                      alert("Login Un-Successfull");
   
              
               }    
         }

       //post request za insert vo log tabela

       postLoggedUser = (user) => {
         console.log(user);
         return new Promise((resolve,reject) => {
            $.ajax({
                url: "http://localhost:8080/api/logged",
                type: "POST",
                dataType: "json",
                data: { email: user.eMail,
                        password: user.passw},
                success: function (data) {
                  console.log(data);
                   alert('logged success');
                   
                  resolve(data);
                },
                error: function (error) {
                  console.log(data);
                   alert('logged error');
                  reject(error);
                }
            
            });

         });             
      }

      postLoggedUserAction = async() => {
          try{
               await postLoggedUser(user);
               alert('Logged user');
              
           //  /window.location = "student/student.html";
          }catch(error){
               alert("Logged Un-Successfull");

         }
      }

        postLogUserAction(user);
       
        

       
      } else {
         alert("Please Fill the form Correctly");
         return false;
      }
   }); 
 
  
}
 
pocetnaStrana();
