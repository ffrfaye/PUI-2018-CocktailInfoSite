// Get the modal
var modal = document.getElementById("myModal");
console.log(modal);

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
$(document).ready(function(){
  $("#myBtn").click(function(){
      modal.style.display = "block";
  });
});

// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it
