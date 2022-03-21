'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const moment = use('moment')

class Post extends Model {
    static get table() {
        return 'posts'
    }

    static get primaryKey() {
        return 'id'
    }

    static get foreignKey() {
        return 'user_id'
    }

    user() {
        return this.belongsTo('App/Models/Sql/User')
    }

    getCreatedAtAgo({ created_at }) {
        let formattedDate = moment(created_at).format(Config.get('constants.db_date_format'))
        return moment(formattedDate, Config.get('constants.db_date_format')).fromNow()
    }
}

module.exports = Post