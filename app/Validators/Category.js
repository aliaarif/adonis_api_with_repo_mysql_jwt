'use strict'
const BaseValidator = use('App/Validators/BaseValidator')

class Category extends BaseValidator {
    constructor() {
        super()
    }

    rules = {
        name: 'required',
        file: 'required'
    }
}

module.exports = Category
