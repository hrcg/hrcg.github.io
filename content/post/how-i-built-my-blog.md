+++
author = "hrcg"
title = "How I built my blog"
date = "2022-03-26"
description = "If you've been thinking about creating a 👨‍💻dev blog for yourself, you're mostly likely overwhelmed by the sheer number of tools and technologies available for such a simple thing."
tags = [
    "webdev",
    "blog",
    "tools",
]
categories = [
    "tutorials",
    "webdev",
]
series = ["tutorials"]
toc = true
aliases = ["web-dev-blog"]
+++

If you've been thinking about creating a 👨‍💻dev blog for yourself, you're mostly likely overwhelmed by the sheer number of tools and technologies available for such a simple thing.

<!--more-->

I've been very interested for a long time on creating my own writing space on the internet, it's something that I've wanted to do since I started my <mark>webdev</mark> journey.

## The Humble Beginnings

As of now there have been three versions of my blog, the first one was a simple <kbd>HTML/CSS/JS</kbd> site (yes I know), painstakingly writing my posts in HTML, having to make a new HTML file for every single new post, it got tiring very quickly.

## Powering up!

The second one I made using the <kbd>GatsbyJS</kbd> starter blog theme, which in my opinion was great, very customisable, pretty and suffice to say, very fast. But Gatsby took a toll on my poor old development laptop, so I had to again for the second time change.

## Finding the one

And here comes, <mark>Hugo!</mark> A great static site generator, customisable and incredibly easy to use. It uses Markdown to write your blog posts, same as Gatsby but unlike Gatsby, Hugo is very lightweight. There are a wide array of out-of-the-box themes for Hugo which can be used immediately for your blog, no hassle at all.

# Installation and Hosting

Since I'm programming with a Windows device I used [Chocolatey](https://chocolatey.org/) to install Hugo.

```
choco install hugo
```

Once Hugo is installed you create a new site by using the command

```
hugo new site blogname
```

# Picking a theme

Now before you can start you need to pick a theme. Hugo does not include a default theme for new sites.

There are a lot of choices on https://themes.gohugo.io. My personal recommendation is [the one I'm using for my own blog](https://github.com/qdzhang/hugo-notepadium-mod) but you can use whichever of the starter ones from the official Hugo site. There are details on how to install themes there.

# Starting writing

Writing a new blog post is very easy, in the content folder create a new markdown file (.md file extension) and name it whatever you like, ex. <kbd>your-blog-post-title.md</kbd>.

# Finishing off

<mark>config.toml</mark>

This is the Hugo configuration file, which tells Hugo some details of the configuration without you having to hardcode information in the theme.

Use this:

```
baseurl = "/"
title = "My blog"
theme = "ghostwriter"

[Params]
    mainSections = ["post"]
    intro = true
    headline = "My headline"
    description = "My description"
    github = "https://github.com/XXX"
    twitter = "https://twitter.com/XXX"
    email = "XXX@example.com"
    opengraph = true
    shareTwitter = true
    dateFormat = "Mon, Jan 2, 2006"

[Permalinks]
    post = "/:filename/"
```

You can freely customize the information in this file later.

Now open up your terminal, and enter

```
hugo server -D
```

this will create a local instance of your site, open up localhost:1313 to access it.

![Hugo Server Command](https://i.imgur.com/fhi0bCy.png "<kbd><kbd>hugo</kbd><kbd>server</kbd><kbd>output</kbd></kbd>")

# Hosting

This is very straightforward, use Github Pages! Yup, that easy, here's a simple [tutorial](https://gohugo.io/hosting-and-deployment/hosting-on-github/) on how to host your Hugo blog on Gh-pages, straight from the official Hugo site.

## <mark>Conclusion</mark>

I hope this tutorial can give you a little guidance if you are planning to start a new blog. Hugo is my favorite platform, but it's not unique of course. There are a ton of other technologies out there.

Pick your favorite. In my opinion the platform does not matter as much as your content does. So, choose one and start writing!
