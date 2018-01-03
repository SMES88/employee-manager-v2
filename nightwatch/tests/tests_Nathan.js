const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')
const functions = require('../test_data/test_functions')

module.exports = {
    before: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    'I can create a new employee, save their information and have the name be displayed on the employee list': browser => {
        browser
        .click(selectors.buttons.addEmployee)
        .pause(100)
    }
}