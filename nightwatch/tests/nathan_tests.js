const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')
const functions = require('../test_data/functions')

module.exports = {
    before: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    
    'I can create a new employee, save their information and have their name be updated on the employee list': browser => {
        browser.click(selectors.buttons.addEmployee)
        functions.enterEmployee(selectors.cardInfo, data.newData, browser)
        // click Add Employee and enter valid information from the the new employee data
        browser
        .click(selectors.buttons.saveButton)
        .pause(100)
        // click save and wait for response
        browser.expect.element(selectors.employees.newEmployee).text.to.contain(data.newData.name)
        // verify the employee name is updated and included in the employee list
    },
    'I can delete an employee and verify their name is no longer in the employee list': browser => {
        browser
        .click(selectors.employees.eveSparks)
        .pause(100)
        .click(selectors.buttons.deleteButton)
        .pause(100)
        // select the employee Eve Sparks and click the delete button
        .acceptAlert()
        .pause(100)
        // accept the alert that pops up in the window and wait
        browser.expect.element(selectors.employees.eveSparks).to.not.be.present
        // verify that Eve Sparks is not included in the employee list

    }
}