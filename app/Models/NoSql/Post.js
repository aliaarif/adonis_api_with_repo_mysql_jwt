'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class Post
 */
class Post extends BaseModel {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'PostHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Post's schema
   */
  static get schema () {
    return {

    }
  }

  //Link Model and collection, in case where model name mismatch collection name
  static get schemaOptions() {
    return { collection: 'Posts', };
  }
}

module.exports = Post.buildModel('Post')
