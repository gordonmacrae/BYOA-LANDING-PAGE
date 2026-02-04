# AI Side Hustle Guide - Your $1,000/Month Passive Income Website

A complete, ready-to-deploy affiliate marketing website in the AI/passive income niche. Built with 11ty (Eleventy) for fast, SEO-friendly static pages.

## What This Is

This is a fully-built niche website designed to generate passive income through:
- **Affiliate links** to AI tools (ChatGPT, Midjourney, Jasper, etc.)
- **Email list building** for future monetization
- **SEO content** to attract organic traffic

## Quick Start (5 Minutes)

### Step 1: Deploy to GitHub Pages (Free Hosting)

1. Fork this repository to your GitHub account
2. Go to **Settings > Pages**
3. Set Source to "Deploy from a branch"
4. Select `main` branch and `/docs` folder
5. Click Save

Your site will be live at `https://YOUR-USERNAME.github.io/BYOA-LANDING-PAGE/` within minutes.

### Step 2: Customize Your Site

Edit these files to personalize:

```
src/
├── index.md          # Homepage
├── about.md          # About page (add your story)
├── _layouts/base.njk # Change site name, add tracking codes
└── blog/             # Add more articles
```

### Step 3: Set Up Monetization (See Below)

---

## How to Make $1,000/Month with This Site

### Revenue Stream 1: Affiliate Programs ($500-$2,000/month potential)

Sign up for these affiliate programs and replace the links in `/src/tools/index.md`:

#### AI Writing Tools
| Tool | Commission | Sign Up Link |
|------|-----------|--------------|
| Jasper AI | 30% recurring | jasper.ai/partners |
| Copy.ai | 30% recurring | copy.ai/affiliates |
| Writesonic | 30% recurring | writesonic.com/affiliates |

#### AI Image Tools
| Tool | Commission | Sign Up Link |
|------|-----------|--------------|
| Midjourney | Check Discord | midjourney.com |
| Leonardo AI | Varies | leonardo.ai/affiliates |
| Canva | Varies | canva.com/affiliates |

#### Platforms
| Platform | Commission | Sign Up Link |
|----------|-----------|--------------|
| Fiverr | $15-$150/CPA | affiliates.fiverr.com |
| Upwork | Varies | upwork.com/affiliates |
| Gumroad | 10% revenue share | gumroad.com/features/affiliates |

#### Other High-Commission Programs
| Tool | Commission | Sign Up Link |
|------|-----------|--------------|
| Teachable | 30% recurring | teachable.com/affiliates |
| ConvertKit | 30% recurring | convertkit.com/affiliates |
| Zapier | 30% recurring | zapier.com/partner |

**How to add your affiliate links:**

1. Sign up for each program
2. Get your unique affiliate link
3. Replace the placeholder links in `src/tools/index.md`
4. Rebuild the site: `npm run build`

### Revenue Stream 2: Email List ($300-$1,000/month potential)

The site includes email capture forms. Set up with a free service:

#### Option A: Formspree (Easiest)
1. Go to formspree.io and create free account
2. Create a new form
3. Replace `YOUR_FORM_ID` in all form actions with your form ID

#### Option B: ConvertKit (More Features)
1. Sign up at convertkit.com (free up to 1,000 subscribers)
2. Create a form and get the embed code
3. Replace the form HTML in the templates

#### What to do with your email list:
- Send weekly AI tips (builds trust)
- Promote affiliate products
- Launch your own digital products
- Sell sponsorships once you have 1,000+ subscribers

### Revenue Stream 3: Digital Products ($200-$2,000/month potential)

Create and sell your own products:

1. **Prompt Packs** - Collections of AI prompts ($9-$29)
2. **Templates** - Notion, email, social media ($5-$19)
3. **Ebooks** - Deep dives on specific topics ($9-$29)
4. **Courses** - Video training ($47-$197)

Sell on Gumroad (free), Teachable, or add a shop to this site.

---

## Growing Your Traffic

### SEO (Long-term, 3-6 months to see results)

The site is already optimized for SEO. To improve:

1. **Add more blog posts** - Each post is a chance to rank
2. **Target specific keywords** - "how to make money with ChatGPT", "best AI tools for freelancers"
3. **Build backlinks** - Guest post on other sites, get mentioned in newsletters

### Social Media (Faster results)

1. **Twitter/X** - Share AI tips, link to your articles
2. **LinkedIn** - Perfect for AI business content
3. **Pinterest** - Create pins linking to blog posts
4. **Reddit** - Help people in AI subreddits (don't spam)

### Paid Traffic (If you have budget)

1. **Pinterest Ads** - Cheap, good for this niche
2. **Google Ads** - Target "make money with AI" keywords

---

## Customization Guide

### Changing the Site Name

Edit `src/_layouts/base.njk`:
```html
<a href="{{ '/' | url }}" class="logo">🤖 YOUR SITE NAME</a>
```

### Adding Google Analytics

Add before `</head>` in `src/_layouts/base.njk`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

### Adding New Blog Posts

Create a new file in `src/blog/`:
```markdown
---
layout: post.njk
title: Your Post Title
description: A brief description for SEO
date: 2024-03-25
tags: post
---

Your content here...
```

### Changing Colors

Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #6366f1;    /* Main brand color */
    --secondary-color: #10b981;  /* Accent color */
    /* ... */
}
```

---

## Technical Details

### Development

```bash
# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build
```

### File Structure

```
├── src/
│   ├── _layouts/      # Page templates
│   ├── blog/          # Blog posts
│   ├── tools/         # AI tools page
│   ├── start/         # Getting started guide
│   ├── index.md       # Homepage
│   ├── about.md       # About page
│   └── faq.md         # FAQ page
├── css/
│   └── style.css      # All styles
├── docs/              # Built site (deploy this)
└── .eleventy.js       # Build configuration
```

### Deployment Options

1. **GitHub Pages** (Free) - Included in this setup
2. **Netlify** (Free) - Connect repo, auto-deploys
3. **Vercel** (Free) - Connect repo, auto-deploys
4. **Cloudflare Pages** (Free) - Fast global CDN

---

## Realistic Income Timeline

| Month | Expected Income | Focus |
|-------|-----------------|-------|
| 1 | $0-$50 | Setup, first content, join affiliate programs |
| 2 | $50-$200 | More content, start social media |
| 3 | $200-$500 | SEO kicking in, email list growing |
| 4-6 | $500-$1,000 | Consistent traffic, multiple revenue streams |
| 6-12 | $1,000-$3,000 | Authority established, diversified income |

**Note:** These are realistic estimates, not guarantees. Results depend on effort and consistency.

---

## FAQ

**Do I need to know how to code?**
No. All you need to do is edit text files and replace links. The instructions above cover everything.

**How much does it cost to run?**
$0 if you use GitHub Pages. Optional: $10-$20/month for email service once you grow.

**Can I use a custom domain?**
Yes! Buy a domain ($10-$15/year) and configure it in GitHub Pages settings.

**How do I get help?**
Open an issue in this repository or check the 11ty documentation at 11ty.dev.

---

## License

This template is provided as-is for personal and commercial use. Attribution appreciated but not required.

Good luck with your AI side hustle! 🚀