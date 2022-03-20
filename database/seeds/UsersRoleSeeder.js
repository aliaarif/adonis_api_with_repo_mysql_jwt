'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const UsersRole = use('App/Models/Sql/UsersRole')
const Database = use('Database')


class UsersRoleSeeder {
    async run() {

        await UsersRole.createMany([
            { user_id: 1, role_id: 1 },
            { user_id: 2, role_id: 2 },
            { user_id: 3, role_id: 3 },
        ])
    }
}

module.exports = UsersRoleSeeder
