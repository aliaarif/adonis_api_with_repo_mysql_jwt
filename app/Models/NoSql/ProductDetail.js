'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class ProductDetail
 */
class ProductDetail extends BaseModel {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'ProductDetailHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * ProductDetail's schema
   */
  static get schema () {
    return {

    }
  }

  //Link Model and collection, in case where model name mismatch collection name
  static get schemaOptions() {
    return { collection: 'ProductDetails', };
  }
}

module.exports = ProductDetail.buildModel('ProductDetail')
