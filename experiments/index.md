---
layout: default
permalink: /experiments/
---

<div class="home">

<h1>//&nbsp;Experiments</h1>

<ul class="experiments">
{% for post in site.experiments %}
<li>
<span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
</li>
{% endfor %}
</ul>

<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

</div>
