function inputKeyUp(e) {
  e.which = e.which || e.keyCode;
  console.log(e.which);
  if (e.which == 108) {
    // left arrow 'L'
    // submit
    document.location = document.getElementsByClassName(
      "md-footer-nav__link--next"
    )[0].href;
  } else if (e.which == 104) {
    // right arrow 'H'
    document.location = document.getElementsByClassName(
      "md-footer-nav__link--prev"
    )[0].href;
  }
}

document.getElementsByTagName("body")[0].onkeypress = inputKeyUp;
