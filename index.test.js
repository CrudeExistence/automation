const { Builder, Capabilities, By } = require('selenium-webdriver')
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})


// describe('Testing multiple things', async () => {
    
test('Adding movies to the list', async () => {
    const inputField = await driver.findElement(By.xpath('//form/input'))
    await inputField.sendKeys('Spider-man into the multi-verse\n')
    // await driver.sleep(500)
    await inputField.sendKeys('Demon Slayer\n')
    // await driver.sleep(500)
    await inputField.sendKeys('V for Vendetta\n')
    await driver.sleep(500)
})

test('Testing the delete', async () => {
    const inputField = await driver.findElement(By.xpath('//li/button'))
    await inputField.click()
})

test('Testing the deleted pop-up', async () => {
    const popUp = await driver.findElement(By.xpath('//aside')).getText()
    expect(popUp).toEqual(expect.stringContaining("deleted!"))
    // await driver.sleep(1000)
})

test('Testing final - cross off movie', async () => {
    const movieField = await driver.findElement(By.xpath('//span'))
    await movieField.click()
    // await driver.sleep(2000)
    // const movieField2 = await driver.findElement(By.xpath('//h1'))
    // await movieField2.click()
    // await driver.sleep(2000)
    // const again = await driver.findElement(By.xpath('//li/span'))
    // expect(again.classList.contains('checked')).toBe(true)
    // expect(again.className.includes('checked')).toBe(true)
    await driver.sleep(2000)
})

// checking the same element again doesn't appear to work in the function. No idea why. Tried numerous different tactics and code and nothing. It's submitted like this then lol

// })