'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const moment = use('moment')

class Transaction extends Model {
    static get table() {
        return 'transactions'
    }

    static get primaryKey() {
        return 'id'
    }
}

module.exports = Transaction