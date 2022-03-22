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
const Profile = use('App/Models/Sql/Profile')
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


        // -------------------------//

        // Users Start
        const administrator = new User()
        administrator.name = 'Administrator'
        administrator.email = 'administrator@example.com'
        administrator.username = 'administrator'
        administrator.password = 'password'
        await administrator.save()
        await administrator.roles().attach([1, 2])

        const profileAdministrator = new Profile()
        profileAdministrator.user_id = administrator.id
        profileAdministrator.country = 91
        administrator.profile().save(profileAdministrator)



        const moderator = new User()
        moderator.name = 'Moderator'
        moderator.email = 'moderator@example.com'
        moderator.username = 'moderator'
        moderator.password = 'password'
        await moderator.save()
        await moderator.roles().attach([2])

        const profileModerator = new Profile()
        profileModerator.user_id = moderator.id
        profileModerator.country = 91
        moderator.profile().save(profileModerator)



        const vendor = new User()
        vendor.name = 'Vendor'
        vendor.email = 'vendor@example.com'
        vendor.username = 'vendor'
        vendor.password = 'password'
        await vendor.save()
        await vendor.roles().attach([3])

        const profileVendor = new Profile()
        profileVendor.user_id = vendor.id
        profileVendor.country = 91
        vendor.profile().save(profileVendor)



        const customer = new User()
        customer.name = 'Customer'
        customer.email = 'customer@example.com'
        customer.username = 'customer'
        customer.password = 'password'
        await customer.save()
        await customer.roles().attach([4])

        const profileCustomer = new Profile()
        profileCustomer.user_id = customer.id
        profileCustomer.country = 91
        customer.profile().save(profileCustomer)

        // Users Ends

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
