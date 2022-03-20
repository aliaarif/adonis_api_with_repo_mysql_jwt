'use strict'
const { ioc } = require('@adonisjs/fold')
const BaseRepository = use('App/Repositories/_BaseRepository')
const Config = use('Config')

class OrderRepository extends BaseRepository{
  model
  constructor(model){
    super(model)
    this.model = model
  }

}

ioc.singleton('OrderRepository', function (app) {
  const model = app.use(Config.get('constants.modelPath')+'Order')
  return new OrderRepository(model)
})

module.exports = ioc.use('OrderRepository')