'use strict'

const { all } = require('@adonisjs/lucid/src/Lucid/Model')

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
const Profile = use('App/Models/Sql/Profile')

class UserSeeder {
  async run() {
    // const usersArray = Factory
    //   .model('App/Models/Sql/User')
    //   .createMany(10)

    try {
      const users = Factory.model('App/Models/Sql/User').createMany(10)
      // const users = User.all()
      for (let i in users.row) {
        const user = users[i]
        let profile = new Profile()
        profile.user_id = user.id
        await profile.save()
      }


      // users.each((user) => {
      //   const userProfile = Factory.model('App/Models/Sql/Profile').make()
      //   userProfile.user_id = user.id
      //   user.profile().save(userProfile);
      // })


      // users.forEach((user) => {
      //   const userProfile = Factory.model('App/Models/Sql/Profile').make()
      //   userProfile.user_id = user.id
      //   user.profile().save(userProfile)
      // })


    } catch (e) {
      console.log('Error From Seeder in User and Profile: ', e);
    }
  }
}

module.exports = UserSeeder
