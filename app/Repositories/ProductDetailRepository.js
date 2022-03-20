'use strict'
const { ioc } = require('@adonisjs/fold')
const BaseRepository = use('App/Repositories/_BaseRepository')
const Config = use('Config')

class ProductDetailRepository extends BaseRepository{
  model
  constructor(model){
    super(model)
    this.model = model
  }

}

ioc.singleton('ProductDetailRepository', function (app) {
  const model = app.use(Config.get('constants.modelPath')+'ProductDetail')
  return new ProductDetailRepository(model)
})

module.exports = ioc.use('ProductDetailRepository')