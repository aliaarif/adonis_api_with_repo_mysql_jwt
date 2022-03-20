'use strict'
const { ioc } = require('@adonisjs/fold')
const BaseRepository = use('App/Repositories/_BaseRepository')
const Config = use('Config')

class UserDetailRepository extends BaseRepository{
  model
  constructor(model){
    super(model)
    this.model = model
  }

}

ioc.singleton('UserDetailRepository', function (app) {
  const model = app.use(Config.get('constants.modelPath')+'UserDetails')
  return new UserDetailRepository(model)
})

module.exports = ioc.use('UserDetailRepository')