'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const moment = use('moment')

class ProductDetail extends Model {
    static get table() {
        return 'product_details'
    }

    static get primaryKey() {
        return 'id'
    }
}

module.exports = ProductDetail