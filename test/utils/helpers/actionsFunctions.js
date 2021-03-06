const {wait} = require('./functions')


async function mauseClick(element) {
    await highlight(element);  // for Chrome only
    await browser.actions().mouseMove(element).mouseDown().mouseUp().perform();
}

async function scrollTo(element) {
    return await browser.executeScript("arguments[0].scrollIntoView();", element);
}

async function hover(element) {
    await wait(2);
    await highlight(element);  // for Chrome only
    return await browser.actions().mouseMove(element).perform();
}

async function pressENTER() {
    return await browser.actions().sendKeys(protractor.Key.ENTER).perform();
}

async function highlight(element) {
    let backgroundColor = await element.getCssValue("background-color");
    await browser.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", element);
    await browser.sleep(1000);
    await browser.executeScript("arguments[0].style.backgroundColor = '" + backgroundColor + "'", element);
}


module.exports = {mauseClick, scrollTo, hover, highlight, pressENTER};