var modal = $(".js-modal");
var modals = modal.find(".modal");
var modalLaunchBtn = $(".js-open-modal");
var modalCloseBtn = $(".js-close-modal");

// remove button links & modal ids for no js functionality
$.each(modalLaunchBtn, function () {
  var modalLaunchBtnId = $(this).attr("href").substring(7); // remove #modal- in link
  $(this).attr("data-open-modal", modalLaunchBtnId); // add modal data attribute
});
$.each(modals, function () {
  $(this).removeAttr("id");
});

// opens modal
function modalOpen(event, modalId) {
  // is there a click event?
  if (event) {
    event.preventDefault();
    // find the modal id from clicked element
    var activeModalId = $(event.currentTarget).data("open-modal");
  } else {
    // find the modal id from passed string
    var activeModalId = modalId;
  }

  // find the active modal dom element
  var activeModal = $('*[data-modal-id="' + activeModalId + '"]');

  // disable scrolling on background content (doesn't work iOS)
  $("body").addClass("disable-scroll");

  // reveal the specific modal content
  activeModal.removeClass("is-closed").addClass("is-open");

  // open modal
  modal.fadeIn("250", function () {
    $(this).removeClass("is-closed").addClass("is-open");
  });
}

// closes modal
function modalClose(event) {
  event.preventDefault();
  // enable scrolling
  $("body").removeClass("disable-scroll");
  // close modal with fade
  $(".modal__bg.is-open").fadeOut("250", function () {
    // close modal and active modal content
    $(this).removeClass("is-open").addClass("is-closed");
    $(".modal.is-open").removeClass("is-open").addClass("is-closed");
  });
}

// launches modal on button click
modalLaunchBtn.on("click", function (event) {
  modalOpen(event);
});

// launches modal from url queryString
var modalQueryString = "open-modal";
if (getQueryStringByName(modalQueryString)) {
  // find modal id & dom element
  var modalId = getQueryStringByName(modalQueryString);
  var modalElement = $('*[data-modal-id="' + modalId + '"]');
  // is there is a modal to open?
  if ($(modalElement).length > 0) {
    // open without passing event
    modalOpen(null, modalId);
  }
}

// closes modal on close icon click
modalCloseBtn.on("click", function (event) {
  modalClose(event);
});

// closes modal on background click
modal.on("click", function (event) {
  if ($(event.target).hasClass("modal__wrap")) {
    modalClose(event);
  }
});

// closes modal on escape key press
$(document).on("keyup", function (event) {
  if (event.key === "Escape") {
    modalClose(event);
  }
});
