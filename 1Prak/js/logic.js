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

function addRow() {
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let year = document.getElementById("year").value;
  let art = document.getElementById("art").value;
  let vegan = document.getElementById("vegan").checked;
  let gluten = document.getElementById("gluten").checked;
  let table = document.getElementById("brotTable");
  let row = table.insertRow();
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);
  cell1.innerHTML = id;
  cell2.innerHTML = name;
  cell3.innerHTML = year;
  cell4.innerHTML = art;
  cell5.innerHTML = vegan ? "✔️" : "❌";
  cell6.innerHTML = gluten ? "✔️" : "❌";
}