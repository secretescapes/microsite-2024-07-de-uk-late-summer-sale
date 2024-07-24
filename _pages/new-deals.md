---
layout: standard
id: new-deals
title: New Deals
permalink: /new-deals/
nav: false
nav-order: 2
intro: We've just launched loads more deals into our sale to give you even more options for your next escape. With unbelievable discounts, now's the time to book your next holiday at a bargain price.
header-content: >
  <h1 class="mx-auto" style="max-width: 28rem;">
    <img src="{{site.img}}/content/{{page.id}}/title.png" alt="{{site.title}} - New Deals Added">
  </h1>
---

<div class="page-padding text-textBlack content-spacing bg-white">
  <div class="mx-auto max-w-screen-lg py-20 text-center">
    <h2 class="h5">New deals added to the Late-Summer Sale!</h2>
    <p class="text-lg">{{page.intro}}</p>
    {% include countdown.html message="The Late-Summer Sale ends in:" class="text-lg" %}
  </div>
</div>

<div class="page-padding content-spacing">
  <div class="mx-auto max-w-screen-3xl pb-24">
    {% include component/se-offers.html tag="zz_UK_summersaleNew" %}
    <div class="text-center pt-12">
      <a href="{{site.baseurl}}" class="btn btn--lg">{{locale.general.back-to-deals}}</a>
    </div>
  </div>
</div>
