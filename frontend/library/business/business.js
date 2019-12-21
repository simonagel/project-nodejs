function BusinessLayer() {
    this.dataLayer = new DataLayer();

   
    this.getReservedBooks = function (event,studentEmail) {
         console.log(studentEmail);   
        let currentStudentEmail = sessionStorage.studentEmail;
        let allStudents = JSON.parse(localStorage.getItem('userStudent'));
        for (let i = 0; i < allStudents.length; i++) {
            if(allStudents[i].meil == currentStudentEmail){
                return allStudents[i].books;
            }
        }
    }

    this.reserveBook = function (event, books) {
        var coverId = event.target.id;
        var updatedBooksList = JSON.parse(localStorage.getItem('reservedBooks'));

        if (!updatedBooksList.includes(coverId)) {
            updatedBooksList.push(coverId);
            localStorage.setItem('reservedBooks', JSON.stringify(updatedBooksList));
            // TODO: 
            $("#isAvailable" + coverId)
                .text("Reserved")
                .css("color", "red");
            $("#" + coverId).css("display", "none");

            console.log(books.length);
            var mailStudent = sessionStorage.getItem('emeil');
            for (var i = 0; i < books.length; i++) {
                // console.log(typeof (books[i].coverId));
                // console.log(typeof coverId); 
                let coverBook = (books[i].coverId.toString());
                // console.log(typeof coverBook);

                if (coverBook == coverId) {
                    //vo books[i] ja imam celata rezervirana kniga i treba f=da se pusne vo student.books[] od local storage
                    let allStudents = JSON.parse(localStorage.getItem('userStudent'));

                    for (var j = 0; j < allStudents.length; j++) {
                        console.log(allStudents[j].meil);
                        console.log(mailStudent);
                        if (allStudents[j].meil == mailStudent) {
                            console.log("pogoden meil");
                            let foundStudent = allStudents[j];
                            let studentBooks = foundStudent.books;

                            studentBooks.push(books[i]);
                            foundStudent.books = studentBooks;
                            allStudents[j] = foundStudent;

                            localStorage.setItem('userStudent', JSON.stringify(allStudents));
                            break;
                        }
                    }

                    break;
                }

                //break;



            }

        }


    }




}    