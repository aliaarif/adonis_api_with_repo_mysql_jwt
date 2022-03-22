'use strict'

/*
|--------------------------------------------------------------------------
| ProductCategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Category = use('App/Models/Sql/Category')
const ProductsCategory = use('App/Models/Sql/ProductsCategory')
// const Database = use('Database')


class ProductCategorySeeder {
    async run() {

        await Category.createMany([
            {
                name: 'Sweets',
                slug: 'sweets',
            },
            {
                name: 'Vegetables',
                slug: 'vegetables',
            },
            {
                name: 'Fast Food',
                slug: 'fast-food',
            },
            {
                name: 'Custom Category 1',
                slug: 'custom-category-1',
            },
            {
                name: 'Custom Category 2',
                slug: 'custom-category-2',
            },
            {
                name: 'Custom Category 3',
                slug: 'custom-category-3',
            },
            {
                name: 'Custom Category 4',
                slug: 'custom-category-4',
            },
            {
                name: 'Custom Category 5',
                slug: 'custom-category-5',
            },
            {
                name: 'Custom Category 6',
                slug: 'custom-category-6',
            },


        ])


        // Products Categorys (pivoted)
        // await ProductsCategory.createMany([
        //     {
        //         product_id: 1,
        //         category_id: 1
        //     },
        //     {
        //         product_id: 2,
        //         category_id: 2
        //     },
        //     {
        //         product_id: 3,
        //         category_id: 3
        //     }

        // ])
    }
}

module.exports = ProductCategorySeeder
