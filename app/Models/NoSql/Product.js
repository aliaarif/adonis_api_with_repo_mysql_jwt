'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class Product
 */
class Product extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'ProductHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Product's schema
   */
  static get schema() {
    return {
      name: 'String',
      slug: 'String',
      description: 'String',
      price: 'Decimal',
      image: 'String',
      thumbnail: 'String',
      date_added: 'Date',
      category_id: 'String'
    }
  }

  //Link Model and collection, in case where model name mismatch collection name
  static get schemaOptions() {
    return { collection: 'products', };
  }
}

module.exports = Product.buildModel('Product')
