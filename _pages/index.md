---
layout: standard
id: all
title: All Sale Deals
nav: true
nav-order: 1
header-content: >
  <h1 class="h--banner">
    {{site.title}}
  </h1>
---

<div class="page-padding text-textBlack content-spacing bg-white">
  <div class="mx-auto max-w-screen-lg py-20 text-center">
    <h2 class="h4">Lorem ipsum dolor sit amet consectetur adipisicing elit itaque dolor</h2>
    <p class="text-lg">{{site.description}}</p>
    {% include countdown.html message="Sale ends in:" class="text-lg" %}
  </div>
</div>

<div class="page-padding content-spacing">
  <div class="mx-auto max-w-screen-3xl pb-24">
    <p class="h1 pt-32 pb-8 text-center">offers by tag</p>
    {% include component/se-offers.html tag="zz_UKsummersaleALL" %}
    <p class="h1 pt-32 pb-8 text-center">offers by ids</p>
    {% assign offers = site.data.offers | join: ',' %}
    {% assign offers-amount = site.data.offers | size %}
    {% include component/se-offers.html ids=offers amount=offers-amount %}
  </div>
</div>
