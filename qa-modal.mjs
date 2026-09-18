export default async function run(page, ui) {
  await page.goto('http://localhost:4173/')
  await page.evaluate(() => localStorage.clear())
  await page.reload()
  await page.waitForTimeout(600)

  // "O'zingiz taklif qiling" tugmasini bosamiz
  await page.locator('.suggest-card').click()
  await page.waitForTimeout(600)

  const backdrop = page.locator('.modal-backdrop')
  const blur = await backdrop.evaluate(el => getComputedStyle(el).backdropFilter || getComputedStyle(el).webkitBackdropFilter)
  const bg = await backdrop.evaluate(el => getComputedStyle(el).backgroundColor)
  const iconBg = await page.locator('.suggestion-modal .modal-icon').evaluate(el => getComputedStyle(el).backgroundColor)
  const iconColor = await page.locator('.suggestion-modal .modal-icon').evaluate(el => getComputedStyle(el).color)
  const visible = await backdrop.isVisible()

  await page.screenshot({ path: 'modal-shot.png' })

  return { backdropVisible: visible, backdropFilter: blur, backdropBg: bg, modalIconBg: iconBg, modalIconColor: iconColor }
}
