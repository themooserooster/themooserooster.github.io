---
layout: tutorials
permalink: /tutorials/
styles: |
    <link rel="stylesheet" type="text/css" href="/css/tutorials.css" />
---

<ul class="tutorials">
    {% for post in site.tutorials %}
    <li class="windowpane">
        <p><a class="link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></p>
        <p class="date">{{ post.date | date: "%b %-d, %Y" }}</p>
    </li>
    {% endfor %}
</ul>
