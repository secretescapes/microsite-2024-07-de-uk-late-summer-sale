---
layout: standard
id: all
title: Alle Angebote im Sale
nav: true
nav-order: 1
header-content: >
  <h1 class="mx-auto" style="max-width: 42rem;">
    <img src="{{site.img}}/content/{{page.id}}/title.png" alt="{{site.title}}">
  </h1>
---

<div class="page-padding text-textBlack content-spacing bg-white">
  <div class="mx-auto max-w-screen-lg py-20 text-center">
    <h2 class="h4">Noch mehr sparen im Spätsommer-Sale!</h2>
    <p class="text-lg">Entdecken Sie Top-Angebote zu Tiefstpreisen!</p>
    <p class="text-lg">{{site.description}}</p>
    <p class="text-lg">Lassen Sie sich von unseren Sale-Kollektionen inspirieren und entdecken Sie Ihren nächsten Traumurlaub.</p>
    {% include countdown.html message="Der Spätsommer-Sale endet in:" class="text-lg" %}
  </div>
</div>

<div class="page-padding content-spacing">
  <div class="mx-auto max-w-screen-3xl pb-24">
    {% include component/se-offers.html tag="zz_DE_summersale" %}
  </div>
</div>
