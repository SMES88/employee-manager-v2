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
        browser
            .click(selectors.buttons.saveButton)
            .pause(100)
            .click(selectors.employees.berniceOrtiz)
            .click(selectors.employees.phillipWeaver)
            .expect.element(selectors.cardInfo.nameField).to.have.value.that.equals(data.validData.name)
    },
    'Invalid info can not be saved (Jira issue: EM1-23)': browser => {
        browser
            .click(selectors.employees.phillipWeaver)
            .pause(100)
        functions.enterValue(selectors.cardInfo.nameField, data.invalidData.name, browser)
        functions.enterValue(selectors.cardInfo.phoneField, data.invalidData.phone, browser)
        functions.enterValue(selectors.cardInfo.emailField, data.invalidData.email, browser)
        functions.enterValue(selectors.cardInfo.titleField, data.invalidData.title, browser)
        browser
            .click(selectors.buttons.saveButton)
            .pause(100)
            .acceptAlert()
    },
    'Search function filters employee names (Jira issues: EM1-20 & 21)': browser => {
        //searches valid name and only expects that name to show up in the list. Only works after name is changed to Phillip Beaver
        functions.enterValue(selectors.other.searchBox, data.invalidData.name, browser)
        browser
            .pause(100)
        browser.expect.element(selectors.employees.phillipWeaver).text.to.contain(data.invalidData.name)
        browser.expect.element(selectors.buttons.addEmployee).to.be.present;
        browser.expect.element(selectors.employees.berniceOrtiz).to.not.to.be.present;
        browser.expect.element(selectors.employees.marnieBarnett).to.not.to.be.present;
        browser.expect.element(selectors.employees.teresaOsborne).to.not.to.be.present;
        browser.expect.element(selectors.employees.dollieBerry).to.not.to.be.present;
        browser.expect.element(selectors.employees.harrietWilliamson).to.not.to.be.present;
        browser.expect.element(selectors.employees.rubyEstrada).to.not.to.be.present;
        browser.expect.element(selectors.employees.louWhite).to.not.to.be.present;
        browser.expect.element(selectors.employees.eveSparks).to.not.to.be.present;
        browser.expect.element(selectors.employees.loisBrewer).to.not.to.be.present;
        browser
            .click(selectors.buttons.clearButton)
            .pause(100)
        //after clearing, we expect all of the names to be present again.
        browser.expect.element(selectors.employees.berniceOrtiz).to.be.present;
        browser.expect.element(selectors.employees.marnieBarnett).to.be.present;
        browser.expect.element(selectors.employees.phillipWeaver).to.be.present;
        browser.expect.element(selectors.employees.teresaOsborne).to.be.present;
        browser.expect.element(selectors.employees.dollieBerry).to.be.present;
        browser.expect.element(selectors.employees.harrietWilliamson).to.be.present;
        browser.expect.element(selectors.employees.rubyEstrada).to.be.present;
        browser.expect.element(selectors.employees.louWhite).to.be.present;
        browser.expect.element(selectors.employees.eveSparks).to.be.present;
        browser.expect.element(selectors.employees.loisBrewer).to.be.present;
        browser.expect.element(selectors.buttons.addEmployee).to.be.present;
        //This enters random invalid information and confirms no names are present besides the add employee button.
        functions.enterValue(selectors.other.searchBox, data.invalidData.phone, browser)
        browser.expect.element(selectors.employees.berniceOrtiz).to.not.to.be.present;
        browser.expect.element(selectors.employees.marnieBarnett).to.not.to.be.present;
        browser.expect.element(selectors.employees.phillipWeaver).to.not.be.present;
        browser.expect.element(selectors.employees.teresaOsborne).to.not.to.be.present;
        browser.expect.element(selectors.employees.dollieBerry).to.not.to.be.present;
        browser.expect.element(selectors.employees.harrietWilliamson).to.not.to.be.present;
        browser.expect.element(selectors.employees.rubyEstrada).to.not.to.be.present;
        browser.expect.element(selectors.employees.louWhite).to.not.to.be.present;
        browser.expect.element(selectors.employees.eveSparks).to.not.to.be.present;
        browser.expect.element(selectors.employees.loisBrewer).to.not.to.be.present;
        browser.expect.element(selectors.buttons.addEmployee).to.be.present;
        browser
            .click(selectors.buttons.clearButton)
            .pause(100)
    },
    'I can create a new employee, save their information and have their name be updated on the employee list (Jira issue: EM1-19)': browser => {
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
    'Testing the cancel button EM1-17': browser => {
        browser
            .click(selectors.employees.phillipWeaver)
        functions.enterEmployee(selectors.cardInfo, data.dummyData, browser)
        browser
            .click(selectors.buttons.cancelButton)
        browser.expect.element(selectors.cardInfo.nameField).to.have.value.that.equals(data.invalidData.name)
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
        browser.expect.element(selectors.cardInfo.nameField).to.have.value.that.equals(data.invalidData.name)
        browser.expect.element(selectors.cardInfo.phoneField).to.have.value.that.equals(data.validData.phone)
        browser.expect.element(selectors.cardInfo.emailField).to.have.value.that.equals(data.validData.email)
        browser.expect.element(selectors.cardInfo.titleField).to.have.value.that.equals(data.validData.title)
    },
    'I can delete an employee and verify their name is no longer in the employee list (Jira issue: EM1-22)': browser => {
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