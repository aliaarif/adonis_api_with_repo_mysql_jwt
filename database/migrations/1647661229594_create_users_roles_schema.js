'use strict'

const Schema = use('Schema')

class UsersRolesSchema extends Schema {
  up() {
    this.create('users_roles', table => {
      table.increments()
      table.integer('user_id').unsigned()
      // table.foreign('user_id').references('id').on('users').onDelete('cascade')
      table.integer('role_id').unsigned()
      // table.foreign('role_id').references('id').on('roles').onDelete('cascade')
      table.timestamps()
    })
  }

  down() {
    this.drop('users_roles')
  }
}

module.exports = UsersRolesSchema
