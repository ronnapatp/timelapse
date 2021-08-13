module.exports = /** @type {TimelapseProjectConfig} */ ({
  async run({ page, capture }) {
    await page.setViewport({ width: 1280, height: 720 })

    await page.goto('https://in-the-office-for.web.app/')
    await capture(page, 'home')
    await page.goto('https://in-the-office-for.web.app/us.html')
    await capture(page, 'us')
    await page.goto('https://in-the-office-for.web.app/canada.html')
    await capture(page, 'cannada')
    await page.goto('https://in-the-office-for.web.app/england.html')
    await capture(page, 'uk')
    await page.goto('https://in-the-office-for.web.app/japan.html')
    await capture(page, 'jp')
    await page.goto('https://in-the-office-for.web.app/korea.html')
    await capture(page, 'kr')
  },
})
