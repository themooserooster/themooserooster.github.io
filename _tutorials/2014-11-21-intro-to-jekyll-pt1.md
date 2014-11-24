---
layout: tutorials
title: Intro to Jekyll - Part 1
date: 2014-11-21
---

Custom Jekyll Layouts - Part 1
==============================

Lesson plan for creating custom layouts with Jekyll

tags we'll use:

```html
<main><main>
<header></header>
<footer></footer>
<nav></nav>
<ul></ul>
<li></li>
<a></a>
<p>
```

Today we're going to writing a buch of stuff that looks like this:

```html
<someTagNameHere somevalue="something">Blah, blah, blah...</someTagNameHere>
```

These are _HTML Elements_

Anatomy of an HTML element:

```html
<a href="index.html" class="nav-link">Home</a>
```
HTML elements are defined by special sequences of text called _tags_.
Most HTML elements have an _opening tag_ and a _closing tag_. Opening tags mark
where an element begins, and closing tags mark where an element ends.

Elements come in _types_ which are defined by the opening and closing tags.
In our example above, in simplest form, our element would look like:

```html
<a></a>
```

<code>&lt;a&gt;</code> is our opening tag and <code>&lt;/a&gt;</code> is our
closing tag.

The element's type is 'a'. Just so you know, 'a' actually stands for
'anchor', so it's an anchor element. Anchor element are used to create _links_
to other pages, or other parts of the same page.

'href="index.html"' and 'class="nav-link"' parts are _attributes_. The go inside the opening tag and are
used to define certain ways we want the element to behave.

Just so you know, there are some elements that don't have closing tags. They are
just made of one tag and are written like this:

```html
<img src="kitty.gif"/>
<input type="text"/>
```


TODOS:

* Create testlayout page and register with Jekyll
* mkdir testlayout
* touch index.html
* register index.html with Jekyll by including "---" lines
* Use html5 snippet in c9 to create our page boilerplate
* replace funky title syntax with "Test Layout"
* get rid of "meta" and "body" floating words
* Create site 'header' and 'footer' elements
* Create 'h1' and 'nav' elements inside the header
* Put your name inside the 'h1' element
* create the 'nav' element below the 'h1' element0
* Create a 'ul' element within the 'nav' element for your links
* for each link, create an 'li' element with an 'a' element inside it.
* put the link text inside the 'a' tag
* Create stylesheet and hook it up to our test page
* touch main.css
* register with Jekyll by including "---" lines
* put link tag in head of index.html
* Make our footer always stay on the bottom of the page


Links:

<a href="http://html5doctor.com/nav-element/">Where and when to use the 'nav' element</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">MDN HTML Element reference<a/>
