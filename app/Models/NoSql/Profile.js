'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class Profile
 */
class Profile extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'ProfileHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Profile's schema
   */
  static get schema() {
    return {
      user_id: 'Integer',
      country: 'Integer',
      state: 'Integer',
      city: 'Integer'
    }
  }

  //Link Model and collection, in case where model name mismatch collection name
  static get schemaOptions() {
    return { collection: 'profiles', };
  }
}

module.exports = Profile.buildModel('Profile')
