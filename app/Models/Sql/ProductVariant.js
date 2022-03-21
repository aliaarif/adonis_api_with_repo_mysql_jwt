'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const moment = use('moment')

class ProductVariant extends Model {
    static get table() {
        return 'product_variants'
    }

    static get primaryKey() {
        return 'id'
    }
}

module.exports = ProductVariant