//Get the button
let mybutton = document.getElementById('btn-back-to-top');
let navbarid = document.getElementById('navbar-id');
let myModal = document.getElementById('myModalBtn');
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);
navbarid.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$("#brotForm").submit(function( event ) {
  alert($('#titel').val());
  event.preventDefault();
});