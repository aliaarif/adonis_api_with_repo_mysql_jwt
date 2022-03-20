'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const moment = use('moment')

class OrderItem extends Model {
    static get table() {
        return 'order_items'
    }

    static get primaryKey() {
        return 'id'
    }
}

module.exports = OrderItem