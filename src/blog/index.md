---
layout: base.njk
title: Blog
---

# Blog Posts

<ul class="post-list">
{%- for post in collections.post reversed -%}
  <li>
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <time datetime="{{ post.date }}" class="post-date">{{ post.date }}</time>
    {% if post.data.description %}
    <p>{{ post.data.description }}</p>
    {% endif %}
  </li>
{%- endfor -%}
</ul> 