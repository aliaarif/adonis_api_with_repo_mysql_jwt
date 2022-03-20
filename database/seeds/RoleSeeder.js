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
const Role = use('App/Models/Sql/Role')
const Database = use('Database')


class RoleSeeder {
    async run() {

        await Role.createMany([
            {
                name: 'Admin',
                slug: 'admin',
                description: 'Admin Role',
            },
            {
                name: 'Vendor',
                slug: 'vendor',
                description: 'Vendor Role',
            },
            {
                name: 'Customer',
                slug: 'customer',
                description: 'Customer Role',

            },
        ])

        await Database.table('users_roles').insert({ user_id: 1, role_id: 1 })
        await Database.table('users_roles').insert({ user_id: 2, role_id: 2 })
        await Database.table('users_roles').insert({ user_id: 3, role_id: 3 })
    }
}

module.exports = RoleSeeder
