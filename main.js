var inputer = document.getElementById("inputer"),
  buttoner = document.getElementById("button-add"),
  message = document.getElementById("message"),
  contenter = document.getElementById("content"),
  deleteAll = document.getElementById("delete-all"),
  noTaskMsg = document.getElementById("no-tasks-message"),
  tasksCount = document.getElementById("counter"),
  taskscompleted = document.getElementById("completed"),
  AllSpan = document.getElementById("All-span"),
  deleterMessage = document.getElementById("delete-message");

window.onload = function () {
  inputer.focus();
};
/* <i className='fas fa-times'></i> */
buttoner.onclick = function () {
  if (inputer.value === "") {
    message.innerText = "the input field should not empty";

    // //create icon
    // var emptySpan = document.createElement("span");
    // emptySpan.classList = "icons";
    // emptySpanText = document.createTextNode("");
    // emptySpan.appendChild(emptySpanText);
    // noTaskMsg.appendChild(emptySpan);
    // //create edit-icon
    // var emptyIcon = document.createElement("i");
    // emptyIcon.classList = "fas fa-edit";
    // emptyIconText = document.createTextNode("");
    // emptyIcon.appendChild(emptyIconText);
    // emptySpan.appendChild(emptyIcon);
    // //create close-icon
    // var emptyIcon = document.createElement("i");
    // emptyIcon.classList = "fas fa-times delete";
    // emptyIcon.id = "deleteId";
    // emptyIconText = document.createTextNode("");
    // emptyIcon.appendChild(emptyIconText);
    // emptySpan.appendChild(emptyIcon);
  } else {
    if (document.body.contains(noTaskMsg)) {
      noTaskMsg.remove();
    }
    // //create the span
    // var busyIcon = document.createElement("span");
    // busyIcon.className = "tasks-message";
    // busyIconText = document.createTextNode(inputer.value);
    // busyIcon.appendChild(busyIconText);
    // AllSpan.appendChild(busyIcon);

       //create the collectSpan
          var collectSpan = document.createElement("span");
          collectSpan.className = "ahmed";
          collectSpanText = document.createTextNode("");
          collectSpan.appendChild(collectSpanText);
          AllSpan.appendChild(collectSpan);
      
      //create the flexspan
    var flexleft = document.createElement("span");
    flexleftText = document.createTextNode("");
    flexleft.appendChild(flexleftText);
    collectSpan.appendChild(flexleft);

    //create input checkbox
    var checkbox = document.createElement("input");
    checkbox.classList = "inputer";
    checkbox.type = "checkbox";
    flexleft.appendChild(checkbox);

    //create input value
   var busyIcon = document.createElement("span");
    busyIconText = document.createTextNode(inputer.value);
    busyIcon.appendChild(busyIconText);
    flexleft.appendChild(busyIcon);


    

    //create the flexspan
    var flexRight = document.createElement("span");
    flexRightText = document.createTextNode("");
    flexRight.appendChild(flexRightText);
    collectSpan.appendChild(flexRight);

    //create icon
    var iconEdit = document.createElement("i");
    iconEdit.classList = "fas fa-edit";
    iconEditText = document.createTextNode("");
    iconEdit.appendChild(iconEditText);
    flexRight.appendChild(iconEdit);

    //create icon
    var iconDelete = document.createElement("i");
    iconDelete.classList = "fas fa-times delete";
    iconDelete.id = "deleteId";
    iconDeleteText = document.createTextNode("");
    iconDelete.appendChild(iconDeleteText);
    flexRight.appendChild(iconDelete);

    inputer.value = " ";
    inputer.focus();
    calculateTasks();
    }
  
};

document.onclick = function (e) {
  if (e.target.id == "deleteId") {
    e.target.parentNode.parentNode.remove();

    if (AllSpan.childElementCount === 0) {
      createnewDeleter();
    }
    inputer.focus();
  }

  if (AllSpan.childElementCount > 0) {
    if (e.target.className == "delete-all") {
      AllSpan.children.remove();
      createnewDeleter();
    }
  }
  inputer.focus();
  calculateTasks();
};

function calculateTasks() {
  tasksCount.innerText = AllSpan.children.length;
}

// function createnewSpan() {
//   var newSpanIcon = document.createElement("span");
//   newSpanIcon.className = "tasks-message";
//   newSpanIcon.id = " delete-message";
//   newSpanIconText = document.createTextNode("Your Delete  The List You Add ");
//   newSpanIcon.appendChild(newSpanIconText);
//   contenter.appendChild(newSpanIcon);
// }

function createnewDeleter() {
  var newSpanIcon = document.createElement("span");
  newSpanIcon.className = "tasks-message";
  newSpanIconText = document.createTextNode("Your Delete All The List You Add");
  newSpanIcon.appendChild(newSpanIconText);
  contenter.appendChild(newSpanIcon);
}
