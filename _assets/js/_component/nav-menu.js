// function for drop-down menu in navigation

// set variables
var el = ".js-nav-menu";
var classClosed = "is-closed";
var classOpen = "is-open";

// click function to show/hide menu
$(el).on("click", function (e) {
  // only function on parent element
  if (e.target === this) {
    // toggle class names
    if ($(this).hasClass(classClosed)) {
      // close other currently open menus
      $(el + "." + classOpen)
        .removeClass(classOpen)
        .addClass(classClosed);
      // open menu
      $(this).removeClass(classClosed).addClass(classOpen);
    } else {
      // close menu
      $(this).removeClass(classOpen).addClass(classClosed);
    }
  }
});
