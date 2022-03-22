'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments()
      table.string('name', 100)
      table.string('email', 200).notNullable().unique()
      table.string('username', 100).notNullable().unique()
      table.string('password', 100).notNullable()
      table.dateTime("verified_at").defaultTo(null);
      table.dateTime("deleted_at").defaultTo(null);
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
