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
const User = use('App/Models/Sql/User')
const profileCount = 10
const randomFixedInteger = function (length) {
  return Math.floor(Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1));
}

const randomdId = randomFixedInteger(1)

// Factory for User and Their Profiles Start Here...
Factory.blueprint('App/Models/Sql/User', async (faker) => {
  // Hash.make('password', 10)
  return {
    name: faker.name(),
    email: faker.email(),
    username: faker.username(),
    password: 'password'
  }
})

Factory.blueprint('App/Models/Sql/Profile', async (faker, i) => {
  return {
    user_id: i + 1,
    country: 91
  }
})

// Factory.blueprint('App/Models/Sql/UsersRole', async (faker, i) => {
//   return {
//     user_id: i + 1,
//     role_id: i + 1,
//   }
// })
// Factory for User and Their Profiles Ends Here...


// Factory for Posts Start Here...
Factory.blueprint('App/Models/Sql/Post', async (faker) => {
  let sentence = faker.sentence({ words: 5 })
  let slug = sentence.replace(/[A-Z]/g, m => "-" + m.toLowerCase())
  return {
    user_id: randomFixedInteger(1),
    post_title: faker.sentence(),
    post_slug: slug,
    post_body: faker.paragraph()
  }
})
// Factory for Posts Ends Here...



// Factory for Product and Product Details and Product Variants Start Here...
Factory.blueprint('App/Models/Sql/Product', async (faker) => {
  let title = faker.sentence({ words: 3 })
  let slug = title.replace(/[A-Z]/g, m => "-" + m.toLowerCase())
  return {
    category_id: randomFixedInteger(1),
    title: title,
    slug: slug,
    price: randomFixedInteger(3).toFixed(2),
    image: 'https://ismbook.com/wp-content/uploads/2018/12/best-philosophy-books.jpg',
    thumbnail: 'https://ismbook.com/wp-content/uploads/2018/12/best-philosophy-books.jpg',
    description: faker.paragraph(),
    created_by: 1
  }
})

Factory.blueprint('App/Models/Sql/ProductDetail', async (faker, i) => {
  return {
    product_id: i + 1
  }
})

Factory.blueprint('App/Models/Sql/ProductVariant', async (faker, i) => {
  return {
    product_id: i + 1
  }
})

// Factory.blueprint('App/Models/Sql/ProductsCategory', async (faker, i) => {
//   return {
//     product_id: i + 1,
//     category_id: i + 1,
//   }
// })

// Factory for Product and Product Details and Product Variants Ends Here...



