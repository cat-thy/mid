function openDrawer() {
  let drawer = document.getElementById("drawer");
  let donateButton = document.querySelector(".drawer-icon");


  donateButton.classList.add("hidden"); //onclick function hides the donate button


  setTimeout(() => {
      drawer.classList.add("open");
  }, 200);
}

function closeDrawer() {
  let drawer = document.getElementById("drawer");
  let donateButton = document.querySelector(".drawer-icon");
  


  drawer.classList.remove("open"); //removes the drawer

  setTimeout(() => {
      donateButton.classList.remove("hidden"); //unhides the donate button
  }, 400);

  
}

document.addEventListener("click", function (event) {
  let drawer = document.getElementById("drawer");
  let button = document.querySelector(".drawer-icon");

  if (drawer && button && !drawer.contains(event.target) && !button.contains(event.target)) {
    closeDrawer();
  }
});  //this simply closes the drawer if a user clicked outside its range


document.querySelectorAll(".payment input").forEach((radio) => {
  radio.addEventListener("mousedown", function (e) {
      if (this.checked) {
          this.wasChecked = true; 
      }
  });

  radio.addEventListener("click", function (e) {
      if (this.wasChecked) {
          this.checked = false; 
      }
      this.wasChecked = false; 
  });
});

//this lets the user check and uncheck the radio buttons


