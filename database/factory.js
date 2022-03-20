'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/


/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')


Factory.blueprint('App/Models/Sql/User', async (faker) => {
  return {
    name: faker.name(),
    email: faker.email(),
    username: faker.username(),
    password: Hash.make('password', 10)
  }
})

// Factory.blueprint('App/Models/Sql/Profile', async (faker) => {
//   return {}
// })



Factory.blueprint('App/Models/Sql/Post', async (faker) => {
  let sentence = faker.sentence()
  let slug = sentence.replace(/[A-Z]/g, m => "-" + m.toLowerCase())
  return {
    user_id: 1,
    post_title: faker.sentence(),
    post_slug: slug,
    post_body: faker.paragraph()
  }
})



