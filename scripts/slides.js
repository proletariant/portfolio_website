let slideIndex = [1, 1, 1, 1, 1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5"]

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  // n = slide number to view
  // no = slideshow identifier
  let i;
  let slideshow = document.getElementsByClassName(slideId[no]);
  if (n > slideshow.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = slideshow.length}
  for (i = 0; i < slideshow.length; i++) {
    slideshow[i].style.display = "none";
  }
  slideshow[slideIndex[no] - 1].style.display = "block";
}