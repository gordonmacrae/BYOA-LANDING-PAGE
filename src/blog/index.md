---
layout: base.njk
title: AI Money-Making Blog - Guides and Tutorials
description: Free guides, tutorials, and strategies for making money with AI tools. Learn from real examples and actionable advice.
---

<section class="hero" style="padding: 3rem 2rem;">
    <h1>AI Side Hustle Blog</h1>
    <p class="subtitle">Free guides, tutorials, and strategies to help you earn more with AI.</p>
</section>

<section>
    <div class="container">

## Latest Articles

<div class="posts-grid">
{%- for post in collections.post reversed -%}
<div class="post-card">
    <div class="post-card-image">
        {%- if post.url contains "freelancing" -%}📝
        {%- elsif post.url contains "art" -%}🎨
        {%- elsif post.url contains "digital" -%}📚
        {%- elsif post.url contains "video" -%}🎬
        {%- else -%}💡
        {%- endif -%}
    </div>
    <div class="post-card-content">
        <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
        <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
        {% if post.data.description %}
        <p>{{ post.data.description }}</p>
        {% endif %}
    </div>
</div>
{%- endfor -%}
</div>

---

<div class="newsletter-box" style="margin-top: 3rem;">
    <h3>Get New Articles in Your Inbox</h3>
    <p>Join 5,000+ subscribers getting weekly AI side hustle tips and strategies.</p>
    <form class="newsletter-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
        <input type="email" name="email" placeholder="Enter your email" required>
        <button type="submit" class="btn btn-primary">Subscribe Free</button>
    </form>
</div>

</div>
</section>