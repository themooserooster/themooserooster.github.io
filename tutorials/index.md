---
layout: default
title: About
permalink: /tutorials/
---

<div class="home">

<h1>//&nbsp;Tutorials</h1>

<ul class="tutorials">
{% for post in site.tutorials %}
<li>
<span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
</li>
{% endfor %}
</ul>

<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

</div>
