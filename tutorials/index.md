---
layout: tutorials
permalink: /tutorials/
styles: |
    <link rel="stylesheet" type="text/css" href="/css/tutorials.css" />
---

<ul class="tutorials">
    {% for tutorial in site.tutorials reversed %}
    <li class="windowpane">
        <p><a class="link" href="{{ tutorial.url | prepend: site.baseurl }}">{{ tutorial.title }}</a></p>
        <p class="date">{{ tutorial.date | date: "%b %-d, %Y" }}</p>
    </li>
    {% endfor %}
</ul>
