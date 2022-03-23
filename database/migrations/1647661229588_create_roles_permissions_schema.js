'use strict'

const Schema = use('Schema')

class RolesPermissionsSchema extends Schema {
  up() {
    this.create('roles_permissions', table => {
      table.increments()
      table.integer('role_id').unsigned()
      // table.foreign('role_id').references('id').on('roles').onDelete('cascade')
      table.integer('permission_id').unsigned()
      // table.foreign('permission_id').references('id').on('permissions').onDelete('cascade')

      // table.integer('user_id').unsigned().index()
      // table.foreign('user_id').references('id').on('users').onDelete('cascade')
      // table.integer('permission_id').unsigned().index()
      // table.foreign('permission_id').references('id').on('permissions').onDelete('cascade')
      table.timestamps()
    })
  }

  down() {
    this.drop('roles_permissions')
  }
}

module.exports = RolesPermissionsSchema
