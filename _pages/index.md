---
layout: standard
id: all
title: Alle Angebote im Sale
nav: true
nav-order: 1
header-content: >
  <h1 class="mx-auto px-4 md:px-8 xl:px-0" style="max-width: 42rem;">
    <img src="{{site.img}}/content/{{page.id}}/title.png" alt="{{site.title}}">
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
    {% include component/se-offers.html tag="zz_DE_summersale" %}
  </div>
</div>
