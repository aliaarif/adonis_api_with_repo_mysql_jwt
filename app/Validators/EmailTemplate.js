'use strict'
const BaseValidator = use('App/Validators/BaseValidator')

class EmailTemplate extends BaseValidator {
    constructor() {
        super()
    }

    rules = {
        name: 'required',
        file: 'required'
    }
}

module.exports = EmailTemplate
