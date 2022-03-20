'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const moment = use('moment')

class Profile extends Model {
    static get table() {
        return 'profiles'
    }

    static get primaryKey() {
        return 'id'
    }

    static get foreignKey() {
        return 'user_id'
    }
}

module.exports = Profile