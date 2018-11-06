'use strict'
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const md = require('markdown-it')()

fs.readdirSync('static/blog')
  .filter(f => f.endsWith('blog.html'))
  .forEach(f => {
    const fp = path.resolve('static/blog', f)
    console.log(chalk.cyan(`  Deleting file ${fp}`))
    fs.unlinkSync(fp)

  })


fs.readdirSync('blog/')
  .filter(f => f.endsWith('.md'))
  .forEach(f => {
    const fp = path.resolve('blog', f)
    const op = path.resolve('static/blog', f.substring(0, f.length - 3) + '.blog.html')
    console.log(chalk.cyan(`  Processing file ${fp}`))
    const text = fs.readFileSync(fp, 'utf-8')
    const html = md.render(text)
    console.log(chalk.cyan(`  Writing file ${op}`))
    fs.writeFileSync(op, html)

  })
