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
//     'Invalid info cant be saved': browser => {
//         browser
//             .click(selectors.employees.phillipWeaver)
//             .pause(100)
//         functions.enterValue(selectors.cardInfo.nameField, data.invalidData.name)
//         functions.enterValue(selectors.cardInfo.phoneField, data.invalidData.phone)
//         functions.enterValue(selectors.cardInfo.emailField, data.invalidData.email)
//         functions.enterValue(selectors.cardInfo.titleField, data.invalidData.title)
//         browser
//             .click(selectors.buttons.saveButton)
//             .pause(100)
//         browser.expect.element()
//     },
//     'Search function filters employee names': browser => {
//         functions.enterValue(selectors.other.searchBox, data.validData.name)
//         browser.expect.element(selectors.employees.phillipWeaver).text.to.equal(data.validData.name)
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
//     }
// }