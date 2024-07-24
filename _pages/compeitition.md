---
layout: competition
id: competition
title: Gewinnen Sie eine Wellnessauszeit und 500&nbsp;€
permalink: /competition/
nav: true
nav-order: 5
nav-title: Gewinnspiel
header-content: >
  <div class="mx-auto max-w-screen-2xl">
    <h1 class="h--comp">
      {{page.title}}
    </h1>
  </div>

intro: >
  Wie wäre es mit einer wohlverdienten Auszeit im idyllischen Norden Hessens? Wir verlosen zwei Übernachtungen im charmanten Romantik Hotel Stryckhaus, inklusive Frühstück und täglichem Zugang zum Spa-Bereich. Aber das ist noch nicht alles: Zusätzlich schenken wir Ihnen 500 € Taschengeld, damit Sie sich während Ihres Aufenthalts rundum verwöhnen lassen können – sei es mit entspannenden Wellnessanwendungen oder kulinarischen Genüssen im hoteleigenen Restaurant. Machen Sie mit für Ihre Chance auf unvergessliche Momente im Hochsauerland.
intro-terms: >
  Die Allgemeinen Geschäftsbedingungen finden Sie <a href="#modal-competition-terms" class="js-open-modal underline">hier</a>.

hotels:
  - id: resort
    title: Exklusive Entspannung
    description: Versetzen Sie sich in Urlaubsstimmung in diesem gemütlichen Hotel, dessen großzügiger Spa-Bereich zum Relaxen einlädt. Eine finnische Sauna, eine Dampfsauna, ein Kneippbecken, eine Kräuterdampfgrotte und ein Solebad machen das Romantik Hotel Stryckhaus zu einer wahren Oase der Erholung.
  - id: money
    title: 500 € Taschengeld
    description: Zusätzlich schenken wir Ihnen 500 € Taschengeld, damit Sie sich während Ihres Aufenthalts wie ein Star fühlen können. Genießen Sie eine wohltuende Massage, eine belebende Gesichtsbehandlung oder ein exquisites 3-Gänge-Menü. Lassen Sie sich von Kopf bis Fuß verwöhnen und erleben Sie Luxus pur!

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
      label: Sind Sie ansässig in Deutschland/Österreich und über 18 Jahre alt?
      required: true
      options:
        - id: qualify-true
          label: "Ja"
          value: "yes"
        - id: qualify-false
          label: "Nein"
          value: "no"
          invalid: true
    - id: opt-in
      type: radio
      label: Secret Escapes Limited würde Sie gerne über andere Angebote, Aktionen und Dienstleistungen informieren, die Sie interessieren könnten. Bitte geben Sie an, falls Sie unseren Newsletter erhalten möchten. Für weitere Informationen können Sie unsere Datenschutz- und Cookie-Richtlinie konsultieren.
      required: true
      options:
        - id: opt-in-true
          label: "Ja"
          value: "yes"
        - id: opt-in-false
          label: "Nein"
          value: "no"
  submit: Absenden
  terms: >
    Wenn Sie Ihre Daten einsenden, erklären Sie sich gleichzeitig mit unseren <a href="#modal-competition-terms" class="js-open-modal underline">AGB zum Gewinnspiel</a> einverstanden
---
