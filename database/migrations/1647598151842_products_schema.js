'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up() {
    this.create('products', (table) => {
      table.increments()
      table.integer('category_id').unsigned()
      table.string('title', 100)
      table.string('slug', 200).notNullable().unique()
      table.decimal('price', 6, 2)
      table.string('image', 200)
      table.string('thumbnail', 200)
      table.text('description', 1000)
      table.integer("created_by").defaultTo(null);
      table.integer("updated_by").defaultTo(null);
      table.dateTime("deleted_at").defaultTo(null);
      table.timestamps()
    })
  }

  down() {
    this.drop('products')
  }
}

module.exports = ProductsSchema
