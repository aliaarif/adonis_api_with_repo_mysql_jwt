'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const moment = use('moment')
const Mail = use('Mail')
const Env = use('Env')


// declare all characters
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';



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


    // program to generate random strings

    generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }




    sendVerificationEmail(session) {
        //const url = hostname === '127.0.0.1' || 'localhost' ? `http://` + hostname + `:3333/api/v1/confirm-email/${this.id}/${token}` : 'https://' + hostname
        const token = this.generateString(16).trim()
        session.put(`token-${this.id}`, token)

        // this.tokens().user_id = this.id
        // this.tokens().token = token
        // this.tokens().type = 'email-verification'
        // this.tokens().is_revoked = true

        // this.tokens().save()

        const url = `${Env.get('APP_URL', 'http://127.0.0.1:3333')}/confirm-email/${this.id}/${token}`
        Mail.send('emails.verify', {
            "user": this.toJSON(),
            "url": url
        }, (message) => {
            message
                .to(this.email)
                // .cc('account@example.com', 'Administrator')
                // .bcc('administrator@example.com', 'Administrator')
                .from('verify@example.com', 'Account Verification')
                .subject('Please verify your email | My Online Store')
        })
    }

}

module.exports = User