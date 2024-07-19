////////////////////////////////////////////////////////////////////////////////
//      Sticky microsite nav
////////////////////////////////////////////////////////////////////////////////

// elements and classes
var stickyNavClass = ".js-sticky-nav";
var stickyNavContainer = ".sticky-nav-wrap";
var stickyNavModifier = "is-stuck";
var nav = $(stickyNavClass);

function stickyNav() {
  var scrollTop = $(document).scrollTop();
  var navHeight = nav.outerHeight();
  var distance =
    $(stickyNavContainer).offset().top +
    $(stickyNavContainer).outerHeight() -
    navHeight;
  if (scrollTop > distance) {
    nav.addClass(stickyNavModifier);
  } else {
    nav.removeClass(stickyNavModifier);
  }
}

// only run if element is on the page
if (nav.length !== 0) {
  // runs on page load and scroll
  stickyNav();
  $(document).on("scroll", stickyNav);
}
