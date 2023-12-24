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
    document.body.classList.remove('serious');
    document.body.classList.add('silly');
    console.log(":3");
  } else {
    document.body.classList.remove('silly');
    document.body.classList.add('serious');
    console.log("wsg");
  }
}