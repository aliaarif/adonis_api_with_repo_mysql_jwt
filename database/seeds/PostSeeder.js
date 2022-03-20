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
const User = use('App/Models/Sql/User')


class PostSeeder {
    async run() {

        // const users = await User.all()

        // for (let i in users.rows) {
        //     const user = users.rows[i]
        //     const post = Factory.model('App/Models/Sql/Post').make()
        //     user.posts().save(post);
        // }


        // users.each((user) => {
        //     const post = Factory.model('App/Models/Sql/Post').make()
        //     user.posts().save(post);
        // })


        const postsArray = Factory
            .model('App/Models/Sql/Post')
            .createMany(10)
    }
}

module.exports = PostSeeder
