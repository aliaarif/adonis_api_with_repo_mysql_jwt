'use strict'
const { ioc } = require('@adonisjs/fold')
const BaseRepository = use('App/Repositories/_BaseRepository')
const Config = use('Config')

class ProductRepository extends BaseRepository {
  model
  constructor(model) {
    super(model)
    this.model = model
  }
}

ioc.singleton('ProductRepository', function (app) {
  const model = app.use(Config.get('constants.modelPath') + 'Product')
  return new ProductRepository(model)
})

module.exports = ioc.use('ProductRepository')