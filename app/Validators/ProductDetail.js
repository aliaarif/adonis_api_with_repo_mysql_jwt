'use strict'
const BaseValidator = use('App/Validators/BaseValidator')

class ProductDetail extends BaseValidator {
    constructor() {
        super()
    }

    rules = {
        name: 'required',
        file: 'required'
    }
}

module.exports = ProductDetail
