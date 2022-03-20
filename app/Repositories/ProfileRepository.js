'use strict'
const { ioc } = require('@adonisjs/fold')
const BaseRepository = use('App/Repositories/_BaseRepository')
const Config = use('Config')

class ProfileRepository extends BaseRepository{
  model
  constructor(model){
    super(model)
    this.model = model
  }

}

ioc.singleton('ProfileRepository', function (app) {
  const model = app.use(Config.get('constants.modelPath')+'Profile')
  return new ProfileRepository(model)
})

module.exports = ioc.use('ProfileRepository')