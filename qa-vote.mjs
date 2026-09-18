export default async function run(page, ui) {
  await page.goto('http://localhost:4173/')
  await page.evaluate(() => localStorage.clear())
  await page.reload()
  await page.waitForTimeout(700)

  // Birinchi party'ga ovoz beramiz
  const first = page.locator('.party-card').first()
  const beforeVotes = await page.locator('.vote-count').innerText()
  await first.click()
  await page.waitForTimeout(700)
  const afterFirst = await page.locator('.vote-count').innerText()

  // Ikkinchi party'ga ham bosishga urinamiz (ovoz ketishi kerak emas)
  const second = page.locator('.party-card').nth(1)
  const secondDisabled = await second.isDisabled()
  let clickedSecond = false
  if (!secondDisabled) { try { await second.click({ timeout: 3000 }); clickedSecond = true } catch { } }
  await page.waitForTimeout(500)
  const afterSecond = await page.locator('.vote-count').innerText()

  // React state tekshiruvi: voted localStorage
  const votedFlag = await page.evaluate(() => localStorage.getItem('time-school-voted'))
  const cardsDisabled = await page.locator('.party-card[disabled]').count()
  const totalCards = await page.locator('.party-card').count()

  return { beforeVotes, afterFirst, afterSecond, secondDisabled, clickedSecond, noDoubleVote: afterFirst === afterSecond, votedFlag, cardsDisabled, totalCards }
}
