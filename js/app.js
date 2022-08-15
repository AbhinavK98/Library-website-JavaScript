console.log("This is library");

// // Todos"

// 1. Store all the data to the localStorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view



//constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

//Display constructor

function Display() {}

//Add method to display prototype
Display.prototype.add = function (book) {
  console.log("Working");
  tableBody = document.getElementById("tableBody");
  let uiString = `
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr> `;
  tableBody.innerHTML += uiString;
};
//Function for clearing Display
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm"); //here we are grabbing form with its ID

  libraryForm.reset(); //this will reset the whole form
};
//Implement validate function

Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};

Display.prototype.show = function (type, displayMessage) {
  let message = document.getElementById("message");
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>Messge:</strong> ${displayMessage}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">×</span>
  </button>
</div>`;

setTimeout(function () {
    message.innerHTML = ''
}, 5000);

};

//Add event listener to submit event whenever user clicks on submit button this event will occur
let libraryForm = document.getElementById("libraryForm"); //here we are grabbing form with its ID
libraryForm.addEventListener("submit", libraryFormSubmit); //now here we have added event listener which will listen when submit button will be clicked then we will get into libraryFormSubmit function

function libraryFormSubmit(e) {
  console.log("Bro you've submitted the form");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;

  let type;

  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  let book = new Book(name, author, type);
  console.log(book);
  e.preventDefault(); //as we know default behavior of form is after submitting it it will reload so we are preventing it \

  let display = new Display();
  if (display.validate(book)) {
    display.add(book); //this will add book to display
    display.clear(); //this will clear the text area
    display.show("success", "Your book is successfully added");
  } else {
    display.show("Danger", "Sorry you cannot add this book");
    //show error to user error
  }
}
