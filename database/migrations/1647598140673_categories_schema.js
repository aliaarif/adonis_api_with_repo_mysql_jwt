'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriesSchema extends Schema {
  up() {
    this.create('categories', (table) => {
      table.increments()
      table.string('name', 100)
      table.string('slug', 200).notNullable().unique()
      table.dateTime("created_by").defaultTo(null);
      table.dateTime("updated_by").defaultTo(null);
      table.dateTime("deleted_at").defaultTo(null);
      table.timestamps()
    })
  }

  down() {
    this.drop('categories')
  }
}

module.exports = CategoriesSchema
