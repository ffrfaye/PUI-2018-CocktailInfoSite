// Get the modals
var modal = document.getElementsByClassName("cocktailsModal");

// Get the buttons that open the modals
var btn = document.getElementsByClassName("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on the cocktail icons, it opens the cooresponding modal
$(document).ready(function() {
  $('.modalBtn').click(function() {
    var index = $(this).attr('data-index');
    modal[index].style.display = "block";
  });

  $('.close').click(function() {
    var index = $(this).attr('data-index');
    modal[index].style.display = "none";
  });
});
