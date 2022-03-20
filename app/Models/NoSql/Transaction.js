'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class Transaction
 */
class Transaction extends BaseModel {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'TransactionHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Transaction's schema
   */
  static get schema () {
    return {

    }
  }

  //Link Model and collection, in case where model name mismatch collection name
  static get schemaOptions() {
    return { collection: 'Transactions', };
  }
}

module.exports = Transaction.buildModel('Transaction')
