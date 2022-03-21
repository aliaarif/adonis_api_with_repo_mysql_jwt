'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductVariantsSchema extends Schema {
  up() {
    this.create('product_variants', (table) => {
      table.increments()
      table.integer('product_id').unsigned()
      table.timestamps()
    })
  }

  down() {
    this.drop('product_variants')
  }
}

module.exports = ProductVariantsSchema
