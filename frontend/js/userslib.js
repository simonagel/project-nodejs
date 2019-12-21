function Userlibs(){

    this.userLib = [
      {
        ime : "Ana",
        prezime : "Markovska",
        meil : "ana@gmail.com",
        passw : "12345678",
        library : "english", 
        role : "library"
     }, 
 
     {
        ime : "Biljana",
        prezime : "Stankovska",
        meil : "vesna@gmail.com",
        passw : "12345678",
        library : "french", 
        role : "library"
     },

     {
        ime : "Goran",
        prezime : "Pavlovski",
        meil : "goran@gmail.com",
        passw : "12345678",
        library : "german",
        role : "library"
     }
  ] ;
   
 this.openUserLib = () => {
    localStorage.setItem("userLib", JSON.stringify(this.userLib));
 }  

 this.setReservedBooks = () => {
   localStorage.setItem("reservedBooks", JSON.stringify([]));
 }

 this.setStudentReservedBooks = () => {
   localStorage.setItem("studentReservedBooks", JSON.stringify([]));
 }

 this.setUsers = () => {
   var userStudent = [];
   localStorage.setItem("userStudent", JSON.stringify(userStudent)); 
}  
   

}
