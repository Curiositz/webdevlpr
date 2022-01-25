---
title: 8 Ways To Drastically Boost Your Developer Productivity
date: 2022-01-09T20:31:42.452Z
author: Marihanna Brandley
summary: These eight productivity tips will supercharge your productivity as a
  developer. You’ll save hours of time which you can then invest in other
  activities.
tags:
  - post
  - css
  - productivity
  - development
  - problem-solving
---
<!--StartFragment-->


You could be writing a back end API, share a public URL for that and then do live <em>debugging</em> as the React front end developer you are collaborating with sends a request from their application to your API.

Why not do live debugging while webhook providers send you webhook requests, instead of spending hours reading their (often not so great) documentation?

If you are on Linux, run this to install `expose`

``` bash
curl -s https://expose.sh/sh/install-linux.sh | sudo bash
```

If you are on a Mac, run

``` bash
curl -s https://expose.sh/sh/install-mac.sh --output install-mac.sh && sudo bash install-mac.sh
```

For every change, it takes 36 seconds before you can get feedback and try out your changes. This might not sound like a lot, but if you are doing this for every change this might happen 50 or more times per day. That’s 1800 seconds, or a half an hour that you could have spent doing other things.

Over a 5 day working week, this adds up to 2.5 hours of time lost. Over a typical working year, that’s 469800 seconds or 5.4 days of time lost that you could have spent doing other things. So by solving this problem, you’ll gain an extra week of productivity.

## Introduction

These eight productivity tips will supercharge your productivity as a developer. You’ll save hours of time which you can then invest in other activities.

This is not a complete list of everything you should be doing, but these things alone will drastically improve your productivity if you are not already doing them.

## How small amounts of time from repetitive tasks add up

Let's say you are writing code in an old Java monolith and your flow for every change you make looks something like this:

* Save the file (1 second)
* Build Project in IDE (5 seconds)
* Deploy application war file into old J2EE container (30 seconds)

For every change, it takes 36 seconds before you can get feedback and try out your changes. This might not sound like a lot, but if you are doing this for every change this might happen 50 or more times per day. That’s 1800 seconds, or a half an hour that you could have spent doing other things.

Over a 5 day working week, this adds up to 2.5 hours of time lost. Over a typical working year, that’s 469800 seconds or 5.4 days of time lost that you could have spent doing other things. So by solving this problem, you’ll gain an extra week of productivity.

Your average developer has a lot of repetitive tasks they could automate. If automating one repetitive task saves you 36 seconds and the equivalent of a working week per year, automating 5 similarly time-consuming tasks will get you back 5 weeks per year.

How would I solve this specific problem? Use a newer framework with Hot Reload support. Just save your file and the change is automatically compiled and deployed without the need to restart the container. Newer Java frameworks such as Spring Boot support this feature. We’ll go into more detail about Hot Reload later in the article.

## Automating repetitive tasks with scripts

If there is one thing that could boost your productivity the most, it's automating repetitive tasks with scripts. I highly recommend writing [Bash Scripts](https://linuxconfig.org/bash-scripting-tutorial-for-beginners) because it makes it easy to chain multiple commands together and these are the same commands you might frequently run on a day-to-day basis.

A lot of modern development is done on the command line with commands like `npm install`. There is IDE integration for some of these things, but I highly recommend learning and using the command line for one reason: It's scriptable. Generally, it's also faster to type a command than it is to point and click several times in your IDE to perform the same task.


* Back up my local database
* Dump the latest copy of the testing database and automatically import it to my local database. It calls the previous script to take a backup first, of course!
* Start and configure multiple interdependent microservices locally. It's a pain to do this manually but easy with a script.

## Use a real debugger instead of printing variables

Back when I was a mid-level engineer, learning how to use a debugger was one thing by itself that supercharged my productivity. I could do in a couple of hours work that might have taken me a day to do. Fixing bugs and building out features was much easier.

I’ve found debugging especially useful when exploring unfamiliar codebases that I didn’t write. You can easily see the results of even the most complex logic written in weird ways. It's much easier to reason out complex, convoluted logic when you can run it line by line and see how things change.

If you’ve ever used `console.log()` in JavaScript, `var_dump()` in PHP, `System.out.println()` in Java or a similar function in another language to print a value to the console so that you can see what's going on inside your code, you might know how tedious it can get if you are trying to debug something complex.

You print one value at a time and you generally need to write a new log statement for each value you want to see. If the value you are looking at changes, you need to log it again. Its a bit like poking around with a blindfold or in the dark. Lets not forget the possibility that you might accidentally commit your debug statements!.

<p class="tip right-tip" style="--span-row: 1;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

Enter the debugger: Set a breakpoint in your code then run your app. When your app reaches the line you set a breakpoint on, you’ll be able to see all variables in scope in the debug tab.

There is no more need to juggle lots of values in your working memory. With just one action, you can now see everything instead of just one value at a time.

I started with just debugging my own application code but as time went by and I became more experienced, I found I could get great insights by debugging framework and library code (such as the code for `express`). I was able to find answers to questions that weren’t even listed in the documentation for various frameworks and libraries, which were often incomplete or poorly written.

The debugger always tells you what these frameworks and libraries are really doing, regardless of the accuracy or completeness of their documentation. I often find it faster to debug a framework or library before I read their documentation — complex concepts can take lots of words to explain but a debugger can get you the answers quickly.

If you are using Node want to learn how to set up your debugger in vscode, see my other article [Supercharge Your Node Productivity With Debugging](https://dev.to/ciphercode/debug-a-nodejs-express-app-with-vscode-2bh2).

## Use the fuzzy finder

Many of us are still working with large monolithic codebases that sometimes have thousands of files.

How are you supposed to find, hidden in `/src/authentication/userTypes/Employee.js` amongst the thousands of `.js` files and hundreds of folders in your project? Manually go looking for the file through the directory tree? Ask another developer who is more familiar with the codebase?

Nope, just use the fuzzy finder! Type in `Employee.js` and you’ll have found your file in seconds.

Here’s how it works. In, press `Ctrl+P` and then type in the name of the file you are looking for. The result will appear instantly.

*The fuzzy finder in vscode*

![](https://miro.medium.com/max/700/0*cJFQVuXOoB13ezB9.png)

If you are using IntelliJ or WebStorm, press `shift` twice quickly (aka double shift) instead of pressing `Alt+P`.

## Use Hot Reload and autosave

If you are writing code for a web application or service and you are not using PHP (which has the benefits of hot reload built in), you probably need to do one or more of the following for every change you make to your code

* Make your change
* Save file
* Compile code (for compiled languages)
* Restart server
* For some environments, re deploy your code and wait for it to be deployed
* Test your code
* Repeat

Maybe this takes you 30 seconds to a minute each time, but remember this adds up to days and weeks over time.

With hot reload and autosave, you can reduce this to

* Make your change
* Your IDE automatically saves your file
* In the background, the change is automatically detected and compiled (if needed) and your running server is either restarted or updated with the new code, typically in less than 5 seconds
* Test your code
* Repeat

In Java, Hot Reload is often referred to as [Hot Swapping](https://docs.spring.io/spring-boot/docs/2.0.x/reference/html/howto-hotswapping.html). For Node you can use [nodemon](https://www.npmjs.com/package/nodemon) and point it at your entry point script.

I have more detailed instructions on setting up `nodemon` for Node in my other article [Six Ways](https://dev.to/robbiecahill/six-ways-to-drastically-boost-your-productivity-as-a-node-developer-1mjd) To Drastically Boost Your Productivity As A Node developer.

Most IDEs have an auto save feature. In vscode, its as simple as selecting `File > Auto Save`. Check your IDEs documentation for how to enable it.

If you are afraid of autosave saving mistakes, you should be using source control like `git` and regularly commit your code. Then you can quickly revert back to working versions of your code.

## Automate your testing

Manual testing is one of the most time consuming and least enjoyable tasks your average developer does as a part of their work.

Back when developers followed the old clunky SDLC model (Now mostly replaced by Agile) it was often said testing takes the around same amount of time as the “analysis” and code writing phases combined.

You might make a one line change that is high impact, then you need to spend hours testing it.

There are different types of automated tests, from browser tests that can point and click through an application like a real user, to unit tests. How to write each type would take another whole guide (let me know in the comments below if I should write one?). All types of automated testing are faster than manual testing.

Even for the slowest common type of automated test (browser tests) you can sit back and watch the test run, then go off and grab a coffee or do something productive.

There are some cases where manual testing is unavoidable, but if you find yourself testing the same thing repeatedly consider writing an automated test to save your time.

## Share your work early with a public URL

Did you know you can get a public URL for a Node application being served from `localhost` or `127.0.0.1` on your local machine, even if its behind a firewall or corporate network? It doesn’t require any networking config and you can do it in a single command with `expose`, for example `expose 80 as myapi.expose.sh`.

This lets you share your work early with your collaborators — such as other engineers, customers or product managers and get fast feedback without needing to set up a full deployment pipeline. The earlier you share your work the less rework you’ll need to do in the long run.

For Windows head over to the [Installation Page](https://expose.sh/install/) and download the `exe` file.

Then you can run `expose <port>` where `<port>` is the port number your app is running on (for example, `expose 80`). More detailed instructions are available in the [Documentation](https://expose.sh/docs/).

## Use Vimium and test your web applications without a mouse

Sometimes, manual testing is unavoidable. Its well known that the keyboard is faster than the mouse. Normally, web browsing including testing web applications requires you to use your mouse. But not anymore!

Enter [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb?hl=en). its a an extension available for Chrome and Firefox which allows you to use websites and web apps using your keyboard.

This means you can do different types of manual testing (such as placing an order) entirely with the keyboard and without any mouse input, saving you time.

## How to be a 10x developer

The 10x developer theory is that the best developers are 10x more productive than the worst developers.

These tips can boost your productivity a lot but on their own won’t necessarily make you a 10x developer.

Sharing these tips around with other developers you work with could potentially make you a 10x developer. This is because you won’t be just improving your own productivity, but possibly the productivity of your entire team or even your whole engineering department if you work in a bigger company.

Depending on how many manual tasks are automated across a team it might be the equivalent of an extra team member or two in productivity gains.

Feel free to use this article as material for Lighting Talks or Lunch & Learns.

## Conclusion

This isn’t a complete list of things you can do to increase your developer productivity but it's a good starting point.

These simple things can save you hours of unnecessary work which over time can add up to days and weeks.

If you found this article useful, please consider sharing it to help others.

## Further reading

If you’d like more productivity tips specific to NodeJS and JavaScript, see my other article [Six Ways](https://dev.to/robbiecahill/.six-ways-to-drastically-boost-your-productivity-as-a-node-developer-1mjd) To Drastically Boost Your Productivity As A Node developer.

For NodeJS specific debugging instructions, read [Supercharge Your Node Productivity](https://expose.sh/blog/2021/11/17/learn-how-to-debug-node-express-with-vscode/) With Debugging.

<!--EndFragment-->