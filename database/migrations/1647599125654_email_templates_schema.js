'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmailTemplatesSchema extends Schema {
  up() {
    this.create('email_templates', (table) => {
      table.increments()
      table.dateTime("deleted_at").defaultTo(null);
      table.timestamps()
    })
  }

  down() {
    this.drop('email_templates')
  }
}

module.exports = EmailTemplatesSchema
