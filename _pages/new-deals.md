---
layout: standard
id: new-deals
title: Neue Deals
permalink: /neue-deals/
nav: true
nav-order: 2
intro: >
  Sie haben richtig gelesen: Ab sofort finden Sie noch mehr Top-Deals in unserem Spätsommer-Sale. Buchen Sie Ihr nächstes Abenteuer jetzt zu Tiefstpreisen!
header-content: >
  <h1 class="mx-auto px-6 sm:px-12 lg:px-0" style="max-width: 32rem;">
    <img src="{{site.img}}/content/{{page.id}}/title.png" alt="{{site.title}} - Neue Angebote">
  </h1>
---

{% include var.html %}

<div class="page-padding text-textBlack content-spacing bg-white">
  <div class="mx-auto max-w-screen-lg py-20 text-center">
    <h2 class="h4">Unser Spätsommer-Sale ist nun beendet. Lassen Sie sich von unseren aktuellen Angeboten inspirieren.</h2>
    <div class="h-4"></div>
    <a href="{{locale.core-nav.site}}{{locale.core-nav.header[0].link}}" class="btn">{{locale.core-nav.header[0].text}}</a>
  </div>
</div>

<div class="page-padding content-spacing">
  <div class="mx-auto max-w-screen-3xl pb-24">
    {% include component/se-offers.html tag="zz_DE_summersaleNew" %}
    <div class="text-center pt-12">
      <a href="{{site.baseurl}}" class="btn btn--lg">{{locale.general.back-to-deals}}</a>
    </div>
  </div>
</div>
