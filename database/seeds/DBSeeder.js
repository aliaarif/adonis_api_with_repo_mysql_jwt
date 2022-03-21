'use strict'

const { all } = require('@adonisjs/lucid/src/Lucid/Model')
/*
|--------------------------------------------------------------------------
| DBSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Role = use('App/Models/Sql/Role')
const User = use('App/Models/Sql/User')
const Profile = use('App/Models/Sql/Profile')
const Post = use('App/Models/Sql/Post')

// const Database = use('Database')


class DBSeeder {
    async run() {

        // Users
        const users = Factory.model('App/Models/Sql/User').createMany(10);

        // Profiles
        const profiles = Factory.model('App/Models/Sql/Profile').createMany(10);

        // Posts
        const posts = Factory.model('App/Models/Sql/Post').createMany(10)

        // Products
        const products = Factory.model('App/Models/Sql/Product').createMany(100)

        // Products Details
        const productsDetails = Factory.model('App/Models/Sql/ProductDetail').createMany(100)

        // Products Variants
        const productsVariants = Factory.model('App/Models/Sql/ProductVariant').createMany(100)




    }
}

module.exports = DBSeeder
