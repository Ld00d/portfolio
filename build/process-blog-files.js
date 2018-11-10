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

const files = {}

fs.readdirSync('blog/')
  .filter(f => f.endsWith('.md'))
  .forEach(f => {
    const fNmNoExt = f.substring(0, f.length - 3)
    const fp = path.resolve('blog', f)
    const oFlNm = fNmNoExt + '.blog.html'
    const op = path.resolve('static/blog', oFlNm)
    console.log(chalk.cyan(`  Processing file ${fp}`))
    const text = fs.readFileSync(fp, 'utf-8')
    const html = md.render(text)
    console.log(chalk.cyan(`  Writing file ${op}`))
    fs.writeFileSync(op, html)
    console.log(chalk.cyan('  Adding metadata'));

    var title = fNmNoExt //default to name
    const hashIdx = text.indexOf('#')
    if (hashIdx > -1) {
      const nlIdx = text.indexOf('\n', hashIdx)
      title = text.substring(hashIdx + 1, nlIdx).trim()
    }

    console.log(chalk.cyan(`  Titled: ${title}`))

    const stat = fs.statSync(fp)

    const birthtime = stat.birthtime

    const metadata = {
      'title': title,
      'createdDate': birthtime,
      'fileName': oFlNm
    }

    files[title] = metadata


  })

const mp = path.resolve('static/blog', 'metadata.json')

console.log(chalk.cyan(`  Writing metadata file ${mp}`))

fs.writeFileSync(mp, JSON.stringify(files))

