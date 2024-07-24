---
layout: competition
id: competition
title: Win a pampering spa break for two, plus £500 cash!
permalink: /competition/
nav: true
nav-order: 5
nav-title: Win a spa stay
header-content: >
  <div class="mx-auto max-w-screen-2xl">
    <h1 class="h--comp">
      {{page.title}}
    </h1>
  </div>

intro: Does a relaxing spa stay for two in the picturesque Warwickshire countryside sound like just the ticket? We're giving away a two-night stay in a superior double room at a country manor house spa hotel complete with a 3-course meal on both nights, B&B, plus cream tea on your arrival day. If that wasn't enough to have you reaching for your robe and slippers, we're also throwing in £500 spending money to indulge yourselves during your stay.
intro-terms: >
  For full T&Cs read <a href="#modal-competition-terms" class="js-open-modal underline">here</a>

hotels:
  - id: resort
    title: An elegant spa & golf resort awaits!
    description: With wonderful wellness facilities and delicious dining, this is an idyllic spot for a little pre or post-holiday R&R! This elegant hotel is equipped with an 18-hole golf course and a leisure centre with heated indoor pool, Jacuzzi, sauna, steam room, gym and dance studio, plus three squash courts and three tennis courts.
  - id: money
    title: £500 to pamper you both!
    description: As well as the relaxing two-night break, we're also throwing in £500 spending money for you to really get the VIP-treatment during your stay. Book yourself a soothing massage, rejuvenating facial, or celebrate over a bottle of bubbly. We want you to feel truly spoiled!

competition-form:
  id: comp
  post-url: "#getform-url"
  expiry-date: 2050-01-01
  fields:
    - id: name
      type: text
      label: Name
      required: true
    - id: email
      type: email
      label: Email
      required: true
    - id: qualify
      type: radio
      label: Are you a UK resident and over the age of 18?
      required: true
      options:
        - id: qualify-true
          label: "Yes"
          value: "yes"
        - id: qualify-false
          label: "No"
          value: "no"
          invalid: true
    - id: opt-in
      type: radio
      label: Secret Escapes Limited would like to contact you about other offers, promotions and services that may interest you. Please indicate if you would like to receive our newsletter. For more information, you can consult our privacy and cookie policy.
      required: true
      options:
        - id: opt-in-true
          label: "Yes"
          value: "yes"
        - id: opt-in-false
          label: "No"
          value: "no"
  submit: Submit Entry
  terms: >
    If you send in your data, you also agree to our <a href="#modal-competition-terms" class="js-open-modal underline">terms and conditions</a> for the competition.
---
