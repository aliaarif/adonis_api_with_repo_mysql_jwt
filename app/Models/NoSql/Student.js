'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class Student
 */
class Student extends BaseModel {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'StudentHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Student's schema
   */
  static get schema () {
    return {

    }
  }

  //Link Model and collection, in case where model name mismatch collection name
  static get schemaOptions() {
    return { collection: 'Students', };
  }
}

module.exports = Student.buildModel('Student')
