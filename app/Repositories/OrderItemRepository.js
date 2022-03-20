'use strict'
const { ioc } = require('@adonisjs/fold')
const BaseRepository = use('App/Repositories/_BaseRepository')
const Config = use('Config')

class OrderItemRepository extends BaseRepository{
  model
  constructor(model){
    super(model)
    this.model = model
  }

}

ioc.singleton('OrderItemRepository', function (app) {
  const model = app.use(Config.get('constants.modelPath')+'OrderItem')
  return new OrderItemRepository(model)
})

module.exports = ioc.use('OrderItemRepository')