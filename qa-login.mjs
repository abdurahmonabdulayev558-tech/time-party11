// Brauzerda teacher login sinovi — aynan foydalanuvchi qilganidek
export default async function run(page, ui) {
  const R = {}

  await page.goto('http://localhost:5173/teacher')
  await page.evaluate(() => localStorage.clear())
  await page.goto('http://localhost:5173/teacher')
  await page.waitForSelector('.login-modal', { timeout: 10000 })

  // Loginni to'ldirib bosamiz
  await page.locator('.login-modal input').first().fill('jasur')
  await page.locator('.login-modal input[type=password]').fill('jasur2026')
  await page.locator('.login-modal .primary').click()
  await page.waitForTimeout(1500)

  const bodyText = await page.evaluate(() => document.body.innerText)
  R.errorShown = bodyText.includes('xato')
  R.panelOpened = bodyText.includes("O'QITUVCHI PANELI")
  R.text = bodyText.slice(0, 120)

  // To'g'ridan-to'g'ri brauzerdan API'ni chaqirib ko'ramiz (proxy ishlayaptimi?)
  R.apiViaProxy = await page.evaluate(async () => {
    try {
      const res = await fetch('/api/teachers/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login: 'jasur', password: 'jasur2026' }),
      })
      return 'status=' + res.status
    } catch (e) {
      return 'FETCH XATO: ' + e.message
    }
  })

  return R
}
