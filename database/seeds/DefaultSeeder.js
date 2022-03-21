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
const Role = use('App/Models/Sql/Role')
const Hash = use('Hash')
// const UsersRole = use('App/Models/Sql/UsersRole')
// const Database = use('Database')


class DefaultSeeder {
    async run() {
        // Roles Start
        const roleAdministrator = new Role()
        roleAdministrator.name = 'Administrator'
        roleAdministrator.slug = 'administrator'
        roleAdministrator.description = 'manage administrator privileges'
        await roleAdministrator.save()

        const roleModerator = new Role()
        roleModerator.name = 'Moderator'
        roleModerator.slug = 'moderator'
        roleModerator.description = 'manage moderator privileges'
        await roleModerator.save()

        const roleVendor = new Role()
        roleVendor.name = 'Vendor'
        roleVendor.slug = 'vendor'
        roleVendor.description = 'manage vendor privileges'
        await roleVendor.save()

        const roleCustomer = new Role()
        roleCustomer.name = 'Customer'
        roleCustomer.slug = 'customer'
        roleCustomer.description = 'manage customer privileges'
        await roleCustomer.save()
        // Roles Ends

        // Users Start
        const administrator = new User()
        administrator.name = 'Administrator'
        administrator.email = 'administrator@example.com'
        administrator.username = 'administrator'
        administrator.password = Hash.make('password', 10)
        await administrator.save()
        await administrator.roles().attach([roleAdministrator.id, roleModerator.id])

        const moderator = new User()
        moderator.name = 'Moderator'
        moderator.email = 'moderator@example.com'
        moderator.username = 'moderator'
        moderator.password = Hash.make('password', 10)
        await moderator.save()
        await moderator.roles().attach([roleModerator.id])

        const vendor = new User()
        vendor.name = 'Vendor'
        vendor.email = 'vendor@example.com'
        vendor.username = 'vendor'
        vendor.password = Hash.make('password', 10)
        await vendor.save()
        await vendor.roles().attach([roleVendor.id])

        const customer = new User()
        customer.name = 'Customer'
        customer.email = 'customer@example.com'
        customer.username = 'customer'
        customer.password = Hash.make('password', 10)
        await customer.save()
        await customer.roles().attach([roleCustomer.id])
        // Users Ends

    }
}

module.exports = DefaultSeeder
