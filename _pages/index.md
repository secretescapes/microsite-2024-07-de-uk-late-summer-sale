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

<div class="page-padding text-textBlack content-spacing bg-white">
  <div class="mx-auto max-w-screen-lg py-20 text-center">
    <h2 class="h4">Achtung, diese Deals enden bald!</h2>
    <p class="text-lg">Die schönsten Dinge sind flüchtig – das gilt auch für einige Top-Deals in unserem Spätsommer-Sale! Sichern Sie sich jetzt noch riesige Rabatte, bevor diese unwiderstehlichen Angebote den Abflug machen!</p>
    {% include countdown.html message="Der Spätsommer-Sale endet in:" class="text-lg" %}
  </div>
</div>

<div class="page-padding content-spacing">
  <div class="mx-auto max-w-screen-3xl pb-24">
    {% include component/se-offers.html tag="zz_DE_summersale" %}
  </div>
</div>
