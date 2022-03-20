'use strict'
const BaseValidator = use('App/Validators/BaseValidator')

class UserDetail extends BaseValidator {
    constructor() {
        super()
    }

    rules = {
        name: 'required',
        file: 'required'
    }
}

module.exports = UserDetail
