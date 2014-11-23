---
layout: default
styles: |
    <link rel="stylesheet" type="text/css" href="/css/blog.css">
---

<div class="home">

  <h1>//&nbsp;Blog</h1>

  <ul class="posts">
    {% for post in site.posts %}
      <li class="windowpane">
        <p class="link"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></p>
        <p class="date">{{ post.date | date: "%b %-d, %Y" }}</p>

      </li>
    {% endfor %}
  </ul>

  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

</div>
