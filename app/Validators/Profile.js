'use strict'
const BaseValidator = use('App/Validators/BaseValidator')

class Profile extends BaseValidator {
    constructor() {
        super()
    }

    rules = {
        name: 'required',
        file: 'required'
    }
}

module.exports = Profile
