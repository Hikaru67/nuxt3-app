import type { IncomingMessage, ServerResponse } from 'http'
import * as cheerio from 'cheerio'


export default async (req: IncomingMessage, res: ServerResponse) => {
  // const queryObject = url.parse(re q.url as string, true).query;
  // let data = { data: [{ data: "" }]}

  const html = await $fetch('https://blogtruyen.com')
  const $ = cheerio.load(String(html)) // load HTML
  const data = $('.list-mainpage .storyitem').map((index, el) => {
    return {
      link: $(el).find('a').attr('href'),
      title: $(el).find('a').attr('title'),
      image: $(el).find('a img').attr('src')
    }
  }).get()

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify((data)))
  res.end('')
}