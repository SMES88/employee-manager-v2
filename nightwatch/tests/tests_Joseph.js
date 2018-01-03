const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')
const functions = require('../test_data/functions')

module.exports = {
    before: browser => {
        browser.url('http://localhost:3000');
    },
    after: browser => {
        browser.end();
    },
    'Testing the functionality of the save button EM1-21': browser => {
        browser.click(selectors.employees.phillipWeaver)
        functions.enterEmployee(selectors.cardInfo, data.validData, browser);
        browser.click(selectors.buttons.saveButton)
            .click(selectors.employees.berniceOrtiz)
            .click(selectors.employees.phillipWeaver)
            .expect.element(selectors.cardInfo.nameField).to.have.value.that.equals(data.validData.name)
    },
    'Testing the cancel button EM1-17': browser => {
        browser
            .click(selectors.employees.phillipWeaver)
        functions.enterEmployee(selectors.cardInfo, data.dummyData, browser)
        browser
            .click(selectors.buttons.cancelButton)
        browser.expect.element(selectors.cardInfo.nameField).to.have.value.that.equals(data.validData.name)
        browser.expect.element(selectors.cardInfo.phoneField).to.have.value.that.equals(data.validData.phone)
        browser.expect.element(selectors.cardInfo.emailField).to.have.value.that.equals(data.validData.email)
        browser.expect.element(selectors.cardInfo.titleField).to.have.value.that.equals(data.validData.title)
    },
    'Testing clicking to another user EM1-18': browser => {
        browser
            .click(selectors.employees.phillipWeaver)
        functions.enterEmployee(selectors.cardInfo, data.dummyData, browser)
        browser
            .click(selectors.employees.berniceOrtiz)
            .click(selectors.employees.phillipWeaver)
        browser.expect.element(selectors.cardInfo.nameField).to.have.value.that.equals(data.validData.name)
        browser.expect.element(selectors.cardInfo.phoneField).to.have.value.that.equals(data.validData.phone)
        browser.expect.element(selectors.cardInfo.emailField).to.have.value.that.equals(data.validData.email)
        browser.expect.element(selectors.cardInfo.titleField).to.have.value.that.equals(data.validData.title)
    }

}