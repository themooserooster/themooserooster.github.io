---
layout: experimentsindex
title: Experiments
permalink: /experiments/
---

<ul class="experiments">
    {% for experiment in site.experiments reversed %}
    <li>
        <span class="experiment-date">{{ experiment.date | date: "%b %-d, %Y" }}</span>
        <a class="experiment-link" href="{{ experiment.url | prepend: site.baseurl }}">{{ experiment.title }}</a>
    </li>
    {% endfor %}
</ul>
