'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostsSchema extends Schema {
  up() {
    this.create('posts', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      // table.foreign('user_id').references('id').on('users').onDelete('cascade')
      table.string('post_title', 200)
      table.string('post_slug', 200)
      table.string('post_body', 1000)
      table.timestamps()
    })
  }

  down() {
    this.drop('posts')
  }
}

module.exports = PostsSchema
