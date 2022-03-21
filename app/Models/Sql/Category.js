'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const moment = use('moment')

class Category extends Model {
    static get table() {
        return 'categories'
    }

    static get primaryKey() {
        return 'id'
    }

    product() {
        return this.belongsTo('App/Models/Sql/Product')
    }


    getCreatedAtAgo({ created_at }) {
        let formattedDate = moment(created_at).format(Config.get('constants.db_date_format'))
        return moment(formattedDate, Config.get('constants.db_date_format')).fromNow()
    }
}

module.exports = Category