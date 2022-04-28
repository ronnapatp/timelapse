module.exports = /** @type {TimelapseProjectConfig} */ ({
  async run({ page, capture }) {
    await page.setViewport({ width: 1280, height: 720 })
    
    await page.goto('https://www.iqair.com/th-en/thailand/bangkok/yan-nawa')
    await capture(page, 'home')
  },
})
