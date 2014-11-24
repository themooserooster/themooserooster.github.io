---
layout: experimentsindex
permalink: /experiments/
---

<div class="home">



<ul class="experiments">
{% for post in site.experiments %}
<li>
<span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
</li>
{% endfor %}
</ul>


</div>
