// countdown timer for end of promo campaign
$(".js-countdown").each(function () {
  var messageEl = $(this).prev(".js-countdown-message");
  // create timer html
  $(this).countdown($(this).data("expires"), function (event) {
    if (event.elapsed) {
      // after expired date, remove element
      $(this).remove();
      messageEl.remove();
    } else {
      // before expired date, show remaining time
      $(this).html(
        event.strftime(
          "" +
            '<div class="flex items-center justify-center">' +
            '<span class="inline-block p-2"><strong class="text-3xl">%D</strong><br>' +
            localeData.countdown.days +
            '</span><span class="inline-block p-2"><strong class="text-3xl">%H</strong><br>' +
            localeData.countdown.hours +
            '</span><span class="inline-block p-2"><strong class="text-3xl">%M</strong><br>' +
            localeData.countdown.mins +
            '</span><span class="inline-block p-2"><strong class="text-3xl">%S</strong><br>' +
            localeData.countdown.secs +
            "</span></div>"
        )
      );
    }
  });
});
