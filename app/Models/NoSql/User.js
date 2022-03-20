'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class User
 */
class User extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'UserHook.method')
    // Indexes:
    // this.index({}, {background: true})

    //this.addHook('beforeCreate', 'User.hashPassword')
  }
  /**
   * User's schema
   */
  static get schema() {
    return {
      name: 'String',
      email: 'String',
      username: 'String'
    }
  }

  //Link Model and collection, in case where model name mismatch collection name
  static get schemaOptions() {
    return { collection: 'users', };
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens() {
    return this.hasMany('App/Models/NoSql/Token')
  }

  profile() {
    return this.hasOne('App/Models/NoSql/Profile')
  }

}

module.exports = User.buildModel('User')
