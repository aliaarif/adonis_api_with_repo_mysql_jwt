'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class Category
 */
class Category extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'CategoryHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Category's schema
   */
  static get schema() {
    return {

    }
  }

  //Link Model and collection, in case where model name mismatch collection name
  static get schemaOptions() {
    return { collection: 'categories', };
  }
}

module.exports = Category.buildModel('Category')
