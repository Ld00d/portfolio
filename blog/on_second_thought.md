# On Second Thought

_This is a continuation post in a series of posts about how I made this site you're reading this on._

Ok, this is getting a bit unwieldy. What started as a fun project to make a portfolio has ballooned a bit. Markdown is more complicated than I thought. I looked at the original Perl code. I don't know Perl at all, but what it looks like is there are regular expressions it uses to find and replace matches with their HTML counterparts. What I had in mind for this project was more like a parser/compiler. Even if I just stick to the original true Markdown elements, they all have varying ways of being implemented, and require a lot of special handling. I could do this (I think), but not in the time frame I'm trying to stick to. I really want to be done over about 3 weekends, and I'm not feeling like I can if I try to re-invent this particular wheel.

Vue.js has a directive `v-html` that can be used to output plain old HTML. I can use pretty much any Markdown processor to convert .md files to .html. Looks like [markdown-it](https://github.com/markdown-it/markdown-it "markdown-it") is a pretty good tool for conversion. I'll just add a script that can be run by npm to convert the files and produce metadata.
