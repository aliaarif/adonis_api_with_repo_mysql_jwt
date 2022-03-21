'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsCategoriesSchema extends Schema {
  up() {
    this.create('products_categories', (table) => {
      table.increments()
      table.integer('product_id').unsigned()
      // table.foreign('product_id').references('id').on('products').onDelete('cascade')
      table.integer('category_id').unsigned()
      // table.foreign('category_id').references('id').on('categories').onDelete('cascade')
      table.timestamps()
    })
  }

  down() {
    this.drop('products_categories')
  }
}

module.exports = ProductsCategoriesSchema
