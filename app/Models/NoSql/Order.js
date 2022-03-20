'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class Order
 */
class Order extends BaseModel {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'OrderHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Order's schema
   */
  static get schema () {
    return {

    }
  }

  //Link Model and collection, in case where model name mismatch collection name
  static get schemaOptions() {
    return { collection: 'Orders', };
  }
}

module.exports = Order.buildModel('Order')
