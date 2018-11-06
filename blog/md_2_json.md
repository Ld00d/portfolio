# md 2 json

This is a continuation post in a series of posts about how I made this site you're reading this on.

Part of my plan to build this portfolio web application is a parsing of Markdown into JSON so that the Vue code can translate the JSON into HTML. This will be kind of like having a REST service where the web application would GET posts from the server, but they will actually be files served over HTTP. I'm going to document my thought process for how I'm going to accomplish that.

One of the first considerations is where in the build or deployment process this would happen. Is this going to be a manual thing where I run something that converts a file? Is this part of an automated process? I'm pretty lazy, so I'm thinking an automatic process. Whatever technology I use to make this thing has to be something that can be automated.

I'm a pretty big fan of OS X, so whatever it is should run there, but I don't want to make a "Mac app", and I might want to run this on my Ubuntu server, so this thing has to be cross-platform.

I'm not trying to learn any new languages, so that limits me to Python, JavaScript, Java, and C#. I would like to be able to develop this remotely. That kind of rules out Java and C#. It's probably possible, but they're not ideal without a proper IDE. I do like Python a lot, but I think JavaScript is the winner here since the rest of the code for the overall project is JavaScript.


