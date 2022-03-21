'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const moment = use('moment')

class User extends Model {

    static boot() {
        super.boot()
        this.addHook('beforeCreate', 'User.hashPassword')
    }

    static get table() {
        return 'users'
    }

    static get primaryKey() {
        return 'id'
    }

    getCreatedAtAgo({ created_at }) {
        let formattedDate = moment(created_at).format(Config.get('constants.db_date_format'))
        return moment(formattedDate, Config.get('constants.db_date_format')).fromNow()
    }

    static get traits() {
        return [
            '@provider:Adonis/Acl/HasRole',
            '@provider:Adonis/Acl/HasPermission'
        ]
    }

    profile() {
        return this.hasOne('App/Models/Sql/Profile')
    }

    posts() {
        return this.hasMany('App/Models/Sql/Post')
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
        return this.hasMany('App/Models/Sql/Token')
    }

}

module.exports = User