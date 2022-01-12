module.exports = /** @type {TimelapseProjectConfig} */ ({
  async run({ page, capture }) {
    await page.setViewport({ width: 1280, height: 2000 })

    await page.goto('https://www.ronnapat.com/')
    await capture(page, 'home')
  },
})
