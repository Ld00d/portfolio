# The Beginning

A while back, I made a resume site which was a super simple AngularJS single page application with a cheesy intro page, a resume page, and a links page. I was looking at updating the resume, but it seemed like a good idea to just redo the thing in a different framework like Vue. I'm using Vue in another side project, and I really like working with it. I like how it only tries to solve one problem, and then you can attach other libraries to do other things like manage state or make ajax calls to a service. I like how you can make a single .vue file that contains the html template, the component code, and locally scoped css. I like that it's in JavaScript.

It's a bit rediculous to use such a large framework just for building a resume page, but that's not the point here. The new site is also a demonstration. It's a fizzbuzz of sorts.

But then I thought "maybe this could be more than just a resume." What if I also made a simple blog engine that could take Markdown files and convert them to html using Vue? And that's why I'm writing this post.

Welcome to the first post of the blog.

The engine doesn't exist yet, but it's a good way to exercise and demonstrate a different skillset. Sure, I could just re-use some code that builds html out of Markdown, but, again, that's not the point.

It will be a little inefficient than using already built html files, but I'm going to do a Markdown to JSON translation first, and the JSON will be static files on the web server. So the runtime code won't be parsing Markdown, but it will have to translate JSON into a web page.

The result of this exercise will be two projects:

1. Translation code that takes a .md file and produces a .json file with an object that represents the post and its elements. I'm still working out what technology to use here, but it might be nice to have it runable as an npm build step.
2. The web site code that, takes the .json file I already have for the resume and turns it into a web page and displays my translated blog posts.

Another thing I'm going to try is developing on an iPad. If I do everything in JavaScript, I could use vim to write code on a remote machine. I have a bluetooth keyboard I can connect to it. I have a Ubuntu machine I could ssh into. There are a couple of options, but I want to see if an iPad can be used without a ton of pain to develop with.

Now I'm off to start the translation project.
