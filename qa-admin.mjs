export default async function run(page, ui) {
  await page.goto('http://localhost:4173/admin')
  await page.evaluate(() => localStorage.clear())
  await page.reload()
  await page.waitForTimeout(800)

  const hasLogin = await page.locator('.login-modal').count()
  const hintText = await page.locator('.login-hint').count().catch(() => 0)
  const bodyText = await page.locator('body').innerText()

  // Login/parolni sinab ko'ramiz
  await page.locator('.login-modal input').first().fill('Timeparty11')
  await page.locator('.login-modal input').nth(1).fill('11233211')
  await page.locator('.login-modal .primary').click()
  await page.waitForTimeout(600)

  const adminVisible = await page.locator('.admin-content').count()

  return {
    loginModalShown: hasLogin,
    demoHintPresent: hintText,
    demoTextOnPage: bodyText.includes('Demo') || bodyText.includes('demo'),
    loggedInAdminVisible: adminVisible,
  }
}
