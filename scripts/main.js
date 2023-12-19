/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.top = "0%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.top = "100%";
    document.body.style.backgroundColor = "white";
  }

/* Button toggle between two stylesheets */
function sillyButton() {
    document.body.classList.remove('serious');
    document.body.classList.add('silly');
    console.log(":3");
}

function seriousButton() {
    document.body.classList.remove('silly');
    document.body.classList.add('serious');
    console.log("wsg");
}