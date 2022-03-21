'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfilesSchema extends Schema {
  up() {
    this.create('profiles', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      table.integer('country').unsigned()
      table.timestamps()
    })
  }

  down() {
    this.drop('profiles')
  }
}

module.exports = ProfilesSchema
