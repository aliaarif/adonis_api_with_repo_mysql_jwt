'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class UsersRole
 */
class UsersRole extends BaseModel {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'UsersRoleHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * UsersRole's schema
   */
  static get schema () {
    return {

    }
  }

  //Link Model and collection, in case where model name mismatch collection name
  static get schemaOptions() {
    return { collection: 'UsersRoles', };
  }
}

module.exports = UsersRole.buildModel('UsersRole')
