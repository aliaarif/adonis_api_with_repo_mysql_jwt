'use strict'
const { ioc } = require('@adonisjs/fold')
const BaseRepository = use('App/Repositories/_BaseRepository')
const Config = use('Config')

class CategoryRepository extends BaseRepository{
  model
  constructor(model){
    super(model)
    this.model = model
  }

}

ioc.singleton('CategoryRepository', function (app) {
  const model = app.use(Config.get('constants.modelPath')+'Category')
  return new CategoryRepository(model)
})

module.exports = ioc.use('CategoryRepository')