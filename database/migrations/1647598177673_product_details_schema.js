'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductDetailsSchema extends Schema {
  up() {
    this.create('product_details', (table) => {
      table.increments()
      table.integer('product_id').unsigned()
      table.timestamps()
    })
  }

  down() {
    this.drop('product_details')
  }
}

module.exports = ProductDetailsSchema
