+++
author = "hrcg"
title = "Setting up a new Web Development Environment"
date = "2022-03-18"
description = "This article is meant to guide you (& future me 🤷) into spinning up a working development environment as easily and as fast as possible."
tags = [
    "webdev",
    "setup",
    "tools",
]
categories = [
    "tutorials",
    "webdev",
]
series = ["tutorials"]
toc = true
aliases = ["web-dev-env"]
+++

This article is meant to guide you (& future me 🤷) into spinning up a working development environment as easily and as fast as possible.

<!--more-->

I recently installed a new HDD onto my machine. I wanted a fresh start, so I completely reinstalled my system. Then I cursed myself for not taking notes on the different elements that make up my development environment before doing so.

Setting up a new development environment is something that happens quite often in our industry, whether you are starting a new job and your employer provides you with a new machine to work on, or whether you are a beginner diving into the world that is <mark>Web development</mark>.

## Installing Node.js

If you plan to develop for the Web, you can't pass on JavaScript-based tools. Whether it be for frontend or for backend development, you will need to have node.js installed on your machine to be able to run most of the development tools available. With node.js we can run JavaScript in the back-end which allows us to test our applications locally.

**Verify Installation**

Open a command prompt (or PowerShell), and enter the following:

```js
node - v; // to verify node

npm - v; // to verify npm
```

## Configure Git

Normally, Git should already be installed on your machine. You can check this by running git --version. If not you can download and install it by clicking here

You can now enter your Git credentials (don't forget to replace ‘John Doe’ with the correct values):

```js
git config --global user.name "John Doe"

git config --global user.email johndoe@example.com
```

## The IDE

This is it. After all these steps copy-pasting commands into the Terminal and waiting for downloads to be completed, we are finally going to install the last piece of the puzzle – the IDE. This acronym stands for Integrated Development Environment. Basically, it’s a place to edit code files that has life-changing features like syntax highlighting and autocompletion, which will drastically improve your web developing quality of life.

There are a lot of IDEs to choose from, all of them with their own pros and cons. Since most of them are viable choices, it really comes down to personal preference. For me, VS CODE is the swiss knife of code editors and my IDE of choice.

![Web development environment.](https://github.githubassets.com/images/modules/site/codespaces/illo-vscode.png "<kbd><kbd>Web</kbd><kbd>Development</kbd><kbd>Environment</kbd></kbd>")

## <mark>Conclusion</mark>

I hope this guide was helpful and that it will allow you to speed up the process of setting up a new environment. This is, of course, not a comprehensive list of web development tools – I tried to mostly focus on the essentials.

**Thank you for reading and happy coding!**
