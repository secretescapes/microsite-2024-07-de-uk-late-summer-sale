---
layout: standard
id: new-deals
title: New Deals
permalink: /new-deals/
nav: true
nav-order: 2
intro: We've just launched loads more deals into our sale to give you even more options for your next escape. With unbelievable discounts, now's the time to book your next holiday at a bargain price.
header-content: >
  <h1 class="mx-auto px-6 sm:px-12 lg:px-0" style="max-width: 28rem;">
    <img src="{{site.img}}/content/{{page.id}}/title.png" alt="{{site.title}} - New Deals Added">
  </h1>
---

{% include var.html %}

<div class="page-padding text-textBlack content-spacing bg-white">
  <div class="mx-auto max-w-screen-lg py-20 text-center">
    <h2 class="h4">The Late-Summer Sale has now ended. See our current deals.</h2>
    <div class="h-4"></div>
    <a href="{{locale.core-nav.site}}{{locale.core-nav.header[0].link}}" class="btn">{{locale.core-nav.header[0].text}}</a>
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
