// code for inserting live SE offers from API

// output html for badge with data
function makeBadge(data, isInformational) {
  return (
    '<div class="tag' +
    (isInformational ? " tag--informational" : "") +
    '" style="background-color: ' +
    data.backgroundColor.light +
    "; color: " +
    data.fontColor.light +
    ';">' +
    data.title +
    "</div>"
  );
}

//////////////////////////////////////////////////////////////// offer card html
function offerCard(offerData) {
  // check for promotional badges
  var promoBadgeHTML;
  if (
    offerData.badges.length > 0 &&
    offerData.badges[0].type === "PROMOTIONAL"
  ) {
    promoBadgeHTML = makeBadge(offerData.badges[0]);
  }
  // check for informational badges
  var infoBadgeHTML;
  if (
    offerData.badges.length > 0 &&
    offerData.badges[0].type === "INFORMATIONAL"
  ) {
    infoBadgeHTML = makeBadge(offerData.badges[0], true);
  }
  // build the final html
  return (
    '<div class="col"><div class="offer-card"><div class="image bg-ratio bg-ratio--3-2" style="background-image: url(\'' +
    offerData.photos[0].url +
    "')\" >" +
    (promoBadgeHTML
      ? '<div class="tags absolute top-3 left-3">' + promoBadgeHTML + "</div>"
      : "") +
    '</div><div class="content"><div class="location">' +
    offerData.editorial.destinationName +
    '</div><div class="title">' +
    offerData.editorial.title +
    "</div>" +
    (infoBadgeHTML ? '<div class="tags">' + infoBadgeHTML + "</div>" : "") +
    '<div class="bottom"><div class="left"><div class="price"><div>' +
    (offerData.prices.availability.priceValuePrefixLabel
      ? offerData.prices.availability.priceValuePrefixLabel + " "
      : "") +
    "<span>" +
    offerData.prices.leadRate.forDisplay +
    "</span>" +
    (offerData.prices.availability.priceValueSuffixLabel
      ? " " + offerData.prices.availability.priceValueSuffixLabel
      : "") +
    "</div><div>" +
    offerData.prices.availability.priceValueHint +
    '</div></div></div><div class="right">' +
    (offerData.prices.discount !== 0
      ? '<div class="saving">' +
        localeData.offer.upTo +
        "<span>-" +
        offerData.prices.discount +
        '% <button class="js-saving-msg saving__icon"><span class="saving__text">' +
        offerData.prices.discountTooltip +
        "</span></button></span> </div>"
      : "") +
    '</div></div></div><a class="link" href="' +
    localeData["core-nav"].site +
    offerData.links.sale +
    '"></div></div>'
  );
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////// Main function
////////////////////////////////////////////////////////////////////////////////

// set defaults
var territory = locale;
var tag = "ukandireland";
var limit = 200; // reasonable maximum for showing "all" offers
// store out of loop as constant
var graphQLQueryStart = '{"query":"{ saleSearch(';
var graphQLQueryEnd =
  '{id type editorial {title destinationName reasonToLove} prices {leadRate {forDisplay} pricingRules {showRackRate} rackRate {forDisplay} leadRateTooltip discount discountTooltip availability {priceValueHint, priceValueSuffixLabel, priceValuePrefixLabel}} dates {end start} links {sale} photos(limit: 1) {url} attributes {isMysterious isSmartStay isDynamicPackage isExclusive isDepositSale} badges (channel: WEB) {title, iconName, tooltip {title, description}, fontColor {light, dark}, backgroundColor {light, dark}, type, priority, channel} travel {hasFlightsIncluded hasFlightsAvailable}} refinementFacets {name value}}}"}';

// fetches data and creates html for offers
function makeOffers(el, sortVal) {
  // set variables
  var container = el.find(".js-offers-row");
  var elSortBy = sortVal ? sortVal : el.data("sort");
  var elTag = el.data("tag");
  var elIds = el.data("ids");
  var elLimit = el.data("amount");
  var graphQLQuery = graphQLQueryStart;
  // create graphQL query
  if (elIds === undefined) {
    // show all offers with tag
    graphQLQuery +=
      'collections:[\\"' +
      (elTag ? elTag : tag) +
      '\\"], sortBy:' +
      elSortBy +
      ', territory:\\"' +
      territory +
      '\\") {sales(limit:' +
      (elLimit ? elLimit : limit) +
      ")";
  } else {
    // show offers by passed IDs
    var elIdsArr = elIds.split(",");
    var idsString = "";
    for (let i = 0; i < elIdsArr.length; i++) {
      idsString += '\\"' + elIdsArr[i] + '\\"';
      if (i !== elIdsArr.length - 1) idsString += ", ";
    }
    graphQLQuery +=
      "saleIds: [" + idsString + '], territory:\\"' + territory + '\\") {sales';
  }
  graphQLQuery += graphQLQueryEnd;
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://sparrow-production.escapes.tech/graphql/",
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    data: graphQLQuery
  };
  // call API and inject html for each offer
  $.ajax(settings).done(function (response) {
    // remove placeholder loading offer cards
    container.empty();
    // add offer cards with content
    for (var i = 0; i < response.data.saleSearch.sales.length; i++) {
      // create populated offer card
      container.append(offerCard(response.data.saleSearch.sales[i]));
    }
    // add click to show saving's message
    $(".js-saving-msg").on("click", function () {
      $(this).toggleClass("is-shown");
    });
  });
}

// populate offers on page load
$(".js-offers").each(function () {
  makeOffers($(this));
});

// re-populate offers when sort type selected
$(".js-offers-sort").on("change", function () {
  var selectedOption =
    $(this).get(0).options[$(this).get(0).selectedIndex].value;
  makeOffers($(this).closest(".js-offers"), selectedOption);
});
