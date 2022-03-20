'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class OrderItem
 */
class OrderItem extends BaseModel {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'OrderItemHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * OrderItem's schema
   */
  static get schema () {
    return {

    }
  }

  //Link Model and collection, in case where model name mismatch collection name
  static get schemaOptions() {
    return { collection: 'OrderItems', };
  }
}

module.exports = OrderItem.buildModel('OrderItem')
