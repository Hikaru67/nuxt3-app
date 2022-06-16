import type { IncomingMessage, ServerResponse } from 'http'
import * as cheerio from 'cheerio'
import puppeteer from 'puppeteer'


export default async (req: IncomingMessage, res: ServerResponse) => {

  const DATE_APPLY = 'Hiệu lực từ'
  const GIAM_PT = /[0-9,]{0,2}%/g
  const GIAM_MAX = /tối đa [0-9,]*[ kK]/
  const EXP = /(Hạn sử dụng|HSD|HSD:).([0-9\/:\-, phút])*\./g
  const FROM = 'cho đơn hàng'
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage()
  await page.goto('https://magiamgiashopee.vn/')

  // Chạy đoạn JavaScript trong hàm này, đưa kết quả vào biến article
  let data = await page.evaluate(() => {
    var vouchers = new Array()
    const shopee = document.querySelectorAll('#shopee .cps-voucher-duration')

    shopee.forEach(item => {
      vouchers.push({
        'code': item.querySelector('.cps-btn-get-voucher')!.getAttribute('data-code'),
        'detail': item.querySelector('.cps-tooltiptext')!.textContent,
        'date': item.querySelector('span')!.textContent
      })
    })
    return vouchers
  });

  //Đóng trình duyệt
  await browser.close();
  data = data.map(item => {
    return {
      'code': item.code,
      'type': item.detail.search('giảm') >= 0 ? 'GIẢM' : 'HOÀN',
      'how': item.detail.search('%') >= 0 ? item.detail.match(GIAM_PT)[0] : item.detail.search('%'),
      'max': item.detail.match(GIAM_MAX) && item.detail.match(GIAM_MAX).length > 0 ? item.detail.match(GIAM_MAX)[0] : null,
      'from': item.detail.search(FROM) >= 0 ? item.detail.substr(item.detail.search(FROM), item.detail.search(/(Shopee|App)/g)).match(/[0-9]{1,9}[ đkK]/g)[0] : null,
      'time_apply': item.date.search(DATE_APPLY) >= 0 ? item.date : (item.detail.search(DATE_APPLY) >= 0 ?  item.detail.substr(item.detail.search(DATE_APPLY) - DATE_APPLY.length, item.detail.length) : item.date),
      'exp': item.detail.search(EXP) >= 0 ? item.detail.match(EXP)[0] : null
    }
  })

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify((data.sort())))
  res.end('')
}