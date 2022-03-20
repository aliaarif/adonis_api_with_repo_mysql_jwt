'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class RRole
 */
class RRole extends BaseModel {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'RRoleHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * RRole's schema
   */
  static get schema () {
    return {

    }
  }

  //Link Model and collection, in case where model name mismatch collection name
  static get schemaOptions() {
    return { collection: 'RRoles', };
  }
}

module.exports = RRole.buildModel('RRole')
