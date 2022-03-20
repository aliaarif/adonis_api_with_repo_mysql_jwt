'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up() {
    this.create('products', (table) => {
      table.increments()
      table.dateTime("deleted_at").defaultTo(null);
      table.timestamps()
    })
  }

  down() {
    this.drop('products')
  }
}

module.exports = ProductsSchema
