// const selectors = require('../test_data/css_selectors')
// const data = require('../test_data/test_data')
// const functions = require('../test_data/functions')

// module.exports = {
//     before: browser => {
//         browser.url('http://localhost:3000')
//     },
//     after: browser => {
//         browser.end()
//     },
//     'Invalid info cant be saved (Jira issue: EM1-23)': browser => {
//         browser
//             .click(selectors.employees.phillipWeaver)
//             .pause(100)
//         functions.enterValue(selectors.cardInfo.nameField, data.invalidData.name, browser)
//         functions.enterValue(selectors.cardInfo.phoneField, data.invalidData.phone, browser)
//         functions.enterValue(selectors.cardInfo.emailField, data.invalidData.email, browser)
//         functions.enterValue(selectors.cardInfo.titleField, data.invalidData.title, browser)
//         browser
//             .click(selectors.buttons.saveButton)
//             .pause(100)
//             .acceptAlert()
//     },
//     'Search function filters employee names (Jira issues: EM1-20 & 21)': browser => {
//         //searches valid name and only expects that name to show up in the list. Only works after name is changed to Phillip Beaver
//         functions.enterValue(selectors.other.searchBox, data.validData.name, browser)
//         browser
//             .pause(2000)
//         browser.expect.element(selectors.employees.phillipWeaver).text.to.contain(data.validData.name)
//         browser.expect.element(selectors.buttons.addEmployee).to.be.present;
//         browser.expect.element(selectors.employees.berniceOrtiz).to.not.to.be.present;
//         browser.expect.element(selectors.employees.marnieBarnett).to.not.to.be.present;
//         browser.expect.element(selectors.employees.teresaOsborne).to.not.to.be.present;
//         browser.expect.element(selectors.employees.dollieBerry).to.not.to.be.present;
//         browser.expect.element(selectors.employees.harrietWilliamson).to.not.to.be.present;
//         browser.expect.element(selectors.employees.rubyEstrada).to.not.to.be.present;
//         browser.expect.element(selectors.employees.louWhite).to.not.to.be.present;
//         browser.expect.element(selectors.employees.eveSparks).to.not.to.be.present;
//         browser.expect.element(selectors.employees.loisBrewer).to.not.to.be.present;
//         browser
//             .click(selectors.buttons.clearButton)
//             .pause(100)
//         //after clearing, we expect all of the names to be present again.
//         browser.expect.element(selectors.employees.berniceOrtiz).to.be.present;
//         browser.expect.element(selectors.employees.marnieBarnett).to.be.present;
//         browser.expect.element(selectors.employees.phillipWeaver).to.be.present;
//         browser.expect.element(selectors.employees.teresaOsborne).to.be.present;
//         browser.expect.element(selectors.employees.dollieBerry).to.be.present;
//         browser.expect.element(selectors.employees.harrietWilliamson).to.be.present;
//         browser.expect.element(selectors.employees.rubyEstrada).to.be.present;
//         browser.expect.element(selectors.employees.louWhite).to.be.present;
//         browser.expect.element(selectors.employees.eveSparks).to.be.present;
//         browser.expect.element(selectors.employees.loisBrewer).to.be.present;
//         browser.expect.element(selectors.buttons.addEmployee).to.be.present;
//         //This enters random invalid information and confirms no names are present besides the add employee button.
//         functions.enterValue(selectors.other.searchBox, data.validData.phone, browser)
//         browser.expect.element(selectors.employees.berniceOrtiz).to.not.to.be.present;
//         browser.expect.element(selectors.employees.marnieBarnett).to.not.to.be.present;
//         browser.expect.element(selectors.employees.phillipWeaver).to.not.be.present;
//         browser.expect.element(selectors.employees.teresaOsborne).to.not.to.be.present;
//         browser.expect.element(selectors.employees.dollieBerry).to.not.to.be.present;
//         browser.expect.element(selectors.employees.harrietWilliamson).to.not.to.be.present;
//         browser.expect.element(selectors.employees.rubyEstrada).to.not.to.be.present;
//         browser.expect.element(selectors.employees.louWhite).to.not.to.be.present;
//         browser.expect.element(selectors.employees.eveSparks).to.not.to.be.present;
//         browser.expect.element(selectors.employees.loisBrewer).to.not.to.be.present;
//         browser.expect.element(selectors.buttons.addEmployee).to.be.present;
//         browser
//             .click(selectors.buttons.clearButton)
//             .pause(100)
//     }
// }
