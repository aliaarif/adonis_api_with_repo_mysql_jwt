'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoryProductSchema extends Schema {
  up() {
    this.create('category_products', (table) => {
      table.increments()
    })
  }

  down() {
    this.drop('category_products')
  }
}

module.exports = CategoryProductSchema
