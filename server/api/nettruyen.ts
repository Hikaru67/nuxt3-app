import type { IncomingMessage, ServerResponse } from 'http'
import * as cheerio from 'cheerio'


export default async (req: IncomingMessage, res: ServerResponse) => {

  const html = await $fetch('http://www.nettruyengo.com/')
  const $ = cheerio.load(String(html)) // load HTML
  console.log("data => $('.items-slide .item')", $('.items-slide .item').get())
  const data = $('.items-slide .item').map((index, el) => {
    return {
      link: $(el).find('.slide-caption a').attr('href'),
      title: $(el).find('.slide-caption a').attr('title'),
      image: $(el).find('img').attr('src'),
      time: $(el).find('.time').text(),
      chapter: 'Chapter' + $(el).find('.slide-caption a').text().split('Chapter')[1]
    }
  }).get()

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify((data)))
  res.end('')
}