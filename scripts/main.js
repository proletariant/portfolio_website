/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0%";
  document.body.style.backgroundColor = "white";
}

function sillyToggle() {
  var checkBox = document.getElementsByClassName("sillytoggle");

  // If the checkbox is checked, display the output text
  if (checkBox[0].checked == true || checkBox[1].checked == true) {
    document.body.classList.toggle('silly');
    console.log(":3");
  } else {
    document.body.classList.toggle('silly');
    console.log("wsg");
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropTab() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}