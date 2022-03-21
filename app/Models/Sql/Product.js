'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const moment = use('moment')

class Product extends Model {
    static get table() {
        return 'products'
    }

    static get primaryKey() {
        return 'id'
    }

    static get foreignKey() {
        return 'category_id'
    }

    category() {
        return this.hasOne('App/Models/Sql/Category')
    }


    getCreatedAtAgo({ created_at }) {
        let formattedDate = moment(created_at).format(Config.get('constants.db_date_format'))
        return moment(formattedDate, Config.get('constants.db_date_format')).fromNow()
    }
}

module.exports = Product