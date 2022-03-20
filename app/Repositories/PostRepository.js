'use strict'
const { ioc } = require('@adonisjs/fold')
const BaseRepository = use('App/Repositories/_BaseRepository')
const Config = use('Config')

class PostRepository extends BaseRepository{
  model
  constructor(model){
    super(model)
    this.model = model
  }

}

ioc.singleton('PostRepository', function (app) {
  const model = app.use(Config.get('constants.modelPath')+'Post')
  return new PostRepository(model)
})

module.exports = ioc.use('PostRepository')