'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionsSchema extends Schema {
  up() {
    this.create('transactions', (table) => {
      table.increments()
    })
  }

  down() {
    this.drop('transactions')
  }
}

module.exports = TransactionsSchema
