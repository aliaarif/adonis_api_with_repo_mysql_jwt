'use strict'

const Schema = use('Schema')

class PermissionsSchema extends Schema {
  up() {
    this.create('permissions', table => {
      table.increments()
      table.string('name').notNullable().unique()
      table.string('slug').notNullable().unique()
      table.text('description').nullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('permissions')
  }
}

module.exports = PermissionsSchema
