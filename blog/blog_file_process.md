# Blog File Process

_This is a continuation post in a series of posts about how I made this site you're reading this on._

Background: I started off this part of the portfolio project with some lofty goals, but I decided to back it down a notch in interest of time. What I needed here was some way to translate Markdown .md files into HTML, but it needed to be repeatable so I could add files down the road.

In my last post (TODO: link to other post), I mentioned a library I could use to do this. [markdown-it](https://github.com/markdown-it/markdown-it "markdown-it") turned out to be a great tool for the job.

I created a new JavaScript file called `process-blog-files.js` and put it into the `build` folder.

I wanted to be able to run this as an npm script, so I added it to the `scripts` property in the `package.json` file:

```javascript
"scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "unit": "jest --config test/unit/jest.conf.js --coverage",
    "test": "npm run unit",
    "lint": "eslint --ext .js,.vue src test/unit",
    "build": "node build/build.js",
    "process-blog-files": "node build/process-blog-files.js"
  },
```

Now my script can run from the command line using `npm run process-blog-files`. The script is pretty simple. It starts by listing the files in `static/blog` and deleting those that end in `blog.html`. Then, it reads the `blog` folder, and converts all of the files that end with `.md`. It converts their contents to HTML, saves the result in a `title.blog.html` file, and gathers metadata. The metadata is saved at the end in a `metadata.json` file.

This script is separate from the rest of the build process so it can be run on its own, or the build can be run on its own, or the two can be joined by some other process.

So that wraps up the blog file process. Now I need a site to display them...
