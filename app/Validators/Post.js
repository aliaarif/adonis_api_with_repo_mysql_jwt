'use strict'
const BaseValidator = use('App/Validators/BaseValidator')

class Post extends BaseValidator {
    constructor() {
        super()
    }

    rules = {
        name: 'required',
        file: 'required'
    }
}

module.exports = Post
