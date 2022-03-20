'use strict'
const BaseValidator = use('App/Validators/BaseValidator')

class Product extends BaseValidator {
    constructor() {
        super()
    }

    rules = {
        name: 'required',
        slug: 'required'
    }
}

module.exports = Product
