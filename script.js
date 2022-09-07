//////////// Saving the notes//////////////////

// I have created a onClick event on our "Add note" button.
//Onclick button  the value of the textarea will be saved to localstorage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if(notes ==null){
        notesObj = [];

    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes" ,JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
});

/////////////////Displaying the notes///////////////////
