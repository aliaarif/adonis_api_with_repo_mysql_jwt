'use strict'

/*
|--------------------------------------------------------------------------
| DefaultSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/Sql/User')
// const Role = use('App/Models/Sql/Role')
// const Permission = use('App/Models/Sql/Permission')

const Hash = use('Hash')
// const UsersRole = use('App/Models/Sql/UsersRole')
// const Database = use('Database')


class DefaultSeeder {
    async run() {





        // -------------------------//

        // Users
        const users = Factory.model('App/Models/Sql/User').createMany(1);

        // Profiles
        const profiles = Factory.model('App/Models/Sql/Profile').createMany(1);

        // Posts
        const posts = Factory.model('App/Models/Sql/Post').createMany(1)

    }
}

module.exports = DefaultSeeder
