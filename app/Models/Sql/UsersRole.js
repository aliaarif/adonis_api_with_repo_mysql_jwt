'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const moment = use('moment')

class UsersRole extends Model {
    static get table() {
        return 'users_roles'
    }

    static get primaryKey() {
        return 'id'
    }

    static get foreignKey() {
        return 'user_id'
    }

    // getCreatedAtAgo({created_at}) {
    //     let formattedDate = moment(created_at).format(Config.get('constants.db_date_format'))
    //     return moment(formattedDate, Config.get('constants.db_date_format')).fromNow()
    // }
}

module.exports = UsersRole