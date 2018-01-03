module.exports = {
    enterValue: (selector, input, browser) => {
        browser
            .clearValue(selector)
            .setValue(selector, input)
            .verify.value(selector, input)
    },
    /**
     * Enters the four fields for a user in the application
     * 
     * @fields array [] contains the selectors for entering the data in. Assumes keys named "nameField", "phoneField", "emailField" and "titleField"
     * @values array [] contains the data to be entered. Assumes keys named "name", "phone", "email" and "title"
     * @browser
     */
    enterEmployee: (fields, values, browser) => {
        browser
            .clearValue(fields.nameField)
            .setValue(fields.nameField, values.name)
            .verify.value(fields.nameField, values.name)
        browser
            .clearValue(fields.phoneField)
            .setValue(fields.phoneField, values.phone)
            .verify.value(fields.phoneField, values.phone)
        browser
            .clearValue(fields.emailField)
            .setValue(fields.emailField, values.email)
            .verify.value(fields.emailField, values.email)
        browser
            .clearValue(fields.titleField)
            .setValue(fields.titleField, values.title)
            .verify.value(fields.titleField, values.title)
    }
}