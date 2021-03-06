'use strict'

const { all } = require('@adonisjs/lucid/src/Lucid/Model')
/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
// const User = use('App/Models/Sql/User')
// const Database = use('Database')


class ProductSeeder {
    async run() {

        // Products
        const products = Factory.model('App/Models/Sql/Product').createMany(16)

        // Products Details
        const productsDetails = Factory.model('App/Models/Sql/ProductDetail').createMany(16)

        // Products Variants
        const productsVariants = Factory.model('App/Models/Sql/ProductVariant').createMany(16)

        console.info('All Default Seeders run successfully')

    }
}

module.exports = ProductSeeder
