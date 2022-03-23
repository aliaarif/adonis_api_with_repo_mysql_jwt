'use strict'

/*
|--------------------------------------------------------------------------
| BootSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
// const Permission = use('App/Models/Sql/Permission')
// const Role = use('App/Models/Sql/Role')

const Permission = use('Permission')
const Role = use('Role')

const User = use('App/Models/Sql/User')
const Profile = use('App/Models/Sql/Profile')


// const UsersRole = use('App/Models/Sql/UsersRole')
// const Database = use('Database')


class BootSeeder {
    async run() {

        // Permission for Users Module Accessibility Starts Here...
        const listUsersPermission = new Permission()
        listUsersPermission.slug = 'list_users'
        listUsersPermission.name = 'List Users'
        listUsersPermission.description = 'List users Permission'
        await listUsersPermission.save()

        const createUsersPermission = new Permission()
        createUsersPermission.slug = 'create_users'
        createUsersPermission.name = 'Create Users'
        createUsersPermission.description = 'Create users Permission'
        await createUsersPermission.save()

        const readUsersPermission = new Permission()
        readUsersPermission.slug = 'read_users'
        readUsersPermission.name = 'Read Users'
        readUsersPermission.description = 'Read users Permission'
        await readUsersPermission.save()

        const updateUsersPermission = new Permission()
        updateUsersPermission.slug = 'update_users'
        updateUsersPermission.name = 'Update Users'
        updateUsersPermission.description = 'Update users Permission'
        await updateUsersPermission.save()

        const deleteUsersPermission = new Permission()
        deleteUsersPermission.slug = 'delete_users'
        deleteUsersPermission.name = 'Delete Users'
        deleteUsersPermission.description = 'Delete users Permission'
        await deleteUsersPermission.save()

        const searchUsersPermission = new Permission()
        searchUsersPermission.slug = 'search_users'
        searchUsersPermission.name = 'Search Users'
        searchUsersPermission.description = 'Search users Permission'
        await searchUsersPermission.save()
        // Permission for Users Module Accessibility Ends Here...



        // Permission for Categories Module Accessibility Starts Here...
        const listCategoriesPermission = new Permission()
        listCategoriesPermission.slug = 'list_categories'
        listCategoriesPermission.name = 'List Categories'
        listCategoriesPermission.description = 'List Categories Permission'
        await listCategoriesPermission.save()

        const createCategoriesPermission = new Permission()
        createCategoriesPermission.slug = 'create_categories'
        createCategoriesPermission.name = 'Create Categories'
        createCategoriesPermission.description = 'Create Categories Permission'
        await createCategoriesPermission.save()

        const readCategoriesPermission = new Permission()
        readCategoriesPermission.slug = 'read_categories'
        readCategoriesPermission.name = 'Read Categories'
        readCategoriesPermission.description = 'Read Categories Permission'
        await readCategoriesPermission.save()

        const updateCategoriesPermission = new Permission()
        updateCategoriesPermission.slug = 'update_categories'
        updateCategoriesPermission.name = 'Update Categories'
        updateCategoriesPermission.description = 'Update Categories Permission'
        await updateCategoriesPermission.save()

        const deleteCategoriesPermission = new Permission()
        deleteCategoriesPermission.slug = 'delete_categories'
        deleteCategoriesPermission.name = 'Delete Categories'
        deleteCategoriesPermission.description = 'Delete Categories Permission'
        await deleteCategoriesPermission.save()

        const searchCategoriesPermission = new Permission()
        searchCategoriesPermission.slug = 'search_categories'
        searchCategoriesPermission.name = 'Search Categories'
        searchCategoriesPermission.description = 'Search Categories Permission'
        await searchCategoriesPermission.save()
        // Permission for Categories Module Accessibility Ends Here...



        // Permission for Products Module Accessibility Starts Here...
        const listProductsPermission = new Permission()
        listProductsPermission.slug = 'list_products'
        listProductsPermission.name = 'List Products'
        listProductsPermission.description = 'List Products Permission'
        await listProductsPermission.save()

        const createProductsPermission = new Permission()
        createProductsPermission.slug = 'create_products'
        createProductsPermission.name = 'Create Products'
        createProductsPermission.description = 'Create Products Permission'
        await createProductsPermission.save()

        const readProductsPermission = new Permission()
        readProductsPermission.slug = 'read_products'
        readProductsPermission.name = 'Read Products'
        readProductsPermission.description = 'Read Products Permission'
        await readProductsPermission.save()

        const updateProductsPermission = new Permission()
        updateProductsPermission.slug = 'update_products'
        updateProductsPermission.name = 'Update Products'
        updateProductsPermission.description = 'Update Products Permission'
        await updateProductsPermission.save()

        const deleteProductsPermission = new Permission()
        deleteProductsPermission.slug = 'delete_products'
        deleteProductsPermission.name = 'Delete Products'
        deleteProductsPermission.description = 'Delete Products Permission'
        await deleteProductsPermission.save()

        const searchProductsPermission = new Permission()
        searchProductsPermission.slug = 'search_products'
        searchProductsPermission.name = 'Search Products'
        searchProductsPermission.description = 'Search Products Permission'
        await searchProductsPermission.save()
        // Permission for Products Module Accessibility Ends Here...


        // Permission for Orders Module Accessibility Starts Here...
        const listOrdersPermission = new Permission()
        listOrdersPermission.slug = 'list_orders'
        listOrdersPermission.name = 'List Orders'
        listOrdersPermission.description = 'List Orders Permission'
        await listOrdersPermission.save()

        const createOrdersPermission = new Permission()
        createOrdersPermission.slug = 'create_orders'
        createOrdersPermission.name = 'Create Orders'
        createOrdersPermission.description = 'Create Orders Permission'
        await createOrdersPermission.save()

        const readOrdersPermission = new Permission()
        readOrdersPermission.slug = 'read_orders'
        readOrdersPermission.name = 'Read Orders'
        readOrdersPermission.description = 'Read Orders Permission'
        await readOrdersPermission.save()

        const updateOrdersPermission = new Permission()
        updateOrdersPermission.slug = 'update_orders'
        updateOrdersPermission.name = 'Update Orders'
        updateOrdersPermission.description = 'Update Orders Permission'
        await updateOrdersPermission.save()

        const deleteOrdersPermission = new Permission()
        deleteOrdersPermission.slug = 'delete_orders'
        deleteOrdersPermission.name = 'Delete Orders'
        deleteOrdersPermission.description = 'Delete Orders Permission'
        await deleteOrdersPermission.save()

        const searchOrdersPermission = new Permission()
        searchOrdersPermission.slug = 'search_orders'
        searchOrdersPermission.name = 'Search Orders'
        searchOrdersPermission.description = 'Search Orders Permission'
        await searchOrdersPermission.save()
        // Permission for Orders Module Accessibility Ends Here...




        // Roles Start
        const roleAdministrator = new Role()
        roleAdministrator.name = 'Administrator'
        roleAdministrator.slug = 'administrator'
        roleAdministrator.description = 'manage administrator privileges'
        await roleAdministrator.save()

        await roleAdministrator.permissions().attach([
            listUsersPermission.id,
            createUsersPermission.id,
            readUsersPermission.id,
            updateUsersPermission.id,
            deleteUsersPermission.id,
            searchUsersPermission.id,

            listCategoriesPermission.id,
            createCategoriesPermission.id,
            readCategoriesPermission.id,
            updateCategoriesPermission.id,
            deleteCategoriesPermission.id,
            searchCategoriesPermission.id,

            listProductsPermission.id,
            createProductsPermission.id,
            readProductsPermission.id,
            updateProductsPermission.id,
            deleteProductsPermission.id,
            searchProductsPermission.id,

            listOrdersPermission.id,
            createOrdersPermission.id,
            readOrdersPermission.id,
            updateOrdersPermission.id,
            deleteOrdersPermission.id,
            searchOrdersPermission.id,
        ])
        //await roleAdministrator.permissions().attach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24])



        const roleModerator = new Role()
        roleModerator.name = 'Moderator'
        roleModerator.slug = 'moderator'
        roleModerator.description = 'manage moderator privileges'
        await roleModerator.save()
        await roleModerator.permissions().attach([

            listUsersPermission.id,
            readUsersPermission.id,
            updateUsersPermission.id,
            searchUsersPermission.id,

            listCategoriesPermission.id,
            createCategoriesPermission.id,
            readCategoriesPermission.id,
            updateCategoriesPermission.id,
            deleteCategoriesPermission.id,
            searchCategoriesPermission.id,

            listProductsPermission.id,
            createProductsPermission.id,
            readProductsPermission.id,
            updateProductsPermission.id,
            deleteProductsPermission.id,
            searchProductsPermission.id,

            listOrdersPermission.id,
            createOrdersPermission.id,
            readOrdersPermission.id,
            updateOrdersPermission.id,
            deleteOrdersPermission.id,
            searchOrdersPermission.id,
        ])
        //await roleAdministrator.permissions().attach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24])




        const roleVendor = new Role()
        roleVendor.name = 'Vendor'
        roleVendor.slug = 'vendor'
        roleVendor.description = 'manage vendor privileges'
        await roleVendor.save()
        await roleVendor.permissions().attach([

            listProductsPermission.id,
            createProductsPermission.id,
            readProductsPermission.id,
            updateProductsPermission.id,
            deleteProductsPermission.id,
            searchProductsPermission.id,

            listOrdersPermission.id,
            createOrdersPermission.id,
            readOrdersPermission.id,
            updateOrdersPermission.id,
            deleteOrdersPermission.id,
            searchOrdersPermission.id,
        ])
        //await roleAdministrator.permissions().attach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24])


        const roleCustomer = new Role()
        roleCustomer.name = 'Customer'
        roleCustomer.slug = 'customer'
        roleCustomer.description = 'manage customer privileges'
        await roleCustomer.save()

        await roleCustomer.permissions().attach([
            listCategoriesPermission.id,
            readCategoriesPermission.id,
            searchCategoriesPermission.id,

            listProductsPermission.id,
            readProductsPermission.id,
            searchProductsPermission.id,

            listOrdersPermission.id,
            createOrdersPermission.id,
            readOrdersPermission.id,
            updateOrdersPermission.id,
            deleteOrdersPermission.id,
            searchOrdersPermission.id,
        ])
        //await roleAdministrator.permissions().attach([12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24])
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


    }
}

module.exports = BootSeeder